// Central content/config for the Aztec construction site.

export const COMPANY = {
  name: 'Aztec',
  full: 'Aztec Construction',
  tagline: 'Building Excellence From Design To Completion',
  phone: '+1 (415) 555-0142',
  whatsapp: '14155550142',
  email: 'hello@aztecconstruction.com',
  address: '8800 Preston Rd, Inglewood, Maine 98380',
  hours: 'Mon – Fri · 8:00 AM – 6:00 PM',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'X', href: '#' },
  ],
}

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export const STATS = [
  { value: 27, suffix: '+', label: 'Years of Experience' },
  { value: 480, suffix: '+', label: 'Projects Completed' },
  { value: 90, suffix: '+', label: 'Expert Engineers' },
  { value: 100, suffix: '%', label: 'Happy Clients' },
]

// Full service taxonomy from the brief.
export const SERVICE_CATEGORIES = [
  {
    slug: 'design',
    title: 'Architectural Design',
    short: 'Design',
    icon: 'compass',
    blurb:
      'From concept sketches to construction-ready drawings, our architects translate vision into buildable precision.',
    items: [
      'Architectural Design',
      'House Plans & Floor Plans',
      '2D & 3D Building Designs',
      '3D Visualization / Rendering',
      'Interior & Exterior Design',
      'Structural Drawings',
    ],
  },
  {
    slug: 'construction',
    title: 'Construction Services',
    short: 'Build',
    icon: 'crane',
    blurb:
      'Ground-up construction delivered to international quality standards, on schedule and on budget.',
    items: [
      'Residential Building Construction',
      'Commercial Building Construction',
      'Luxury Homes Construction',
      'Apartments & Multi-Family Housing',
      'Schools, Churches & Office Buildings',
      'Turnkey Construction',
    ],
  },
  {
    slug: 'renovation',
    title: 'Renovation & Remodeling',
    short: 'Renovate',
    icon: 'cube',
    blurb:
      'Transform existing spaces into something new, functional and beautiful with expert remodeling.',
    items: [
      'Home Renovation',
      'Building Remodeling',
      'Roofing Works & Repairs',
      'Property Upgrades & Extensions',
    ],
  },
  {
    slug: 'project-management',
    title: 'Project Management & Supervision',
    short: 'Manage',
    icon: 'clipboard',
    blurb:
      'Rigorous site supervision and coordination that keeps every stakeholder aligned and accountable.',
    items: [
      'Site Supervision',
      'Construction Project Management',
      'Contractor Coordination',
      'Quality Control & Monitoring',
      'Timeline & Progress Management',
    ],
  },
  {
    slug: 'cost-estimation',
    title: 'BOQ & Cost Estimation',
    short: 'Estimate',
    icon: 'calculator',
    blurb:
      'Transparent quantities and costing so you know exactly where every dollar is invested.',
    items: [
      'Bill of Quantities Preparation',
      'Construction Cost Estimation',
      'Material Estimation',
      'Budget Planning',
      'Cost Consultation',
    ],
  },
  {
    slug: 'interior-finishing',
    title: 'Interior Finishing Works',
    short: 'Finish',
    icon: 'brush',
    blurb:
      'The finishing touches that turn a structure into a refined, livable space.',
    items: [
      'POP / Gypsum Ceiling',
      'Painting Services',
      'Floor & Wall Tiling',
      'Kitchen Cabinet Installation',
      'Wardrobe Installation',
      'Lighting & Finishing Touches',
    ],
  },
  {
    slug: 'exterior-works',
    title: 'Exterior Works',
    short: 'Exterior',
    icon: 'tree',
    blurb:
      'Landscaping, paving and outdoor systems that complete the property envelope.',
    items: [
      'Landscaping',
      'Compound Paving',
      'Fence Wall Construction',
      'Gate Installation',
      'Drainage Systems',
      'Outdoor Space Enhancement',
    ],
  },
  {
    slug: 'engineering',
    title: 'Engineering Services',
    short: 'Engineer',
    icon: 'bolt',
    blurb:
      'Structural, mechanical and electrical engineering backed by certified specialists.',
    items: [
      'Structural Engineering Consultation',
      'Plumbing Installation',
      'Electrical Installation',
      'Water Systems Installation',
      'Security Systems',
      'Smart Home Installation',
    ],
  },
  {
    slug: 'consultancy',
    title: 'Consultancy Services',
    short: 'Consult',
    icon: 'chat',
    blurb:
      'Expert guidance at every decision point, from feasibility to material selection.',
    items: [
      'Construction Consultation',
      'Site Inspection',
      'Building Planning Guidance',
      'Material Selection Advice',
      'Property Development Consultation',
    ],
  },
]

