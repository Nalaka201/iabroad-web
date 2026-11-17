// SAMPLE DATA — stands in for the MongoDB collections (Countries,
// Universities, Courses + static Services/Testimonials) until the live
// Next.js Route Handlers / Prisma layer exists. Every item below is
// SAMPLE data; none of it represents a real institution, course, fee
// or person. The UI also labels sample items with a "Sample" badge.

import type {
  Country,
  Course,
  Service,
  Settings,
  Testimonial,
  University,
} from "./types";

export const settings: Settings = {
  name: "Ibroad Education",
  tagline: "Your Global Education Journey Starts Here",
  phone: "+91 98765 43210",
  email: "info@ibroadeducation.com",
  address: "Sample office address — updated via admin Settings",
  hours: "Mon–Sat, 10:00–18:00",
};

export const destinations: Country[] = [
  {
    code: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    blurb:
      "World-leading research universities, two-year graduate route, and a rich multicultural student life.",
    popular: ["Business", "Engineering", "Law"],
  },
  {
    code: "au",
    name: "Australia",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    blurb:
      "Strong post-study work rights, globally ranked institutions, and a safe, welcoming climate for students.",
    popular: ["Nursing", "IT", "Hospitality"],
  },
  {
    code: "ca",
    name: "Canada",
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    blurb:
      "Affordable tuition, clear PR pathways, and a reputation for inclusive, high-quality education.",
    popular: ["Computer Science", "Health", "Business"],
  },
  {
    code: "us",
    name: "United States",
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    blurb:
      "The widest range of programs and research funding, with flexible credit-based curricula.",
    popular: ["Data Science", "Engineering", "Business"],
  },
  {
    code: "de",
    name: "Germany",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    blurb:
      "Low- and no-tuition public universities, strong engineering programs, and a thriving industry network.",
    popular: ["Engineering", "Automotive", "Sciences"],
  },
  {
    code: "nz",
    name: "New Zealand",
    flag: "🇳🇿",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
    blurb:
      "Compact, practical programs with post-study work options in a uniquely safe environment.",
    popular: ["Agriculture", "IT", "Hospitality"],
  },
];

