/**
 * Central content configuration for Mabawa Uplift Foundation.
 * Everything editable (contacts, stats, projects, team, partners, socials)
 * lives here so the frontend never has to be rewritten to update content.
 */

export const org = {
  name: "Mabawa Uplift Foundation",
  shortName: "Mabawa Uplift",
  motto: "Giving Wings to Hope",
  tagline: "Supporting communities. Empowering young people. Creating opportunities.",
  intro:
    "Mabawa Uplift Foundation is a youth-led organization committed to empowering young people, supporting education, promoting mental wellness, strengthening communities, and creating sustainable opportunities for underserved populations.",
  about:
    "Mabawa Uplift Foundation is a youth-led organization committed to creating positive social impact through youth empowerment, education support, mental health awareness, community outreach, health promotion, environmental sustainability, and sustainable development initiatives.",
  vision:
    "To build empowered, resilient, and inclusive communities where children and youth have access to opportunities, support systems, and environments that enable them to thrive socially, emotionally, educationally, and economically.",
  mission:
    "To uplift communities through youth empowerment, education support, mental health advocacy, community outreach, and sustainable development initiatives that create meaningful and lasting impact.",
  url: "https://mabawaupliftfoundation.lovable.app",
};

export const contact = {
  email: "mabawaupliftfoundation@gmail.com",
  phone: "+254 724 301 244",
  phoneHref: "tel:+254724301244",
  donationPhone: "0792 326083",
  donationPhoneHref: "tel:+254792326083",
  location: "Kenya",
};

export const socials = [
  { label: "Instagram", handle: "@mabawa_uplift", href: "https://instagram.com/mabawa_uplift", icon: "instagram" as const },
  { label: "TikTok", handle: "@mabawauplift_foundation", href: "https://tiktok.com/@mabawauplift_foundation", icon: "tiktok" as const },
];

export const inquiryTypes = [
  "General Inquiry",
  "Partnership",
  "Donation",
  "Sponsorship",
  "Volunteering",
  "Membership",
  "Media",
  "Project Support",
];

/** Verified figures only. Update here as the organization grows. */
export const impactStats = [
  { value: 105, suffix: "+", label: "Learners targeted through special-needs outreach initiatives" },
  { value: 26000, prefix: "KES ", suffix: "", label: "Mobilized through member contributions toward outreach" },
  { value: 2, suffix: "", label: "Major special-needs outreach programs planned" },
];

export const impactAreas = [
  { label: "People Reached", note: "Reporting begins with our first implemented outreach." },
  { label: "Communities Served", note: "Kisii County and Murang'a / Machakos outreach communities targeted." },
  { label: "Schools Reached", note: "2 special-needs schools engaged for planned outreach." },
  { label: "Youth Engaged", note: "Youth-led membership actively mobilizing." },
  { label: "Volunteers", note: "Volunteer register opens with each outreach." },
  { label: "Projects Implemented", note: "Reported once outreach activities are completed." },
  { label: "Funds Mobilized", note: "KES 26,000 through member contributions." },
  { label: "Partners", note: "Partners listed once confirmed." },
];

export const impactTimeline = [
  { date: "2026", title: "Foundation formed", body: "Mabawa Uplift Foundation established as a youth-led community organization under the motto Giving Wings to Hope." },
  { date: "2026", title: "Member resource mobilization", body: "KES 26,000 mobilized internally toward two planned special-needs school outreach programs." },
  { date: "19 Oct 2026", title: "Kenyenya Community Health Outreach", body: "Planned community health outreach at Kenyenya School Grounds, Kisii County." },
  { date: "25 Oct 2026", title: "Marani Community Health Outreach", body: "Planned community health outreach at Marani Primary School Grounds, Kisii County." },
];