// Cards shown on the homepage (matches the 3-card design: white / black / yellow)
export const HOME_SERVICE_CARDS = [
  {
    variant: 'light',
    icon: 'bricks',
    title: 'New Construction',
    text: 'Our team of experienced professionals specializes in designing and building new structures from the ground up.',
  },
  {
    variant: 'dark',
    icon: 'bars',
    title: 'Commercial Construction',
    text: 'Our expertise extends to commercial construction projects — from office buildings and retail spaces to restaurants.',
  },
  {
    variant: 'accent',
    icon: 'cube',
    title: 'Renovation & Remodeling',
    text: 'Transform your existing space into something new and functional with our renovation and remodeling services.',
  },
]

export const PROCESS = [
  { n: '01', title: 'Consultation', text: 'We listen to your goals, site constraints and budget to frame the project.' },
  { n: '02', title: 'Planning', text: 'Feasibility, scheduling and a clear roadmap to delivery.' },
  { n: '03', title: 'Design', text: 'Architectural and structural design, visualized in 2D & 3D.' },
  { n: '04', title: 'Cost Estimation', text: 'Detailed BOQ and transparent costing — no surprises.' },
  { n: '05', title: 'Construction', text: 'Skilled crews build to spec with premium materials.' },
  { n: '06', title: 'Supervision', text: 'On-site quality control and progress monitoring throughout.' },
  { n: '07', title: 'Finishing', text: 'Interior and exterior finishing executed to a luxury standard.' },
  { n: '08', title: 'Delivery', text: 'A turnkey handover of a project built to last.' },
]

export const WHY_US = [
  { icon: 'team', title: 'Expert Team', text: 'Certified engineers, architects and craftspeople with decades of combined experience.' },
  { icon: 'bolt', title: 'Modern Technology', text: 'BIM, 3D visualization and smart construction methods on every project.' },
  { icon: 'calculator', title: 'Transparent Pricing', text: 'Detailed BOQs and honest costing so you always know where your money goes.' },
  { icon: 'clock', title: 'Timely Delivery', text: 'Disciplined scheduling and supervision keep your project on track.' },
  { icon: 'shield', title: 'Quality Assurance', text: 'Rigorous quality control at every milestone, from foundation to finish.' },
  { icon: 'layers', title: 'End-to-End Solutions', text: 'One accountable partner from first sketch to final handover.' },
]

