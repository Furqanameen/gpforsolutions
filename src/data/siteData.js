export const LOGO = "https://k9securityspot.co.uk/wp-content/uploads/2023/08/cropped-WhatsApp_Image_2023-08-15_at_18.08.08-removebg-preview-2.png";

export const COMPANY_NAME = "GP For Solutions Security";
export const COMPANY_SHORT = "GPForSolutions";
export const COMPANY_TAGLINE = "Elevating Protection, Empowering Peace";
export const COMPANY_WEBSITE = "www.gpforsolutions.com";

export const CONTACT_INFO = {
  phone: "0044 74 1751 5211",
  phone2: "0044 7376130858",
  email: "info@gpforsolutions.com",
  email2: "info@gpforsolutions.com",
  address: "2 First Floor Room No 7, Gainsborough Road, London E11 1HT",
  city: "London, E11 1HT",
  hours: "Mon–Sat: 10am – 6pm",
  visitHours: "Mon–Fri: 11am – 4pm",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Services", path: "/services",
    dropdown: [
      { label: "Security Guard", path: "/services/security-guard" },
      { label: "Event Security", path: "/services/event-security" },
      { label: "Search Dog", path: "/services/search-dog" },
      { label: "Security Dog", path: "/services/security-dog" },
      { label: "Mobile Patrols", path: "/services/mobile-patrols" },
      { label: "Temporary Alarm & CCTV", path: "/services/cctv-solution" },
      { label: "Vacant Property", path: "/services/vacant-property" },
    ]
  },
  { label: "Contact Us", path: "/contact" },
];