export const coreValues = [
  { title: "Compassion", desc: "We meet every community with empathy and dignity." },
  { title: "Integrity", desc: "We do what we say, and we account for what we do." },
  { title: "Inclusivity", desc: "Every person belongs, regardless of ability or background." },
  { title: "Accountability", desc: "Transparent reporting on every shilling and every activity." },
  { title: "Innovation", desc: "Practical, youth-driven solutions to community challenges." },
  { title: "Service", desc: "Grassroots presence, hands-on and community-first." },
  { title: "Sustainability", desc: "Impact designed to outlast a single outreach day." },
  { title: "Empowerment", desc: "We build capability, not dependency." },
];

export type FocusArea = { slug: string; title: string; desc: string; icon: string };

export const focusAreas: FocusArea[] = [
  {
    slug: "mental-health",
    title: "Mental Health Awareness & Advocacy",
    icon: "brain",
    desc: "Promoting emotional well-being through awareness campaigns, community outreach, safe spaces, education, youth engagement, and appropriate referral and support mechanisms.",
  },
  {
    slug: "education",
    title: "Education Support",
    icon: "book",
    desc: "Supporting learners through educational outreach, school visits, stationery drives, mentorship, learning materials, and academic empowerment.",
  },
  {
    slug: "youth",
    title: "Youth Empowerment",
    icon: "rocket",
    desc: "Providing young people with mentorship, leadership opportunities, skills development, networking, entrepreneurship, and personal development opportunities.",
  },
  {
    slug: "community",
    title: "Community Outreach & Charity",
    icon: "handshake",
    desc: "Supporting vulnerable communities through donations, volunteering, health outreach, social support, and community-driven initiatives.",
  },
  {
    slug: "health",
    title: "Health Promotion",
    icon: "stethoscope",
    desc: "Supporting community health awareness and connecting communities with appropriate healthcare professionals and services through outreach partnerships.",
  },
  {
    slug: "environment",
    title: "Environmental Sustainability",
    icon: "leaf",
    desc: "Promoting clean-up activities, environmental awareness, recycling, conservation, and sustainable community practices.",
  },
];

export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming / Proposed" | "Planned / Outreach Program";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  location: string;
  date?: string;
  time?: string;
  target?: string;
  activities: string[];
  poster?: string;
};

export const projects: Project[] = [
  {
    slug: "kenyenya-community-health-outreach",
    title: "Kenyenya Community Health Outreach",
    status: "Upcoming / Proposed",
    location: "Kenyenya School Grounds, Kisii County",
    date: "19 October 2026",
    time: "8:00 AM – 6:00 PM",
    poster: "/__l5e/assets-v1/79cd786d-6f43-4b2a-914b-545c1add6c40/kenyenya-poster.png",
    activities: [
      "Medical consultations",
      "Dental check-ups",
      "Oral health education",
      "Mental health awareness",
      "Sexual and reproductive health education",
      "Expert health advice",
      "Community education",
      "Youth engagement",
      "Games and recreational activities",
      "Music and talent activities",
      "Community engagement",
    ],
  },
  {
    slug: "marani-community-health-outreach",
    title: "Marani Community Health Outreach",
    status: "Upcoming / Proposed",
    location: "Marani Primary School Grounds, Kisii County",
    date: "25 October 2026",
    time: "8:00 AM – 6:00 PM",
    activities: [
      "Medical consultations",
      "Dental health services",
      "Mental health awareness",
      "Health education",
      "Sexual and reproductive health education",
      "Expert advice",
      "Community engagement",
      "Youth activities",
      "Games",
      "Music",
      "Talent activities",
      "Recreational activities",
    ],
  },
  {
    slug: "don-orione-special-school-outreach",
    title: "Don Orione Special School Outreach",
    status: "Planned / Outreach Program",
    location: "Don Orione Special School, Kiharu, Murang'a County",
    target: "45 learners",
    activities: [
      "Mental health awareness",
      "Wellness talks",
      "Interactive discussions",
      "Fun games",
      "Team building",
      "School cleaning and beautification",
      "Charity support",
      "Educational materials",
      "Art",
      "Music",
      "Dance",
      "Talent activities",
      "Shared meals and social interaction",
    ],
  },
  {
    slug: "mitaboni-special-needs-school-outreach",
    title: "Mitaboni Special Needs School Outreach",
    status: "Planned / Outreach Program",
    location: "Mitaboni Special Needs School, Kathiani, Machakos County",
    target: "60 learners",
    activities: [
      "Mental wellness sessions",
      "Educational engagement",
      "Team building",
      "Art and creative activities",
      "Essential supplies donations",
      "Meals and refreshments",
    ],
  },
];