export const PROJECTS = [
  {
    slug: 'atlas-museum',
    name: 'Atlas Museum',
    category: 'Commercial',
    year: '2025',
    location: 'Portland, OR',
    cover: 'photo-1486325212027-8081e485255e',
    blurb: 'A sculptural cultural landmark blending exposed concrete with daylight-filled galleries.',
    scope: ['Architectural Design', 'Structural Engineering', 'Turnkey Construction'],
    size: '14,200 m²',
    duration: '22 months',
    budget: '$48M',
    gallery: ['photo-1486325212027-8081e485255e', 'photo-1487958449943-2429e8be8625', 'photo-1449157291145-7efd050a4d0e'],
    challenge: 'A complex cantilevered roof structure over column-free public galleries demanded advanced structural modeling.',
    solution: 'We used parametric BIM analysis and post-tensioned concrete to achieve 18m spans while keeping sightlines clean.',
  },
  {
    slug: 'axel-towers',
    name: 'Axel Towers',
    category: 'Residential',
    year: '2024',
    location: 'Seattle, WA',
    cover: 'photo-1545324418-cc1a3fa10c00',
    blurb: 'Twin luxury residential towers with a unified podium and landscaped sky-decks.',
    scope: ['Luxury Construction', 'MEP Engineering', 'Interior Finishing'],
    size: '38,500 m²',
    duration: '34 months',
    budget: '$120M',
    gallery: ['photo-1545324418-cc1a3fa10c00', 'photo-1481253127861-534498168948', 'photo-1460472178825-e5240623afd5'],
    challenge: 'Delivering two 28-storey towers on a tight urban site with active neighbours and limited laydown space.',
    solution: 'A just-in-time logistics plan and modular façade system compressed the schedule by four months.',
  },
  {
    slug: 'glass-hotel',
    name: 'Glass Hotel',
    category: 'Hospitality',
    year: '2025',
    location: 'San Francisco, CA',
    cover: 'photo-1506744038136-46273834b3fb',
    blurb: 'A 5-star boutique hotel wrapped in a high-performance double-skin glass façade.',
    scope: ['Architectural Design', 'Curtain Wall', 'Smart Building'],
    size: '21,000 m²',
    duration: '28 months',
    budget: '$76M',
    gallery: ['photo-1506744038136-46273834b3fb', 'photo-1551882547-ff40c63fe5fa', 'photo-1518733057094-95b53143d2a7'],
    challenge: 'Meeting strict energy targets with a fully glazed envelope in a seismic zone.',
    solution: 'A double-skin façade with automated shading plus a base-isolation system balanced transparency and performance.',
  },
  {
    slug: 'park-on-the-roof',
    name: 'Park On The Roof',
    category: 'Mixed-Use',
    year: '2023',
    location: 'Austin, TX',
    cover: 'photo-1464146072230-91cabc968266',
    blurb: 'A mixed-use complex crowned by a public rooftop park and urban farm.',
    scope: ['Structural Engineering', 'Landscaping', 'Project Management'],
    size: '26,800 m²',
    duration: '30 months',
    budget: '$92M',
    gallery: ['photo-1464146072230-91cabc968266', 'photo-1416331108676-a22ccb276e35', 'photo-1518005020951-eccb494ad742'],
    challenge: 'Supporting 1.2m of soil and mature trees on an occupied roof structure.',
    solution: 'Lightweight engineered soil and a transfer-truss system carried the green load without oversizing columns.',
  },
  {
    slug: 'bridge-river',
    name: 'Bridge River',
    category: 'Infrastructure',
    year: '2024',
    location: 'Denver, CO',
    cover: 'photo-1473221326025-9183b464bb7e',
    blurb: 'A pedestrian cable-stayed bridge connecting two riverside districts.',
    scope: ['Civil Engineering', 'Structural Design', 'Construction'],
    size: '180 m span',
    duration: '18 months',
    budget: '$31M',
    gallery: ['photo-1473221326025-9183b464bb7e', 'photo-1502920917128-1aa500764cbd', 'photo-1545558014-8692077e9b5c'],
    challenge: 'Erecting a single-pylon span over an active waterway with minimal in-water work.',
    solution: 'Balanced-cantilever erection from the bank kept the river open throughout construction.',
  },
  {
    slug: 'cedar-residence',
    name: 'Cedar Residence',
    category: 'Residential',
    year: '2025',
    location: 'Lake Tahoe, NV',
    cover: 'photo-1564013799919-ab600027ffc6',
    blurb: 'A private luxury home in timber, stone and glass set into a forested slope.',
    scope: ['Architectural Design', 'Luxury Construction', 'Smart Home'],
    size: '820 m²',
    duration: '16 months',
    budget: '$9.5M',
    gallery: ['photo-1564013799919-ab600027ffc6', 'photo-1600585154340-be6161a56a0c', 'photo-1600607687939-ce8a6c25118c'],
    challenge: 'Building on a steep, ecologically sensitive lakeside slope.',
    solution: 'A stepped foundation and helical piers minimized excavation and protected the shoreline.',
  },
]

export const PROJECT_CATEGORIES = ['All', 'Residential', 'Commercial', 'Hospitality', 'Mixed-Use', 'Infrastructure']