export const SERVICES = [
  {
    slug: "security-guard",
    title: "Security Guard",
    icon: "🛡️",
    heroImage: "https://securityguardsinlosangeles.files.wordpress.com/2021/08/1540241634017.jpeg",
    heroSub: "GP For Solutions Security has many years of experience delivering Manned Guarding & Security Guards to clients across the UK.",
    image: "http://k9securityspot.com/wp-content/uploads/2024/03/360_F_101032385_2JfrN9kQ2d6eTQk4QDH3QpN2d6ukeUBX-removebg-preview.png",
    desc: "GP For Solutions Security have spent years delivering Manned Guarding & Security Guards to clients across the UK.",
    detail: "We specialize in delivering top-tier security solutions by deploying uniformed, trained, and thoroughly vetted Security Guards to safeguard our clients' premises and assets. Our services cater to a wide array of industries, including Construction, Retail, Commercial Sector, Industrial, Logistics, Private Estates, and Street Patrols.",
    features: [
      { title: "Expertise", desc: "With a seasoned management team, we deliver customized Manned Guarding service that aligns perfectly with your needs." },
      { title: "Location", desc: "We are based in London, with operations across the UK." },
      { title: "Purpose", desc: "Our Security Guards visually reassure clients and the public while maintaining the security and integrity of the site." },
    ],
  },
  {
    slug: "security-dog",
    title: "Security Dog",
    icon: "🐕",
    heroImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&q=80",
    heroSub: "GP For Solutions Security is a national supplier of NASDU L2 Security Dog teams.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    desc: "GP For Solutions Security is a national supplier of NASDU L2 Security Dog teams. Our patrol dog teams are utilised across the country.",
    detail: "Our Security Dogs are NASDU L2 certified and work alongside trained handlers to provide a highly visible deterrent. Security dogs are an extremely cost-effective solution to security, with one dog and handler being able to cover a much larger area than security guards on foot.",
    features: [
      { title: "NASDU Certified", desc: "All our dogs and handlers hold NASDU L2 qualifications ensuring the highest standard of performance." },
      { title: "Nationwide Coverage", desc: "Our dog teams operate across the whole of the UK." },
      { title: "Effective Deterrent", desc: "Dogs provide a powerful visual and physical deterrent against intruders." },
    ],
  },
  {
    slug: "search-dog",
    title: "Search Dogs",
    icon: "🔍",
    heroImage: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600&q=80",
    heroSub: "Professionally trained dogs to detect substances and threats.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    desc: "GP For Solutions Security is a national supplier of NASDU L2 Security Dog teams. Our patrol dog teams are utilised across the country.",
    detail: "Our Search & Detection Dogs are trained to detect a wide range of substances including drugs, explosives, and firearms. These specialist dogs are frequently used at events, venues, and sites where the risk of substance misuse or security threats is elevated.",
    features: [
      { title: "Drug Detection", desc: "Trained to detect a wide range of controlled substances." },
      { title: "Explosive Detection", desc: "Specialist dogs trained for explosive and firearm detection." },
      { title: "Event Ready", desc: "Frequently deployed at events, festivals and high-profile venues." },
    ],
  },
  {
    slug: "event-security",
    title: "Event Security",
    icon: "🎪",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80",
    heroSub: "GP For Solutions Security's Event Security & Crowd Management is paramount to the success of any Event.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    desc: "GP For Solutions Security's Event Security & Crowd Management is paramount to the success of any Event.",
    detail: "Our Event Security teams are experienced in managing all types of events from small private gatherings to large-scale public events. We provide comprehensive crowd management, access control, and emergency response planning.",
    features: [
      { title: "Crowd Management", desc: "Expert crowd control and management for events of all sizes." },
      { title: "Access Control", desc: "Robust entry/exit management to keep your event secure." },
      { title: "Emergency Response", desc: "Fully trained teams ready to respond to any incident." },
    ],
  },
  {
    slug: "mobile-patrols",
    title: "Mobile Patrols",
    icon: "🚔",
    heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80",
    heroSub: "Cost-effective visible SIA Security officer patrol service.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    desc: "Mobile patrols are a cost-effective solution to provide a visible SIA Security officer patrol service to clients.",
    detail: "Our Mobile Patrol officers conduct regular visits to your site in marked vehicles, providing a highly visible deterrent to would-be criminals. Patrol frequencies are agreed with each client and can include internal and external checks, lock/unlock services, and alarm response.",
    features: [
      { title: "Flexible Scheduling", desc: "Patrol frequencies tailored to your specific security requirements." },
      { title: "Marked Vehicles", desc: "High-visibility patrol vehicles provide maximum deterrent effect." },
      { title: "Alarm Response", desc: "Rapid response to alarm activations at your property." },
    ],
  },
  {
    slug: "cctv-solution",
    title: "CCTV & Alarm Solutions",
    icon: "📷",
    heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&q=80",
    heroSub: "Temporary Alarm & CCTV Solutions deployable nationwide.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    desc: "GP For Solutions Security's CCTV towers are deployable within 30 minutes and provide a monitored CCTV solution for your site protection.",
    detail: "Our Temporary CCTV towers are self-contained, solar-powered units that can be deployed rapidly anywhere in the UK. They provide 24/7 monitored CCTV coverage and are ideal for construction sites, events, and any location requiring temporary security.",
    features: [
      { title: "Rapid Deployment", desc: "CCTV towers deployable within 30 minutes anywhere in the UK." },
      { title: "Solar Powered", desc: "Self-sufficient units with solar power and battery backup." },
      { title: "24/7 Monitoring", desc: "Round-the-clock remote monitoring by our security team." },
    ],
  },
  {
    slug: "vacant-property",
    title: "Vacant Property",
    icon: "🏚️",
    heroImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80",
    heroSub: "Cost-effective security solutions for vacant properties.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    desc: "GP For Solutions Security provide cost effective security solutions to landowners and clients who require Vacant Property Security.",
    detail: "Vacant properties present unique security challenges. Our Vacant Property Security service protects your asset from squatters, vandalism, theft, and fire. We offer a range of solutions from regular inspections to full-time guarding.",
    features: [
      { title: "Regular Inspections", desc: "Scheduled visits to check the condition and security of your property." },
      { title: "Squatter Prevention", desc: "Active deterrence against unauthorized occupation." },
      { title: "Insurance Compliance", desc: "We help ensure your property meets insurance requirements." },
    ],
  },
];

export const HERO_SLIDES = [
  {
    bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
    title: "GP For Solutions Security",
    subtitle: "We provide you with the most efficient manned security services.",
  },
  {
    bg: "https://images6.alphacoders.com/796/796864.jpg",
    title: "Excellent Patrolling Dogs",
    subtitle: "Patrolling Dogs are professionally trained to detect substances.",
  },
  {
    bg: "https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?w=1600&q=80",
    title: "Best Security Devices",
    subtitle: "Count on us to secure your sites with our high end devices.",
  },
];

export const STATS = [
  { number: "100%", label: "Reliability" },
  { number: "100%", label: "Quality" },
  { number: "100%", label: "Responsibility" },
  { number: "100%", label: "Services" },
];
