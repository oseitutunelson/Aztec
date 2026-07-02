// Central content/config for the ArkNova construction site.

export const COMPANY = {
  name: 'ArkNova',
  full: 'ArkNova Construction',
  tagline: 'Building Excellence From Design To Completion',
  phone: '0554331810',
  phone2: '0501951251',
  // International format for WhatsApp / tel deep-links (Ghana +233).
  whatsapp: '233554331810',
  email: 'info@arknovaconstruction.com',
  address: '12 Liberation Road, Airport Residential Area, Accra, Ghana',
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
  { value: 17, suffix: '+', label: 'Years of Experience' },
  { value: 350, suffix: '+', label: 'Projects Completed' },
  { value: 60, suffix: '+', label: 'Skilled Professionals' },
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
      'Transparent quantities and costing so you know exactly where every cedi is invested.',
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

// Compact home services — clean portrait cards with elegant icons.
export const HOME_SERVICE_CARDS = [
  {
    icon: 'crane',
    title: 'New Construction',
    text: 'Ground-up residential and commercial builds, engineered to last and delivered turnkey.',
  },
  {
    icon: 'compass',
    title: 'Architectural Design',
    text: 'House plans, 2D & 3D designs and structural drawings ready for construction.',
  },
  {
    icon: 'cube',
    title: 'Renovation & Remodeling',
    text: 'Upgrade, extend or transform existing buildings into modern, functional spaces.',
  },
  {
    icon: 'clipboard',
    title: 'Project Management',
    text: 'Disciplined site supervision that keeps quality, budget and timeline on track.',
  },
  {
    icon: 'brush',
    title: 'Interior Finishing',
    text: 'POP ceilings, tiling, painting and fittings executed to a premium standard.',
  },
  {
    icon: 'calculator',
    title: 'BOQ & Cost Estimation',
    text: 'Transparent bills of quantities so you know where every cedi is invested.',
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

// Seven reasons clients choose ArkNova — concise, icon-led.
export const WHY_US = [
  { icon: 'team', title: 'Experienced Professionals', text: 'Certified engineers, architects and craftsmen with years of proven experience.' },
  { icon: 'brush', title: 'Quality Craftsmanship', text: 'Premium materials and meticulous workmanship on every single build.' },
  { icon: 'clock', title: 'Timely Project Delivery', text: 'Disciplined scheduling and supervision keep your project firmly on track.' },
  { icon: 'chat', title: 'Transparent Communication', text: 'Clear updates and honest costing so you always know where things stand.' },
  { icon: 'bolt', title: 'Modern Construction Methods', text: 'Contemporary techniques and smart building practices on every project.' },
  { icon: 'star', title: 'Client Satisfaction', text: 'We measure success by the trust and satisfaction of the clients we serve.' },
  { icon: 'shield', title: 'Safety First', text: 'A zero-compromise safety culture protects our teams and your investment.' },
]

export const PROJECTS = [
  {
    slug: 'legon-hills-residence',
    name: 'Legon Hills Residence',
    category: 'Residential Homes',
    year: '2024',
    location: 'East Legon, Accra',
    cover: 'photo-1564013799919-ab600027ffc6',
    blurb: 'A contemporary four-bedroom family home with clean lines, natural light and a landscaped compound.',
    scope: ['Architectural Design', 'Turnkey Construction', 'Interior Finishing'],
    size: '420 m²',
    duration: '11 months',
    budget: 'GH₵ 2.4M',
    gallery: ['photo-1564013799919-ab600027ffc6', 'photo-1600585154340-be6161a56a0c', 'photo-1600607687939-ce8a6c25118c'],
    challenge: 'Delivering a modern, light-filled home on a sloping East Legon plot within a fixed family budget.',
    solution: 'A stepped foundation and open-plan layout maximised space and daylight while keeping earthworks lean.',
  },
  {
    slug: 'trasacco-valley-villa',
    name: 'Trasacco Valley Villa',
    category: 'Luxury Villas',
    year: '2025',
    location: 'Trasacco Valley, Accra',
    cover: 'photo-1600566753086-00f18fb6b3ea',
    blurb: 'A five-bedroom luxury villa with pool, smart-home systems and bespoke interior finishes.',
    scope: ['Architectural Design', 'Luxury Construction', 'Smart Home'],
    size: '780 m²',
    duration: '18 months',
    budget: 'GH₵ 6.8M',
    gallery: ['photo-1600566753086-00f18fb6b3ea', 'photo-1600585154340-be6161a56a0c', 'photo-1564013799919-ab600027ffc6'],
    challenge: 'Balancing an ambitious luxury specification with flawless finishing and a premium timeline.',
    solution: 'A dedicated finishing crew and imported-material logistics plan protected both quality and schedule.',
  },
  {
    slug: 'airport-city-commercial',
    name: 'Airport City Commercial',
    category: 'Commercial Buildings',
    year: '2024',
    location: 'Airport City, Accra',
    cover: 'photo-1486325212027-8081e485255e',
    blurb: 'A multi-storey commercial building with retail podium and flexible upper-floor lettable space.',
    scope: ['Structural Engineering', 'Turnkey Construction', 'MEP Engineering'],
    size: '6,400 m²',
    duration: '22 months',
    budget: 'GH₵ 24M',
    gallery: ['photo-1486325212027-8081e485255e', 'photo-1487958449943-2429e8be8625', 'photo-1449157291145-7efd050a4d0e'],
    challenge: 'Building on a tight commercial plot with active neighbours and limited laydown space.',
    solution: 'A just-in-time delivery schedule and phased structure kept the busy district moving throughout.',
  },
  {
    slug: 'ridge-office-complex',
    name: 'Ridge Office Complex',
    category: 'Office Complexes',
    year: '2023',
    location: 'Ridge, Accra',
    cover: 'photo-1497366216548-37526070297c',
    blurb: 'A grade-A office complex with double-height lobby, backup power and efficient floor plates.',
    scope: ['Architectural Design', 'Construction', 'Project Management'],
    size: '9,800 m²',
    duration: '26 months',
    budget: 'GH₵ 38M',
    gallery: ['photo-1497366216548-37526070297c', 'photo-1486325212027-8081e485255e', 'photo-1518005020951-eccb494ad742'],
    challenge: 'Meeting international office standards with reliable power and cooling in a warm climate.',
    solution: 'High-efficiency HVAC, solar-ready roofing and a redundant power design cut running costs sharply.',
  },
  {
    slug: 'golden-sunrise-academy',
    name: 'Golden Sunrise Academy',
    category: 'Schools',
    year: '2024',
    location: 'Kwadaso, Kumasi',
    cover: 'photo-1449157291145-7efd050a4d0e',
    blurb: 'A modern school campus with classroom blocks, a library, laboratories and a covered assembly hall.',
    scope: ['Architectural Design', 'Turnkey Construction', 'Exterior Works'],
    size: '5,200 m²',
    duration: '16 months',
    budget: 'GH₵ 14M',
    gallery: ['photo-1449157291145-7efd050a4d0e', 'photo-1487958449943-2429e8be8625', 'photo-1518005020951-eccb494ad742'],
    challenge: 'Delivering safe, well-ventilated learning spaces on a compact urban campus.',
    solution: 'Cross-ventilated classroom blocks around a shaded central court kept the school cool and calm.',
  },
  {
    slug: 'grace-cathedral',
    name: 'Grace Cathedral',
    category: 'Churches',
    year: '2023',
    location: 'Spintex, Accra',
    cover: 'photo-1487958449943-2429e8be8625',
    blurb: 'A 1,500-seat cathedral with a soaring column-free auditorium and excellent acoustics.',
    scope: ['Structural Engineering', 'Turnkey Construction', 'Interior Finishing'],
    size: '3,600 m²',
    duration: '24 months',
    budget: 'GH₵ 19M',
    gallery: ['photo-1487958449943-2429e8be8625', 'photo-1486325212027-8081e485255e', 'photo-1449157291145-7efd050a4d0e'],
    challenge: 'Creating a large, column-free worship space with clear sightlines and quality sound.',
    solution: 'Long-span steel trusses and acoustic detailing delivered an open, resonant auditorium.',
  },
  {
    slug: 'cantonments-apartments',
    name: 'Cantonments Apartments',
    category: 'Apartment Buildings',
    year: '2025',
    location: 'Cantonments, Accra',
    cover: 'photo-1545324418-cc1a3fa10c00',
    blurb: 'A boutique apartment building of twelve premium units with landscaped shared amenities.',
    scope: ['Architectural Design', 'Construction', 'MEP Engineering'],
    size: '7,100 m²',
    duration: '20 months',
    budget: 'GH₵ 27M',
    gallery: ['photo-1545324418-cc1a3fa10c00', 'photo-1481253127861-534498168948', 'photo-1460472178825-e5240623afd5'],
    challenge: 'Fitting generous, private apartments and amenities onto a compact inner-city plot.',
    solution: 'Stacked units with staggered balconies gave every home privacy, light and outdoor space.',
  },
  {
    slug: 'knust-student-hostel',
    name: 'Unity Student Hostel',
    category: 'Student Hostels',
    year: '2024',
    location: 'Ayeduase, Kumasi',
    cover: 'photo-1460472178825-e5240623afd5',
    blurb: 'A purpose-built student hostel near KNUST with en-suite rooms, study lounges and secure access.',
    scope: ['Construction', 'Project Management', 'Interior Finishing'],
    size: '8,300 m²',
    duration: '18 months',
    budget: 'GH₵ 21M',
    gallery: ['photo-1460472178825-e5240623afd5', 'photo-1481253127861-534498168948', 'photo-1545324418-cc1a3fa10c00'],
    challenge: 'Maximising quality bed spaces while keeping rents affordable for students.',
    solution: 'A repeatable room module and durable, low-maintenance finishes drove down cost per bed.',
  },
  {
    slug: 'tema-industrial-warehouse',
    name: 'Tema Industrial Warehouse',
    category: 'Warehouses',
    year: '2023',
    location: 'Tema Industrial Area',
    cover: 'photo-1473221326025-9183b464bb7e',
    blurb: 'A large-span logistics warehouse with high eaves, loading docks and an integrated office block.',
    scope: ['Structural Engineering', 'Construction', 'Civil Works'],
    size: '11,500 m²',
    duration: '14 months',
    budget: 'GH₵ 23M',
    gallery: ['photo-1473221326025-9183b464bb7e', 'photo-1502920917128-1aa500764cbd', 'photo-1545558014-8692077e9b5c'],
    challenge: 'Delivering a fast, column-light warehouse able to carry heavy racking and truck traffic.',
    solution: 'A portal-frame steel structure and reinforced slab handled the loads and cut the build time.',
  },
  {
    slug: 'west-hills-shopping',
    name: 'West Hills Shopping Centre',
    category: 'Shopping Centres',
    year: '2025',
    location: 'Weija, Accra',
    cover: 'photo-1506744038136-46273834b3fb',
    blurb: 'A neighbourhood shopping centre with anchor retail, food court and covered parking.',
    scope: ['Architectural Design', 'Turnkey Construction', 'MEP Engineering'],
    size: '14,200 m²',
    duration: '28 months',
    budget: 'GH₵ 52M',
    gallery: ['photo-1506744038136-46273834b3fb', 'photo-1551882547-ff40c63fe5fa', 'photo-1518733057094-95b53143d2a7'],
    challenge: 'Coordinating multiple retail tenants, services and parking on one busy site.',
    solution: 'A flexible shell-and-core design let tenants fit out in parallel and open on schedule.',
  },
  {
    slug: 'labone-family-home',
    name: 'Labone Family Home',
    category: 'Residential Homes',
    year: '2023',
    location: 'Labone, Accra',
    cover: 'photo-1600585154340-be6161a56a0c',
    blurb: 'A warm, modern family home in exposed concrete, timber and glass with a shaded courtyard.',
    scope: ['Architectural Design', 'Construction', 'Interior Finishing'],
    size: '360 m²',
    duration: '10 months',
    budget: 'GH₵ 1.9M',
    gallery: ['photo-1600585154340-be6161a56a0c', 'photo-1564013799919-ab600027ffc6', 'photo-1600607687939-ce8a6c25118c'],
    challenge: 'Keeping a growing family home cool and private on a compact residential plot.',
    solution: 'A central courtyard and deep shading kept interiors naturally cool without heavy cooling loads.',
  },
  {
    slug: 'aburi-hillside-villa',
    name: 'Aburi Hillside Villa',
    category: 'Luxury Villas',
    year: '2024',
    location: 'Aburi, Eastern Region',
    cover: 'photo-1518733057094-95b53143d2a7',
    blurb: 'A private hillside villa in stone and glass framing panoramic views over the Aburi hills.',
    scope: ['Architectural Design', 'Luxury Construction', 'Landscaping'],
    size: '640 m²',
    duration: '17 months',
    budget: 'GH₵ 5.2M',
    gallery: ['photo-1518733057094-95b53143d2a7', 'photo-1551882547-ff40c63fe5fa', 'photo-1600566753086-00f18fb6b3ea'],
    challenge: 'Building a luxury home on a steep, scenic slope without spoiling the landscape.',
    solution: 'Terraced foundations and floor-to-ceiling glazing set the villa gently into the hillside.',
  },
]

export const PROJECT_CATEGORIES = [
  'All',
  'Residential Homes',
  'Luxury Villas',
  'Commercial Buildings',
  'Office Complexes',
  'Schools',
  'Churches',
  'Apartment Buildings',
  'Student Hostels',
  'Warehouses',
  'Shopping Centres',
]

export const TESTIMONIALS = [
  {
    quote:
      'ArkNova built our family home in East Legon exactly as promised. The workmanship is excellent and they handed over right on schedule. We felt informed and respected at every stage.',
    name: 'Kwame Mensah',
    role: 'Homeowner, East Legon',
    rating: 5,
    photo: 'photo-1507003211169-0a1dd7228f2d',
  },
  {
    quote:
      'Their transparency around cost and their bill of quantities gave us complete confidence. ArkNova feels like a true engineering partner, not just a contractor.',
    name: 'Ama Owusu',
    role: 'Property Developer, Accra',
    rating: 5,
    photo: 'photo-1494790108377-be9c29b29330',
  },
  {
    quote:
      'From design to delivery, ArkNova managed every detail with precision. Our office complex came in on time and the quality is simply exceptional.',
    name: 'Kofi Asante',
    role: 'Managing Director, Ridge',
    rating: 5,
    photo: 'photo-1500648767791-00dcc994a43e',
  },
  {
    quote:
      'They delivered our church auditorium beautifully and safely. The attention to quality and the respect they showed our congregation left a lasting impression.',
    name: 'Rev. Daniel Boateng',
    role: 'Church Board, Spintex',
    rating: 5,
    photo: 'photo-1438761681033-6461ffad8d80',
  },
]

// Familiar Ghanaian brands & institutions shown as clean branded placeholders.
export const PARTNERS = [
  'Ghacem', 'Dzata Cement', 'K. Ofori Ltd.', 'Melcom', 'Devtraco',
  'Trasacco', 'Kasapreko', 'Ecobank Ghana', 'Stanbic Bank Ghana', 'GOIL',
]

export const FAQS = [
  {
    q: 'What types of projects does ArkNova take on?',
    a: 'We deliver residential homes, luxury villas, apartments, commercial buildings, office complexes, schools, churches, hostels, warehouses and shopping centres — across Ghana.',
  },
  {
    q: 'Do you handle both design and construction?',
    a: 'Yes. ArkNova is an end-to-end partner. We can take a project from concept and architectural design through engineering, cost estimation, construction, finishing and final handover.',
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
    a: 'We are based in Accra and deliver projects across Ghana — from Greater Accra and Kumasi to Takoradi and beyond. Reach out with your location and we will confirm availability.',
  },
]

export const VALUES = [
  { title: 'Integrity', text: 'We do what we say, and we build what we promise.' },
  { title: 'Precision', text: 'Engineering rigour applied to every millimetre and every milestone.' },
  { title: 'Safety', text: 'Zero-compromise safety culture on every site, every day.' },
  { title: 'Craft', text: 'A relentless pursuit of quality in materials and execution.' },
  { title: 'Partnership', text: 'We treat your project as if it were our own.' },
  { title: 'Sustainability', text: 'Responsible building for the long term.' },
]

// Company history milestones (Ghana).
export const MILESTONES = [
  { year: '2008', title: 'Founded in Accra', text: 'ArkNova opens its doors with a small crew and an uncompromising standard for craft.' },
  { year: '2012', title: 'First Commercial Build', text: 'Completed our first major commercial building in Accra, ahead of schedule.' },
  { year: '2016', title: 'Engineering Division', text: 'Launched in-house structural and MEP engineering capability.' },
  { year: '2019', title: 'Design Studio', text: 'Opened a full architectural design and 3D visualization studio.' },
  { year: '2022', title: '300+ Projects', text: 'Surpassed 300 completed projects across Ghana.' },
  { year: '2025', title: 'Nationwide Delivery', text: 'Expanded delivery from Accra and Kumasi to Takoradi and beyond.' },
]

// Company commitments shown on the About page.
export const COMMITMENTS = [
  {
    icon: 'shield',
    title: 'Commitment to Quality',
    text: 'We build with premium materials and rigorous quality control at every milestone — from foundation to finishing — so every project stands the test of time.',
  },
  {
    icon: 'team',
    title: 'Health & Safety Standards',
    text: 'A zero-compromise safety culture protects our workforce, clients and communities. Every site follows strict safety procedures, day in and day out.',
  },
  {
    icon: 'tree',
    title: 'Sustainability Practices',
    text: 'We build responsibly — efficient designs, durable materials and mindful use of resources that reduce waste and running costs over a building’s life.',
  },
  {
    icon: 'chat',
    title: 'Client-Centered Approach',
    text: 'You have one accountable partner and clear communication throughout. We listen, advise honestly and keep you informed at every stage of the build.',
  },
]
