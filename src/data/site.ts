import type { SiteEvent } from "@/components/site/EventCard";
import type { Member } from "@/components/site/MemberCard";
import type { ResourceItem } from "@/components/site/ResourceCard";
import roshan from "@/assets/team/roshan.png";
import kaushal from "@/assets/team/kaushal.png";
import sabi from "@/assets/team/sabi.png";
import nibesh from "@/assets/team/nibesh.png";
import sambuddha from "@/assets/team/sambuddha.png";
import sarana from "@/assets/team/sarana.png";
import sanju from "@/assets/team/sanju.png";
import sakar from "@/assets/team/sakar.png";
import dewasis from "@/assets/team/dewasis.png";
import aastha from "@/assets/team/aastha.png";
import prashant from "@/assets/team/prashant.png";
import ruchi from "@/assets/team/ruchi.png";
import conferenceImage from "@/assets/conference.jpg";
import fieldWorkImage from "@/assets/field-work.jpg";
import waterAbstract from "@/assets/water-abstract.jpg";

export const stats = [
  {
    value: "367+",
    label: "Young professionals reached",
    detail: "Community reach recorded by the chapter through events, outreach, and engagement by December 2025.",
  },
  {
    value: "3+",
    label: "Capacity-building events",
    detail: "Annual work plan target for webinars, trainings, and learning exchanges in 2026.",
  },
  {
    value: "15",
    label: "Membership goal",
    detail: "Target chapter membership by Q4 2026 with representation across multiple water-related sectors.",
  },
  {
    value: "SDG 6",
    label: "Core mission alignment",
    detail: "Programming is shaped around WASH, climate resilience, youth leadership, and water security.",
  },
] as const;

export const features = [
  {
    title: "Connect",
    description:
      "Create a stronger national network of young water professionals spanning academia, utilities, NGOs, consulting, and government.",
  },
  {
    title: "Build capacity",
    description:
      "Deliver webinars, trainings, peer learning, and leadership opportunities that strengthen technical and professional skills.",
  },
  {
    title: "Promote innovation",
    description:
      "Highlight youth-led research, field initiatives, and practical solutions that support Nepal’s water and climate priorities.",
  },
] as const;

export const objectives = [
  {
    title: "Build a strong national YWP network",
    points: [
      "Increase chapter membership from 6 to at least 15 members by Q4 2026.",
      "Ensure representation from at least three water-related sectors.",
      "Fill all steering committee vacancies by May 2026.",
      "Increase IWA membership to at least three members by Q2 2026.",
    ],
  },
  {
    title: "Provide professional development",
    points: [
      "Deliver at least three capacity-building events each year.",
      "Achieve a minimum of 25 participants per event.",
      "Ensure at least 80% positive participant feedback.",
      "Include at least one external or international speaker.",
    ],
  },
  {
    title: "Foster collaboration",
    points: [
      "Organise at least two joint activities with regional or international partners.",
      "Participate in at least 50% of Global YWP Coordination Calls.",
      "Formalise at least one partnership through an MoU or collaboration letter.",
    ],
  },
  {
    title: "Support IWA’s vision and SDG 6",
    points: [
      "Promote membership and chapter activities through targeted communications.",
      "Align major events with SDG 6 and Nepal’s WASH priorities.",
      "Support young professionals participating in national water forums.",
    ],
  },
  {
    title: "Empower young professionals and promote inclusion",
    points: [
      "Create volunteering and leadership opportunities for young professionals.",
      "Highlight at least three research or field initiatives through communications.",
      "Embed gender and social inclusion across activities and events.",
    ],
  },
] as const;

export const upcomingEvents: SiteEvent[] = [
  {
    title: "World Environment Day webinar on cryosphere and water futures",
    date: "June 2026",
    location: "Online",
    summary: "A thematic learning session focused on cryosphere change, mountain water systems, and resilience in Nepal.",
    tags: ["Webinar", "Climate resilience", "SDG 6"],
  },
  {
    title: "Life Cycle Assessment webinar for water professionals",
    date: "Q3 2026",
    location: "Online",
    summary: "Technical capacity-building session exploring environmental assessment tools for water and sanitation systems.",
    tags: ["Training", "Research", "Professional development"],
  },
  {
    title: "Environmental Impact Assessment training workshop",
    date: "Q3 2026",
    location: "Kathmandu",
    summary: "Practical workshop on environmental assessment, decision-making, and project preparedness for emerging professionals.",
    tags: ["Workshop", "Capacity building", "EIA"],
  },
  {
    title: "IWA YWP Nepal 5-year anniversary gathering",
    date: "Q4 2026",
    location: "Kathmandu",
    summary: "Community celebration and networking event reflecting on impact, partnerships, and future directions.",
    tags: ["Community", "Networking", "Anniversary"],
  },
];