export const universities: University[] = [
  {
    id: "u1",
    name: "Northbridge University",
    country: "uk",
    countryName: "United Kingdom",
    city: "London",
    mono: "NB",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    established: 1893,
    featured: true,
    desc:
      "A research-intensive university in the heart of London, known for business, law and applied sciences with strong industry placements.",
    website: "https://example.edu",
    reqs: [
      "IELTS 6.5 overall (no band below 6.0)",
      "Bachelor's degree with 60% or 2:2 equivalent for master's",
      "Statement of purpose + two references",
      "Valid passport and financial proof",
    ],
  },
  {
    id: "u2",
    name: "Kingsfield Institute of Technology",
    country: "uk",
    countryName: "United Kingdom",
    city: "Manchester",
    mono: "KI",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    established: 1965,
    featured: false,
    desc:
      "A specialist STEM institute with modern labs and close ties to the northern engineering and digital sectors.",
    website: "https://example.edu",
    reqs: [
      "IELTS 6.0 overall",
      "Relevant bachelor's in science/engineering",
      "Portfolio for design programs",
      "Tuberculosis screening (where applicable)",
    ],
  },
  {
    id: "u3",
    name: "Harbourview University",
    country: "au",
    countryName: "Australia",
    city: "Sydney",
    mono: "HV",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
    established: 1950,
    featured: true,
    desc:
      "A coastal campus renowned for nursing, marine science and IT, with a structured post-study work pathway.",
    website: "https://example.edu",
    reqs: [
      "IELTS 6.5 (6.0 in each band)",
      "Academic IELTS or equivalent",
      "GTE / GS requirement",
      "Overseas Student Health Cover (OSHC)",
    ],
  },
  {
    id: "u4",
    name: "Southern Cross College",
    country: "au",
    countryName: "Australia",
    city: "Melbourne",
    mono: "SC",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
    established: 1971,
    featured: false,
    desc:
      "A career-focused college strong in hospitality, business and design, with industry-embedded capstone projects.",
    website: "https://example.edu",
    reqs: [
      "IELTS 6.0 overall",
      "Year 12 or equivalent",
      "Statement of purpose",
      "Financial capacity statement",
    ],
  },
  {
    id: "u5",
    name: "Maple Ridge University",
    country: "ca",
    countryName: "Canada",
    city: "Toronto",
    mono: "MR",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
    established: 1827,
    featured: true,
    desc:
      "A comprehensive university excelling in computer science, health and business, with co-op work-integrated learning.",
    website: "https://example.edu",
    reqs: [
      "IELTS 6.5 / TOEFL 86",
      "4-year bachelor's for master's",
      "Study permit approval",
      "Letter of intent",
    ],
  },
  {
    id: "u6",
    name: "Pacific Crest Institute",
    country: "ca",
    countryName: "Canada",
    city: "Vancouver",
    mono: "PC",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80",
    established: 1980,
    featured: false,
    desc:
      "A mid-size institute focused on film, animation and sustainable technology on the Pacific coast.",
    website: "https://example.edu",
    reqs: [
      "IELTS 6.5",
      "Portfolio (creative programs)",
      "Diploma or degree",
      "Proof of funds",
    ],
  },
  {
    id: "u7",
    name: "Liberty State University",
    country: "us",
    countryName: "United States",
    city: "New York",
    mono: "LS",
    image: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=800&q=80",
    established: 1846,
    featured: true,
    desc:
      "A globally ranked research university offering a vast catalog across data science, engineering and business.",
    website: "https://example.edu",
    reqs: [
      "TOEFL 100 / IELTS 7.0",
      "GRE/GMAT for select programs",
      "3.0 GPA minimum",
      "F-1 visa + I-20",
    ],
  },
  {
    id: "u8",
    name: "Rhine Valley University",
    country: "de",
    countryName: "Germany",
    city: "Berlin",
    mono: "RV",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    established: 1948,
    featured: false,
    desc:
      "A public technical university with no tuition for most programs, strong in engineering and applied sciences.",
    website: "https://example.edu",
    reqs: [
      "TestDaF DSH-2 or IELTS 6.5",
      "APS certificate",
      "Relevant bachelor's",
      "Blocked account proof",
    ],
  },
  {
    id: "u9",
    name: "Southern Alps University",
    country: "nz",
    countryName: "New Zealand",
    city: "Auckland",
    mono: "SA",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=800&q=80",
    established: 1883,
    featured: false,
    desc:
      "A practical, research-led university excelling in agriculture, IT and tourism management.",
    website: "https://example.edu",
    reqs: [
      "IELTS 6.5",
      "Recognised bachelor's",
      "Student visa approval",
      "Funds for living expenses",
    ],
  },
];

