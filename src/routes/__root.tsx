import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-semibold text-foreground">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">This page didn’t load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Please try again or return to the homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IWA Young Water Professionals Nepal Chapter" },
      {
        name: "description",
        content:
          "National platform connecting and empowering young water professionals in Nepal through capacity building, research, WASH, climate resilience, and collaboration.",
      },
      { property: "og:title", content: "IWA Young Water Professionals Nepal Chapter" },
      {
        property: "og:description",
        content:
          "National platform connecting and empowering young water professionals in Nepal through capacity building, research, WASH, climate resilience, and collaboration.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IWA YWP Nepal" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IWA Young Water Professionals Nepal Chapter" },
      { name: "description", content: "A professional, responsive website for IWA YWP Nepal, empowering young water professionals in Nepal." },
      { property: "og:description", content: "A professional, responsive website for IWA YWP Nepal, empowering young water professionals in Nepal." },
      { name: "twitter:description", content: "A professional, responsive website for IWA YWP Nepal, empowering young water professionals in Nepal." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b1153c17-610d-4076-8d2e-5d88157d5df6/id-preview-549a3719--e74cf576-a9ae-4960-90a3-ebbfba1e7420.lovable.app-1778938922975.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b1153c17-610d-4076-8d2e-5d88157d5df6/id-preview-549a3719--e74cf576-a9ae-4960-90a3-ebbfba1e7420.lovable.app-1778938922975.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "IWA Young Water Professionals Nepal Chapter",
          alternateName: "IWA YWP Nepal",
          url: "/",
          logo: "/",
          email: "mailto:ywpnepal@gmail.com",
          sameAs: [
            "https://www.linkedin.com/",
            "https://www.facebook.com/",
            "https://www.youtube.com/",
          ],
          description:
            "A national platform that empowers, connects, and builds the capacity of young water professionals in Nepal.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