export const pastEvents: SiteEvent[] = [
  {
    title: "Navigating groundwater complexity",
    date: "Past event",
    location: "Online",
    summary: "Knowledge exchange on groundwater systems, emerging challenges, and practical management approaches.",
    tags: ["Groundwater", "Webinar"],
  },
  {
    title: "Leveraging data for water management",
    date: "Past event",
    location: "Online",
    summary: "Discussion on evidence-based decision making, digital tools, and data-driven approaches in the water sector.",
    tags: ["Data", "Innovation"],
  },
  {
    title: "South Asia Water Dialogues",
    date: "Past event",
    location: "Regional collaboration",
    summary: "Regional exchange bringing together young water professionals across South Asia.",
    tags: ["Regional", "Collaboration"],
  },
  {
    title: "WAFON launch and youth engagement",
    date: "Past event",
    location: "Nepal",
    summary: "Engagement with the national water platform and broader sector partners to strengthen youth participation.",
    tags: ["WAFON", "Networking"],
  },
];

export const committeeMembers: Member[] = [
  {
    name: "Roshan Paudel",
    role: "Chair",
    image: roshan,
    email: "rosh.pdl@gmail.com",
    linkedin: "https://www.linkedin.com/",
    bio: "Roshan is a civil engineer specializing in water resources engineering, with a Master’s degree in Water Science and Engineering from IHE Delft Institute for Water Education in the Netherlands, supported by the Netherlands Fellowship Program. With over a decade of experience in academia and the water sector, he serves as the Research Head and an Assistant Professor in the Department of Civil Engineering at Himalayan WhiteHouse International College, affiliated with Purbanchal University, Nepal. He teaches water resources engineering courses, leads departmental research initiatives, secures external funding, and supervises undergraduate research. Roshan also contributes as the Managing Editor of Nexus: Journal of Interdisciplinary Engineering, Technology and Management and is committed to advancing sustainable resource management and addressing interconnected water, energy, and environmental challenges.",
  },
  {
    name: "Kaushal Chapagain",
    role: "Vice-Chair",
    image: kaushal,
    email: "kaushalchapagain@gmail.com",
    linkedin: "https://www.linkedin.com/",
    bio: "Kaushal is a researcher specializing in Integrated Water Resources Management, water security assessment, the water-energy-food nexus, and the impacts of climate and land use change on resources. He holds a Doctor of Engineering in Water Engineering and Management from the Asian Institute of Technology, Thailand, and works at the Centre for Water and Climate Adaptation. He co-developed the Water Security Assessment Tool and served as a visiting scholar at UNU-FLORES through the DAAD-funded ABCD-Centre’s FELS scholarship. He has authored peer-reviewed publications, co-edited a book, mentored graduate students, and presented at international water conferences.",
  },
  {
    name: "Sabi Rai",
    role: "Secretary",
    image: sabi,
    email: "iamsabirai@gmail.com",
    linkedin: "https://www.linkedin.com/",
    bio: "Sabi is a communication and marketing professional with over six years of experience across Nepal’s development and private sectors. She holds a Master’s in Business Studies from Tribhuvan University. She has supported national sanitation campaigns, school WASH and healthcare programmes, and major WASH conferences with a focus on communication, content development, and stakeholder engagement. Currently, she leads marketing activities at CRS Healthcare, focusing on strategic campaign planning, storytelling, brand communication, and partnership engagement to enhance outreach and organisational impact.",
  },
  {
    name: "Nibesh Shrestha",
    role: "Network Manager",
    image: nibesh,
    email: "sthanibesh16@gmail.com",
    linkedin: "https://www.linkedin.com/",
    bio: "Nibesh is an environmental engineer specialising in hydrology and water resources management and currently resides in Karlsruhe, Germany. He works at NIVUS GmbH, applying expertise in hydrology and meteorology to the NIVUS Rain project, enhancing heavy rain and flood forecasting with artificial intelligence. With around seven years of experience in Nepal and Germany, he is proficient in hydrological modelling, disaster risk management, and project management. He holds an MSc in Water Resources and Environmental Management from Leibniz University Hannover, supported by the World Meteorological Organization Fellowship.",
  },
  {
    name: "Sambuddha Bajracharya",
    role: "Membership Manager",
    image: sambuddha,
    email: "sambuddhabjr@gmail.com",
    linkedin: "https://www.linkedin.com/",
    bio: "Sambuddha is an interdisciplinary researcher and PhD candidate at the Luxembourg Institute of Science and Technology, where he studies ozone sinks and their behaviour during forest droughts with a focus on micrometeorology. He has a background in Environmental Engineering from Kathmandu University, where he worked on solid waste management, and later completed a master’s degree at the University of Moratuwa, Sri Lanka. He also worked as a research intern at Eawag in Switzerland, studying drought processes in snow-dominated regions. His work now focuses on understanding how environmental conditions influence ozone uptake in forest ecosystems.",
  },
  {
    name: "Sarana Tuladhar",
    role: "Events Manager",
    image: sarana,
    email: "saranatuladhar22@gmail.com",
    linkedin: "https://www.linkedin.com/",
    bio: "Sarana is an Erasmus Mundus master’s student specialising in wastewater treatment. Her academic and research interests focus on developing sustainable and innovative treatment technologies to address complex wastewater challenges. She is particularly interested in biological treatment processes, process optimisation, and the application of advanced technologies to improve treatment efficiency and resource recovery. Through her work, she aims to contribute to the development of a resilient and sustainable water management system.",
  },
  {
    name: "Sanju Lamichhane",
    role: "Partnership & Outreach Coordinator",
    image: sanju,
    linkedin: "https://www.linkedin.com/",
    bio: "Sanju has a bachelor’s degree in civil engineering from Pulchowk Campus, Institute of Engineering, Tribhuvan University. She is one of the youngest leaders in Nepal’s WASH sector and currently serves as Senior Divisional Engineer at the Department of Water Supply and Sewerage Management. She plays a central role in the Department’s planning section and contributes to critical policy and planning initiatives. Sanju’s leadership has been pivotal in shaping the WASH chapter of Nepal’s National Cholera Elimination Plan, and she champions gender equality and social inclusion in water sector programmes.",
  },
  {
    name: "Sakar Hada",
    role: "Partnership & Outreach Coordinator",
    image: sakar,
    linkedin: "https://www.linkedin.com/",
    bio: "Sakar is a civil engineer and graduate of the Institute of Engineering, Tribhuvan University. His work spans groundwater recharge, sanitation planning, documentation of vernacular architecture, and ecosystem-based adaptation. He was selected for IWRA’s award-winning World Water Envoy programme at the World Water Congress 2025 in Morocco, where he presented on the environmental and cultural significance of the Nagdaha wetland and engaged with global water professionals. He is keen on engaging communities to address pressing water challenges and believes effective infrastructural solutions must align with local needs and context.",
  },
  {
    name: "Dewasis Dahal",
    role: "Academics & Research Coordinator",
    image: dewasis,
    linkedin: "https://www.linkedin.com/",
    bio: "Dewasis is a water resources engineer at Maurer-Stutz, Inc. in Illinois, where he works on hydraulic and hydrologic modelling, dam safety assessments, stormwater and water supply infrastructure, and GIS-based analysis. He holds a Master of Science in Civil Engineering from Southern Illinois University and a Bachelor of Technology in Environmental Engineering from Kathmandu University. His research interests span flood risk modelling, green infrastructure, machine learning applications in hydrology, and climate change impacts on freshwater systems. He has authored and co-authored over a dozen peer-reviewed publications.",
  },
  {
    name: "Aastha Pandey",
    role: "Academics & Research Coordinator",
    image: aastha,
    linkedin: "https://www.linkedin.com/",
    bio: "Aastha is an environmental planner with dual master’s degrees in Physical Geography from the University of Chinese Academy of Sciences and Environmental Management and Physical Planning from Stockholm University. Her research focuses on water quality, climate resilience, and sustainable environmental systems, with contributions to seven peer-reviewed publications and a book chapter related to Himalayan river systems and environmental sustainability. She currently leads the Disaster Resilience Programme at Engineers Without Borders Nepal and focuses on technical training and capacity-building initiatives related to monsoon disaster preparedness and climate awareness.",
  },
  {
    name: "Prashant Gautam",
    role: "Communications & Information Management Coordinator",
    image: prashant,
    linkedin: "https://www.linkedin.com/",
    bio: "Prashant is a master’s candidate in Disaster Preparedness, Mitigation and Management at the Asian Institute of Technology, Thailand. With over three and a half years of experience in water resources engineering and flood risk analysis, he has contributed to infrastructure design and resilience planning in Nepal’s energy sector. He currently serves as a Disaster Risk Reduction Co-Coordinator at the Water Youth Network. His work interests lie at the intersection of climate change adaptation and resilient infrastructure, and he is also active in leadership and communication communities including Toastmasters and Global Shapers.",
  },
  {
    name: "Ruchi Ojha",
    role: "Communications & Information Management Coordinator",
    image: ruchi,
    linkedin: "https://www.linkedin.com/",
    bio: "Ruchi is a Development Studies undergraduate at National College, Kathmandu, with a focus on governance, development communication, and environmental sustainability. She has engaged in the WASH sector through research, coordination, and communication roles. She contributed to national-level WASH dialogues with Smart WASH Solutions and supported climate-resilient development work at Scott Wilson Nepal. She is also the co-founder of Hydr02Research, a youth-led research initiative on sustainable water management. Her interests lie in climate-resilient WASH systems and using communication to strengthen impact in Nepal’s water sector.",
  },
];