export const courses: Course[] = [
  { id: "c1", title: "MSc International Business", uni: "u1", field: "Business", level: "Master", duration: "12 months", fee: 28500, intake: "Sep, Jan", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80", desc: "Strategy, finance and cross-cultural management with a London-based industry consultancy project.", reqs: ["Bachelor's 60%", "IELTS 6.5", "GMAT optional", "2 references"] },
  { id: "c2", title: "LLM Corporate Law", uni: "u1", field: "Law", level: "Master", duration: "12 months", fee: 31000, intake: "Sep", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80", desc: "Advanced corporate and financial regulation taught by practising solicitors in the City.", reqs: ["LLB or equivalent", "IELTS 7.0", "Statement of purpose"] },
  { id: "c3", title: "BEng Mechanical Engineering", uni: "u2", field: "Engineering", level: "Bachelor", duration: "36 months", fee: 22000, intake: "Sep", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80", desc: "Accredited program with strong design, robotics and thermodynamics specialisms.", reqs: ["A-levels / 12th PCM 70%", "IELTS 6.0", "Personal statement"] },
  { id: "c4", title: "BSc Computer Science", uni: "u2", field: "Computer Science", level: "Bachelor", duration: "36 months", fee: 24000, intake: "Sep, Jan", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80", desc: "Algorithms, software engineering and AI foundations with a year in industry option.", reqs: ["12th with Maths 70%", "IELTS 6.0", "Coding portfolio (optional)"] },
  { id: "c5", title: "Bachelor of Nursing", uni: "u3", field: "Health", level: "Bachelor", duration: "36 months", fee: 26000, intake: "Feb, Jul", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80", desc: "Clinical placements leading to AHPRA registration eligibility.", reqs: ["12th science 65%", "IELTS 7.0 (7.0 each)", "Police check", "Immunisation proof"] },
  { id: "c6", title: "Master of Information Technology", uni: "u3", field: "Computer Science", level: "Master", duration: "24 months", fee: 33000, intake: "Feb, Jul", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80", desc: "Software architecture, data systems and cybersecurity with an industry capstone.", reqs: ["Bachelor's in IT/CS", "IELTS 6.5", "CV"] },
  { id: "c7", title: "MBA Hospitality Management", uni: "u4", field: "Business", level: "Master", duration: "18 months", fee: 27000, intake: "Mar, Sep", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80", desc: "Strategic hospitality operations with a six-month paid internship.", reqs: ["Bachelor's + 2 yrs work", "IELTS 6.5", "Interview"] },
  { id: "c8", title: "Diploma in Culinary Arts", uni: "u4", field: "Hospitality", level: "Diploma", duration: "12 months", fee: 16000, intake: "Apr, Oct", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80", desc: "Hands-on kitchen, patisserie and restaurant management fundamentals.", reqs: ["Year 12", "IELTS 5.5", "Medical fitness"] },
  { id: "c9", title: "MSc Data Science", uni: "u5", field: "Data Science", level: "Master", duration: "20 months", fee: 21000, intake: "Sep, Jan", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", desc: "Statistics, machine learning and big-data engineering with a co-op term.", reqs: ["Bachelor's with stats/prog", "IELTS 6.5", "GRE recommended"] },
  { id: "c10", title: "Bachelor of Computer Science (Co-op)", uni: "u5", field: "Computer Science", level: "Bachelor", duration: "48 months", fee: 19000, intake: "Sep", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80", desc: "Work-integrated learning with paid co-op placements across tech employers.", reqs: ["12th with Maths 75%", "IELTS 6.5", "Supplementary application"] },
  { id: "c11", title: "MS Computer Engineering", uni: "u7", field: "Engineering", level: "Master", duration: "24 months", fee: 38000, intake: "Sep", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80", desc: "VLSI, embedded systems and ML hardware with thesis and course tracks.", reqs: ["B.E./B.Tech", "TOEFL 100", "GRE 315+"] },
  { id: "c12", title: "MEng Automotive Engineering", uni: "u8", field: "Engineering", level: "Master", duration: "24 months", fee: 1500, intake: "Oct", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80", desc: "No-tuition public program in vehicle systems, electric mobility and manufacturing.", reqs: ["B.E. Mechanical/Auto", "TestDaF/IELTS 6.5", "APS certificate"] },
];

export const services: Service[] = [
  { icon: "compass", title: "University Selection", desc: "Shortlist universities and courses matched to your profile, budget and goals." },
  { icon: "doc", title: "Application Support", desc: "End-to-end application, SOP and document preparation with deadline tracking." },
  { icon: "visa", title: "Visa Guidance", desc: "Accurate visa checklists, mock interviews and filing support for every country." },
  { icon: "plane", title: "Pre-Departure", desc: "Accommodation, travel, forex and cultural briefing so you land ready." },
];

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    initials: "AS",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    role: "MSc Data Science, Canada",
    text: "Ibroad narrowed 40 universities down to the five that genuinely fit my profile and budget. The co-op option they flagged changed my whole plan — for the better.",
  },
  {
    name: "Priya Nair",
    initials: "PN",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    role: "Bachelor of Nursing, Australia",
    text: "From the AHPRA requirements to the visa interview, every step was planned. I never felt lost, even when documents kept changing.",
  },
  {
    name: "Rahul Verma",
    initials: "RV",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    role: "MEng Automotive, Germany",
    text: "They handled the APS, blocked account and university emails end to end. Landing in Berlin with everything sorted was surreal.",
  },
];

// Derived statistics (computed from the sample data above).
export const stats = {
  universities: universities.length,
  courses: courses.length,
  countries: destinations.length,
  placed: 1240,
  satisfaction: 98,
};

// --- Lookup helpers (used by server + client components) ---
export function getUniversity(id: string): University | undefined {
  return universities.find((u) => u.id === id);
}

export function getCourse(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getCoursesByUniversity(id: string): Course[] {
  return courses.filter((c) => c.uni === id);
}

export function unisByCountry(code: string): University[] {
  return universities.filter((u) => u.country === code);
}

export function featuredUniversities(): University[] {
  return universities.filter((u) => u.featured);
}

export function countryByCode(code: string): Country | undefined {
  return destinations.find((d) => d.code === code);
}
