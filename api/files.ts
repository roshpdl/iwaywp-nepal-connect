// Simple Vercel serverless API to read/write files in this repo via GitHub Contents API
// Protects access with ADMIN_PASSWORD (x-admin-password header) when ADMIN_PASSWORD is set in env

const GITHUB_TOKEN = process.env.VERCEL_GITHUB_TOKEN
const REPO_OWNER = process.env.REPO_OWNER
const REPO_NAME = process.env.REPO_NAME
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

if (!GITHUB_TOKEN || !REPO_OWNER || !REPO_NAME) {
  console.warn('Missing VERCEL_GITHUB_TOKEN / REPO_OWNER / REPO_NAME environment variables')
}

const API_BASE = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents`

async function githubFetch(path, options = {}) {
  options.headers = {
    ...(options.headers || {}),
    Authorization: `token ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'User-Agent': 'vercel-admin-panel',
  }
  const url = `${API_BASE}/${encodeURIComponent(path)}`
  const res = await fetch(url, options)
  const json = await res.json()
  if (!res.ok) throw { status: res.status, body: json }
  return json
}

function getHeader(req, name) {
  // Vercel provides headers in lowercase keys on req.headers (if used). Accept both.
  return (req.headers && (req.headers[name] || req.headers[name.toLowerCase()])) || null
}

export default async function handler(req, res) {
  try {
    // Enforce ADMIN_PASSWORD if configured
    if (ADMIN_PASSWORD) {
      const provided = getHeader(req, 'x-admin-password') || ''
      if (provided !== ADMIN_PASSWORD) {
        return res.status(401).json({ error: 'Unauthorized: missing or invalid x-admin-password header' })
      }
    }

    if (req.method === 'GET') {
      const path = (req.query && req.query.path) || 'content/pages'
      const json = await githubFetch(path)
      if (json && json.type === 'file' && json.content) {
        const content = Buffer.from(json.content, 'base64').toString('utf8')
        return res.json({ type: 'file', path, sha: json.sha, content })
      } else if (Array.isArray(json)) {
        return res.json({ type: 'dir', entries: json })
      } else {
        return res.json(json)
      }
    }

    if (req.method === 'PUT' || req.method === 'POST') {
      const body = req.body || (await parseBody(req))
      const { path, content, sha, message } = body || {}
      if (!path || content === undefined) return res.status(400).json({ error: 'path and content are required' })
      const encoded = Buffer.from(content, 'utf8').toString('base64')
      const payload = {
        message: message || `Admin update ${path}`,
        content: encoded,
        sha: sha || undefined,
        committer: { name: 'Site Admin', email: 'admin@example.com' },
      }
      const options = { method: 'PUT', body: JSON.stringify(payload) }
      const result = await githubFetch(path, options)
      return res.json(result)
    }

    if (req.method === 'DELETE') {
      const body = req.body || (await parseBody(req))
      const { path, sha, message } = body || {}
      if (!path || !sha) return res.status(400).json({ error: 'path and sha required' })
      const payload = { message: message || `Admin delete ${path}`, sha }
      const options = { method: 'DELETE', body: JSON.stringify(payload) }
      const result = await githubFetch(path, options)
      return res.json(result)
    }

    res.setHeader('Allow', 'GET,PUT,POST,DELETE')
    return res.status(405).end('Method Not Allowed')
  } catch (err) {
    console.error('api/files error', err)
    const status = err && err.status ? err.status : 500
    return res.status(status).json({ error: err && err.body ? err.body : (err && err.message) || err })
  }
}

// helper to parse body in case req.body isn't already set (Vercel sometimes parses it)
async function parseBody(req) {
  return new Promise((resolve, reject) => {
    try {
      let data = ''
      req.on && req.on('data', (chunk) => (data += chunk))
      req.on && req.on('end', () => {
        try {
          resolve(data ? JSON.parse(data) : {})
        } catch (e) {
          resolve({})
        }
      })
    } catch (e) {
      resolve({})
    }
  })
}