export const membershipBenefits = [
  "Access to events, webinars, and professional development opportunities",
  "Networking with peers, mentors, and national and international partners",
  "Volunteer and leadership opportunities within the chapter",
  "Visibility for research, field stories, and professional achievements",
  "Pathways to deepen engagement with IWA and the wider water community",
  "A collaborative platform aligned with WASH, climate resilience, and SDG 6",
] as const;

export const resourcesByCategory: { title: string; items: ResourceItem[] }[] = [
  {
    title: "Newsletters & updates",
    items: [
      {
        title: "Chapter highlights and member updates",
        description: "A space for curated updates on chapter activities, opportunities, and milestones from the YWP Nepal community.",
        type: "Newsletter",
        href: "#",
      },
      {
        title: "Calls for participation and announcements",
        description: "Track training opportunities, deadlines, collaborations, and key notices relevant to young water professionals.",
        type: "Updates",
        href: "#",
      },
    ],
  },
  {
    title: "Research & knowledge",
    items: [
      {
        title: "Member research highlights",
        description: "Feature youth-led research and field initiatives in hydrology, WASH, water quality, wastewater, and climate resilience.",
        type: "Research",
        href: "#",
      },
      {
        title: "Reports and opportunity briefs",
        description: "A growing collection of summaries, reports, and useful references for learning and collaboration.",
        type: "Reports",
        href: "#",
      },
    ],
  },
  {
    title: "Events & media",
    items: [
      {
        title: "Webinar recordings and slides",
        description: "Access event recaps, presentations, and knowledge products from past YWP Nepal sessions.",
        type: "Media",
        href: "#",
      },
      {
        title: "Calls for abstracts and external opportunities",
        description: "Share opportunities for publication, presenting, funding, and collaboration across the water sector.",
        type: "Opportunities",
        href: "#",
      },
    ],
  },
];

export const galleryItems = [
  { title: "Field learning and water monitoring", category: "Fieldwork", image: fieldWorkImage },
  { title: "Conference participation and chapter presence", category: "Conferences", image: conferenceImage },
  { title: "Webinar and digital engagement visuals", category: "Digital outreach", image: waterAbstract },
  { title: "Collaborative learning spaces", category: "Capacity building", image: conferenceImage },
  { title: "Water professionals in action", category: "Community", image: fieldWorkImage },
  { title: "Visibility and communication assets", category: "Communications", image: waterAbstract },
] as const;

export const partnerNames = ["Water Forum Nepal (WAFON)", "IWA Nepal Secretariat", "Regional YWP Chapters"] as const;