export const TESTIMONIALS = [
  {
    quote:
      'Outstanding customer support. They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.',
    name: 'Cooper, Kristin',
    role: 'Homeowner',
    rating: 5,
    photo: 'photo-1507003211169-0a1dd7228f2d',
  },
  {
    quote:
      'A game-changer for my business. Their expertise and strategic guidance provided to my team transformed my business into a success. Truly a world-class partner.',
    name: 'Augustina Midgett',
    role: 'Developer',
    rating: 5,
    photo: 'photo-1438761681033-6461ffad8d80',
  },
  {
    quote:
      'From design to delivery, Aztec managed every detail with precision. The build came in on time and the quality is simply exceptional. We could not be happier.',
    name: 'Marcus Reyes',
    role: 'Property Investor',
    rating: 5,
    photo: 'photo-1500648767791-00dcc994a43e',
  },
  {
    quote:
      'Their transparency around cost and schedule gave us complete confidence. Aztec feels like a true engineering partner, not just a contractor.',
    name: 'Elena Whitfield',
    role: 'Operations Director',
    rating: 5,
    photo: 'photo-1494790108377-be9c29b29330',
  },
]

export const PARTNERS = [
  'Vantage', 'Northbeam', 'Steelcore', 'Apex Cement', 'Lumina', 'Forge & Co', 'Meridian', 'Granite Bay',
]

export const FAQS = [
  {
    q: 'What types of projects does Aztec take on?',
    a: 'We deliver residential, commercial, hospitality, mixed-use and infrastructure projects — from private luxury homes to large multi-storey developments and turnkey commercial buildings.',
  },
  {
    q: 'Do you handle both design and construction?',
    a: 'Yes. Aztec is an end-to-end partner. We can take a project from concept and architectural design through engineering, cost estimation, construction, finishing and final handover.',
  },
  {
    q: 'How do you keep projects on budget?',
    a: 'Every project begins with a detailed Bill of Quantities and transparent cost estimation. We monitor spend against budget throughout and flag variations early so there are no surprises.',
  },
  {
    q: 'Can I see progress while construction is underway?',
    a: 'Absolutely. We provide regular progress reporting, site supervision updates and milestone reviews so you always know exactly where your project stands.',
  },
  {
    q: 'Do you provide cost estimates before I commit?',
    a: 'Yes — we offer free initial consultations and can prepare preliminary estimates to help you plan before any commitment is made.',
  },
  {
    q: 'Where do you operate?',
    a: 'We operate across the region and take on select projects nationally. Reach out with your location and we will confirm availability for your build.',
  },
]

export const VALUES = [
  { title: 'Integrity', text: 'We do what we say, and we build what we promise.' },
  { title: 'Precision', text: 'Engineering rigor applied to every millimetre and every milestone.' },
  { title: 'Safety', text: 'Zero-compromise safety culture on every site, every day.' },
  { title: 'Craft', text: 'A relentless pursuit of quality in materials and execution.' },
  { title: 'Partnership', text: 'We treat your project as if it were our own.' },
  { title: 'Sustainability', text: 'Responsible building for the long term.' },
]

export const TEAM = [
  { name: 'Daniel Okoro', role: 'Founder & Principal Engineer', photo: 'photo-1560250097-0b93528c311a' },
  { name: 'Sofia Marchetti', role: 'Head of Architecture', photo: 'photo-1573496359142-b8d87734a5a2' },
  { name: 'James Calloway', role: 'Director of Construction', photo: 'photo-1556157382-97eda2d62296' },
  { name: 'Priya Nair', role: 'Project Management Lead', photo: 'photo-1580489944761-15a19d654956' },
]

export const MILESTONES = [
  { year: '1998', title: 'Founded', text: 'Aztec opens its doors with a small team and a big standard for craft.' },
  { year: '2005', title: 'First Commercial Tower', text: 'Completed our first major commercial high-rise, ahead of schedule.' },
  { year: '2012', title: 'Engineering Division', text: 'Launched in-house structural and MEP engineering capability.' },
  { year: '2018', title: 'Design Studio', text: 'Opened a full architectural design and 3D visualization studio.' },
  { year: '2022', title: '400+ Projects', text: 'Surpassed 400 completed projects across five sectors.' },
  { year: '2025', title: 'Smart Building Practice', text: 'Established a dedicated smart-building and sustainability team.' },
]

export const CERTS = [
  'ISO 9001 Quality Management',
  'ISO 45001 Occupational Safety',
  'LEED Accredited Professionals',
  'Licensed General Contractor',
  'Certified Structural Engineers',
  'OSHA Compliant Operations',
]