export const funding = {
  total: 70410,
  memberContribution: 26000,
  get externalRequired() {
    return this.total - this.memberContribution;
  },
  note: "KES 13,000 allocated toward each planned special-needs outreach.",
  quote: "Every contribution helps us extend the reach and quality of our community programs.",
};

export const partnerTypes = [
  "NGOs",
  "Foundations",
  "Government institutions",
  "County governments",
  "National government agencies",
  "Corporates",
  "Schools",
  "Universities",
  "Hospitals",
  "Healthcare professionals",
  "Community organizations",
  "Faith-based organizations",
  "Youth organizations",
  "Media organizations",
  "Private businesses",
  "Development partners",
  "International organizations",
];

export const partnershipOpportunities = [
  "Financial sponsorship",
  "In-kind donations",
  "Technical expertise",
  "Healthcare partnerships",
  "Education partnerships",
  "Youth empowerment partnerships",
  "Mental health partnerships",
  "Community mobilization",
  "Research partnerships",
  "Media partnerships",
  "Volunteer partnerships",
  "Capacity building",
];

/** Only verified partners should be added here. */
export const partners: { name: string; logo?: string; url?: string }[] = [];

export const leadership = [
  { name: "Zachariah Nyatuga Manani", role: "Founder & Vice Chairperson" },
  { name: "Abigail Isika", role: "Chairperson & Co-Founder" },
  { name: "Travor Gacheru", role: "Secretary General" },
  { name: "Tracy Renee", role: "Organizing Secretary" },
  { name: "Christine Mbanda", role: "Treasurer" },
  { name: "Keddy Manani", role: "Media & Communications Officer" },
];

export const foundingMembers = ["Arnold", "Cynthia Wambura", "Ruth Kerubo"];

export type Representative = {
  name: string;
  role?: string;
  photo?: string;
  country: string;
  county: string;
  subCounty?: string;
  community?: string;
};

export const representatives: Representative[] = [
  { name: "Kevin Ombui", role: "Head, Kisii County", photo: "kevin-ombui.png", country: "Kenya", county: "Kisii County" },
  { name: "Rueben Makana", role: "Deputy, Kisii County", photo: "rueben-makana.png", country: "Kenya", county: "Kisii County" },
];

export const membershipBenefits = [
  "Community outreach",
  "Leadership",
  "Volunteering",
  "Youth empowerment",
  "Networking",
  "Training",
  "Community service",
  "Project implementation",
  "Advocacy",
  "Social impact initiatives",
];

export const documents = [
  { title: "Our Constitution", desc: "Governing document of the Foundation.", href: "" },
  { title: "Annual Reports", desc: "Published at the end of each reporting year.", href: "" },
  { title: "Project Reports", desc: "Activity and outcome reports per outreach.", href: "" },
  { title: "Financial Accountability", desc: "Contribution and expenditure summaries.", href: "" },
  { title: "Partnerships", desc: "Register of confirmed partners and agreements.", href: "" },
  { title: "Policies", desc: "Operational and volunteer policies.", href: "" },
  { title: "Safeguarding", desc: "Child and vulnerable persons safeguarding policy.", href: "" },
];

export const newsCategories = [
  "Community Outreach",
  "Youth",
  "Mental Health",
  "Education",
  "Health",
  "Environment",
  "Partnerships",
  "Announcements",
  "Success Stories",
];

export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  image?: string;
  excerpt: string;
  content: string[];
};

/** Articles are published here; a CMS can replace this array without frontend changes. */
export const articles: Article[] = [];
