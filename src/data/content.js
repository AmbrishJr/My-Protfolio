// -----------------------------------------------------------------------------
// All page content lives here. Everything is sourced from the resume.
// -----------------------------------------------------------------------------

export const about = {
  paragraphs: [
    'I’m a Full-Stack Developer and final-stretch B.Tech student in Artificial Intelligence & Data Science at Chennai Institute of Technology.',
    'I’ve shipped production websites end to end — a corporate site for Minaliya on Next.js and a scroll-driven experience for Voko Run Club on React — and I’m comfortable moving across the stack from UI to API to database.',
    'Alongside product work I do applied ML research: neural-network intrusion detection, and lightweight attention modules for photoacoustic image reconstruction.',
  ],
}

export const education = {
  school: 'Chennai Institute of Technology',
  degree: 'B.Tech — Artificial Intelligence & Data Science',
  period: '2023 – 2027',
  score: 'CGPA 7.97 / 10',
}

export const stats = [
  { value: 7.97, suffix: ' / 10', label: 'CGPA' },
  { value: 2000, prefix: '', suffix: '+', label: 'Student events coordinated' },
  { value: 1000, suffix: '+', label: 'Symposium participants managed' },
  { value: 15, suffix: '', label: 'U-Net variants designed in research' },
]

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'C++', 'C', 'PHP', 'Swift', 'HTML5', 'CSS3'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'AngularJS', 'Three.js', 'Vite'],
  },
  {
    group: 'Backend & Frameworks',
    items: ['Node.js', 'NestJS', '.NET'],
  },
  {
    group: 'Databases',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase', 'SQLite', 'Firebase'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Jenkins', 'Git', 'GitHub'],
  },
  {
    group: 'AI/ML & Data',
    items: ['TensorFlow', 'PyTorch', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib'],
  },
]

// Continuous marquee row under the skills grid.
export const marqueeSkills = [
  'React',
  'Next.js',
  'TypeScript-ready',
  'Three.js',
  'Node.js',
  'NestJS',
  'Tailwind CSS',
  'MongoDB',
  'PostgreSQL',
  'Supabase',
  'AWS',
  'Google Cloud',
  'TensorFlow',
  'PyTorch',
  'OpenCV',
  'Python',
  'Java',
  'C++',
]

export const experience = [
  {
    company: 'Shibaura Institute of Technology',
    role: 'Research (Photoacoustic Tomography)',
    period: 'Jul 2026 – Aug 2026',
    location: 'Japan',
    points: [
      'Designed 15 U-Net variants for sparse-view photoacoustic tomography reconstruction.',
      'Developed a novel hybrid attention module matching ~94% of CBAM’s SSIM gain with a 95% parameter reduction.',
      'Built a Radon-based simulation pipeline and a 100%-accurate CNN classifier for adaptive reconstruction.',
    ],
  },
  {
    company: 'Thanthi TV',
    role: 'Election Data Operations',
    period: 'May 2026',
    location: 'Chennai',
    points: [
      'Handled live election data entry and real-time result updates during broadcast coverage.',
      'Monitored incoming result data for accuracy, consistency, and timely broadcasting support.',
      'Supported software-based election data handling for real-time reporting and analysis.',
    ],
  },
  {
    company: 'Chennai Institute of Technology',
    role: 'Research Intern',
    period: 'May 2025 – Jun 2025',
    location: 'Chennai',
    points: [
      'Authored a review paper on neural-network-based intrusion detection systems, evaluating CNN, RNN, and GNN architectures for enterprise network security.',
      'Examined real-time deployment challenges, adversarial robustness, and explainable AI.',
      'Outlined scalable, resilient IDS design approaches.',
    ],
  },
  {
    company: 'Ogrelix',
    role: 'Web Development Intern',
    period: 'Jun 2024 – Jul 2024',
    location: 'Remote',
    points: [
      'Built a centralized classroom management platform as a full-stack developer.',
      'Worked across front-end and back-end with a focus on practical, usable solutions.',
    ],
  },
]

// Personal / open-source projects, sourced from github.com/AmbrishJr.
// `link` always points straight at the GitHub repo.
// TODO items below are placeholders — swap in the real one-liner + stack.
export const projects = [
  {
    name: 'Concentration Tracker & Interview Cheating Detector',
    blurb: 'TODO: add a one-line description for this project.',
    stack: ['TODO: add tech stack'],
    link: 'https://github.com/AmbrishJr/Conecntration-Tracker-and-Interview-Cheating-Detector-',
    tag: 'Python',
  },
  {
    name: 'Anomaly Lens — Multimodal Edge AI for Visual Quality Inspection',
    blurb:
      'Edge-deployed visual inspection system detecting quality defects in real time with a lightweight computer-vision pipeline, plus a RAG-powered LLM reasoning layer over a vector DB that auto-generates root-cause analysis for each defect.',
    stack: ['OpenCV', 'Edge AI', 'RAG / Vector DB', 'LLM Reasoning', 'ML Pipeline'],
    link: 'https://github.com/AmbrishJr/ANOMALY-LENS---Multimodal-Edge-AI-for-Visual-Quality-Inspection-with-RAG-Powered-Root-Cause-Analysis',
    tag: 'Python',
  },
  {
    name: 'SimCBAM — Photoacoustic Image Reconstruction for Blood Vessels',
    blurb:
      "A hybrid attention module for sparse-view photoacoustic tomography reconstruction of human blood vessels, built and evaluated across 15 U-Net variants — matching ~94% of CBAM's SSIM gain with a 95% parameter reduction.",
    stack: ['PyTorch', 'U-Net', 'Attention Mechanisms', 'Image Reconstruction'],
    link: 'https://github.com/AmbrishJr/SimCBAM-Photoacoustic-Image-Reconstruction-Model-for-Human-Blood-Vessel',
    tag: 'Python',
  },
  {
    name: 'AI Interview Assistant',
    blurb: 'TODO: add a one-line description for this project.',
    stack: ['TODO: add tech stack'],
    link: 'https://github.com/AmbrishJr/AI-INTERVIEW-ASSISTANT',
    tag: 'TypeScript',
  },
  {
    name: '3D Avatar Indian Sign Language Interpreter',
    blurb:
      'Web app that translates speech and text into Indian Sign Language using animated 3D avatars, with real-time translation and interactive learning modules — improving digital accessibility for the deaf community.',
    stack: ['React.js', 'Three.js', 'WebGL', 'Node.js', 'Express', 'MongoDB', 'ML'],
    link: 'https://github.com/AmbrishJr/ISL-APP-WITH-3D-AVATAR-',
    tag: 'JavaScript',
  },
  {
    name: 'Drowsiness Detection System',
    blurb: 'TODO: add a one-line description for this project.',
    stack: ['TODO: add tech stack'],
    link: 'https://github.com/AmbrishJr/Drowsiness-Detection-System',
    tag: 'Python',
  },
  {
    name: 'Smart Attendance System — Face Recognition + RFID',
    blurb:
      'Hybrid attendance system combining facial recognition with RFID verification for accurate, tamper-resistant tracking. Haar Cascade + LBPH/FaceNet for detection and recognition, with a TensorFlow pipeline for training and inference.',
    stack: ['Python', 'OpenCV', 'Haar Cascade', 'LBPH', 'FaceNet', 'TensorFlow', 'NumPy'],
    link: 'https://github.com/AmbrishJr/SMART-ATTENDENCE-SYSTEM-',
    tag: 'Python',
  },
]

// Client / freelance web development work.
// `repoLink` is optional — leave it null for private repos.
export const freelanceProjects = [
  {
    name: 'Minaliya Oils',
    blurb:
      'Responsive corporate website designed, built, and deployed end to end on Next.js — modern UI, intuitive navigation, and full mobile responsiveness. Managed the project from requirements to launch.',
    stack: ['Next.js', 'UI/UX', 'Deployment'],
    liveLink: 'https://www.minaliya.com',
    repoLink: 'https://github.com/AmbrishJr/minaliya-website',
  },
  {
    name: 'Voko Run Club',
    blurb:
      'Dynamic website for a Chennai-based run club, built with reusable React components and smooth scroll-based transitions for an engaging, interactive experience.',
    stack: ['React.js', 'Scroll animation', 'Responsive UI'],
    // TODO: confirm/replace live link
    liveLink: 'https://www.vokoclub.in',
    repoLink: null,
  },
]

export const achievements = [
  {
    title: 'TCS CodeVita — Season 13',
    detail: 'Cleared Round 1 & Round 2. All-India Rank 5303.',
  },
  {
    title: 'Rajasthan Digifest × TiE Global Hackathon',
    detail: 'Finalist.',
  },
  {
    title: 'Google Big Code 2026',
    detail: 'Cleared Round 1 — Top 1000 students.',
  },
]

export const certifications = [
  { name: 'CCNA: Enterprise Networking, Security & Automation', issuer: 'Cisco', date: 'Nov 2025' },
  { name: 'Python Essentials 1 & 2', issuer: 'Cisco', date: 'May 2026' },
  { name: 'Introduction to Modern AI', issuer: 'Cisco', date: 'Jun 2026' },
  { name: 'CyberOps Associate', issuer: 'Cisco', date: 'Jun 2026' },
  { name: 'Cloud Computing', issuer: 'NPTEL', date: 'Oct 2024' },
  { name: 'Reinforcement Learning', issuer: 'NPTEL', date: 'Nov 2025' },
]

export const languages = [
  { name: 'English', level: 'Proficient' },
  { name: 'Kannada', level: 'Native' },
  { name: 'Hindi', level: 'Intermediate' },
  { name: 'Japanese (JLPT N4)', level: 'Beginner — learning' },
]

export const volunteering = [
  {
    org: 'Yuvenza Youth Club',
    note: 'Coordinated and managed 2000+ student events — planning and execution.',
    year: '2024',
  },
  {
    org: 'Takshashila Cultural Fest',
    note: 'Sponsorship coordination, outreach, and sponsor management.',
    year: '2024 – 2025',
  },
  {
    org: 'Talos Technical Symposium',
    note: 'Organized technical events and coordinated 1000+ participants.',
    year: '2025',
  },
]
