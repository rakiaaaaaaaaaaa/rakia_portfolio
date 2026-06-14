// =============================================================
//  PORTFOLIO DATA — Improved version based on PhD CV
// =============================================================

// ─────────────────────────────────────────────────────────────
//  PERSONAL INFORMATION
// ─────────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Rakia Souei",
  title: "Hi, I'm Rakia Souei, a final-year Software Engineering and Data Science student, researcher, and community leader passionate about artificial intelligence, machine learning, and technology for social good."
,
  email: "rakia.souei@ieee.org",
  phone: "+1 (438) 820-2734",
  location: "Montreal, Quebec, Canada",
  linkedin: "https://www.linkedin.com/in/rakia-souei-b98a0822b/",
  github: "https://github.com/rakiaaaaaaaaaaa",
  cvFile: "/rakia_souei_2026.pdf",
  profilePhoto: "/1.png",
  heroPhoto: "/photo.png",
  contactPhoto: "/photo2.png",
}

// ─────────────────────────────────────────────────────────────
//  HERO
// ─────────────────────────────────────────────────────────────
export const heroSkills = [
  "Machine Learning Researcher",
  "Data Scientist",
  "Software Engineer",

]

export const heroBadge = "Open to Opportunities"


// ─────────────────────────────────────────────────────────────
//  ABOUT ME
// ─────────────────────────────────────────────────────────────
export const aboutText = {
  paragraph1:
    "Currently, I am a MITACS Globalink Research Award recipient conducting research at Concordia University. My work focuses on applying AI and data-driven approaches to solve real-world challenges, particularly in healthcare, sustainability, and intelligent systems.",

  paragraph2:
    "Beyond research, I am committed to empowering students and fostering innovation. I was the founder and president of ARSII, a scientific and research club. I have led initiatives that connect academia, industry, and local communities through projects, hackathons, technical workshops, and social-impact programs.",

  paragraph3:
    "My hope is to build technologies that are not only innovative but also accessible, ethical, and capable of creating meaningful impact for the new generation.",
};


// ─────────────────────────────────────────────────────────────
//  SKILLS
// ─────────────────────────────────────────────────────────────
export const skills = {
  programming: {
    title: "Programming & Development",
    icon: "Code",
    color: "blue",
    items: [
      { name: "Python",           level: 92 },
      { name: "SQL",              level: 85 },
      { name: "JavaScript",       level: 80 },
      { name: "HTML & CSS",       level: 88 },
      { name: "Django",           level: 85 },
      { name: "Git & GitHub",     level: 90 },
      { name: "Flutter",          level: 70 },
      { name: "Agile & Scrum",    level: 85 },
      { name: "Software Testing", level: 72 },
    ],
  },
  aiData: {
    title: "AI & Data Science",
    icon: "Database",
    color: "green",
    items: [
      { name: "PyTorch",                 level: 85 },
      { name: "scikit-learn",            level: 88 },
      { name: "XGBoost & LightGBM",      level: 85 },
      { name: "CatBoost",                level: 78 },
      { name: "U-Net / Medical Imaging", level: 88 },
      { name: "NLP & Transformers",      level: 78 },
      { name: "NumPy & Pandas",          level: 90 },
      { name: "Matplotlib & Seaborn",    level: 88 },
      { name: "Power BI & DAX",          level: 80 },
      { name: "SHAP & LIME (XAI)",       level: 75 },
      { name: "Generative AI",           level: 80 },
    ],
  },
  tools: {
    title: "Tools & Technologies",
    icon: "Settings",
    color: "purple",
    items: [
      { name: "Figma & Photoshop",          level: 85 },
      { name: "Data Engineering / ETL",     level: 80 },
      { name: "ML Pipelines",               level: 82 },
      { name: "Predictive Maintenance",     level: 78 },
      { name: "Agentic Coding (Claude CLI)", level: 85 },
      { name: "Project Management",         level: 85 },
      { name: "Business Intelligence",      level: 78 },
      { name: "Cloud Platforms",            level: 72 },
    ],
  },
}

// ─────────────────────────────────────────────────────────────
//  PROJECTS
// ─────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "ML Framework for Pipeline Leakage Prediction — MITACS Globalink",
    description:
      "MITACS Globalink Research Award at Concordia University (Montreal, 2026). Implementing a supervised ML framework for leakage prediction and anomaly detection for predictive maintenance.",
    tags: ["XGBoost", "Predictive Maintenance", "Anomaly Detection", ],
    color: "from-cyan-500 to-blue-600",
    github: "https://github.com/rakiaaaaaaaaaaa",
    demo: "",
  },
  {
    title: "Deep Learning Spinal Cord Segmentation — Final Year Thesis",
    description:
      "Developed a full pipeline for automated spinal cord segmentation in 3D MRI using U-Net, achieving 85.53% Dice and 87.42% IoU on a benchmark clinical dataset. Integrated CSA prediction module for neurological diagnosis workflows and a Flutter mobile app for clinical deployment.",
    tags: ["U-Net", "Deep Learning", "Medical Imaging", "3D MRI", "Flutter"],
    color: "from-blue-500 to-purple-600",
    github: "https://github.com/rakiaaaaaaaaaaa/Deep-Learning-Spinal-Cord-Segmentation",
    demo: "https://github.com/rakiaaaaaaaaaaa/Deep-Learning-Spinal-Cord-Segmentation/blob/main/PFA%20report%20document.pdf",
  },
  {
    title: "Soil Moisture Prediction — Geospatial ML (AI SMART Hackathon, 3rd Prize)",
    description:
      "Ensemble ML pipeline predicting soil moisture from Sentinel-2 satellite imagery, SAR radar backscatter, and meteorological time series. Engineered 100+ features (NDVI, NDWI, EVI). Combined LightGBM, XGBoost, and CatBoost via optimized weighted ensembling with competitive R² on held-out validation data.",
    tags: ["LightGBM", "XGBoost", "CatBoost", "Geospatial ML", "Sentinel-2", "SAR"],
    color: "from-emerald-500 to-teal-600",
    github: "https://github.com/rakiaaaaaaaaaaa/Soil-Moisture-Prediction/",
    demo: "",
  },
  {
    title: "Breast Cancer Detection using Deep Learning",
    description:
      "CNN-based deep learning model for medical imaging classification of breast cancer. Integrated into an interactive web-based visualization platform for clinical use.",
    tags: ["CNN", "Deep Learning", "Medical AI", "Cancer Detection"],
    color: "from-red-500 to-pink-600",
    github: "https://github.com/rakiaaaaaaaaaaa/Breast-cancer-AI",
    demo: "",
  },
  {
    title: "Skin Cancer Classification using CNN",
    description:
      "CNN-based classifier for skin lesion images with explainability layer and a user-friendly interactive web demo interface.",
    tags: ["CNN", "Medical AI", "Skin Cancer", "Classification", "XAI"],
    color: "from-orange-500 to-red-600",
    github: "https://github.com/rakiaaaaaaaaaaa/skin-cancer-classification",
    demo: "",
  },
  {
    title: "IoT Smart House System",
    description:
      "Simulated an IoT-based smart home using Arduino, Blynk, and PICSimLab. Automated temperature, garden lighting, and water tank management with a real-time mobile monitoring dashboard.",
    tags: ["IoT", "Arduino", "Blynk", "Automation", "Embedded Systems"],
    color: "from-green-500 to-blue-600",
    github: "https://github.com/rakiaaaaaaaaaaa/Iot_Smart_house",
    demo: "",
  },
  {
    title: "IEEE ISIMG IAS Chapter Website",
    description:
      "Designed and developed the official IEEE ISIMG Industry Applications Society website using HTML, CSS, and JavaScript. Responsive layout with interactive sections and real-time event updates.",
    tags: ["HTML", "CSS", "JavaScript", "IEEE", "Responsive Design"],
    color: "from-purple-500 to-pink-600",
    github: "https://github.com/rakiaaaaaaaaaaa/IEEE-ISIMG-IAS-SBC",
    demo: "https://ias-isimg.ieee.tn/",
  },
  {
    title: "IEEE ISIMG Student Branch Website",
    description:
      "Created the official IEEE ISIMG Student Branch website using WordPress to centralize events, news, and member engagement with a dynamic and accessible design.",
    tags: ["WordPress", "IEEE", "Community", "Events"],
    color: "from-indigo-500 to-purple-600",
    github: "",
    demo: "https://isimg.ieee.tn/",
  },
]

// ─────────────────────────────────────────────────────────────
//  EXPERIENCE & LEADERSHIP
// ─────────────────────────────────────────────────────────────
export const experience = [
  {
    title: "Research Intern — MITACS Globalink Research Award",
    company: "Concordia University, Dept. of Mechanical & Industrial Engineering — Montreal, Canada",
    period: "2026",
    achievements: [
      "Implementing a machine learning framework for pipeline leakage prediction ",
      "Applying supervised learning models for predictive maintenance and anomaly detection",
    ],
  },
  {
    title: "Data Analysis Intensive Bootcamp",
    company: "GoMyCode — Remote",
    period: "Dec 2025 – Mar 2026",
    achievements: [
      "Three-month programme covering data manipulation, SQL Server, Power BI, and end-to-end ETL pipelines",
      "Data extraction, cleaning, transformation, and visualization on real-world datasets",
      "Completed a hands-on capstone project applying the full data analysis pipeline",
    ],
  },
  {
    title: "Django Developer Intern",
    company: "Squad Crafter — Gabès, Tunisia",
    period: "July 2025",
    achievements: [
      "Built a Learning Management System (LMS) using Django for a personalized school learning platform",
      "Designed features enhancing accessibility, interactivity, and overall user experience",
    ],
  },
  {
    title: "Django Developer Intern",
    company: "TS Import Tunisia",
    period: "June – August 2025",
    achievements: [
      "Developed the backend and admin dashboard of a production e-commerce platform using Django REST Framework",
      "Implemented database models, authentication systems, and data validation mechanisms",
    ],
  },
  {
    title: "Agile and Business Intern",
    company: "MG MAXI — Gabès, Tunisia",
    period: "August 2024",
    achievements: [
      "Explored ERP system implementation and digital transformation strategies",
      "Created Excel-based financial dashboards and data visualization tools for performance analysis",
    ],
  },
  {
    title: "Software Engineering Intern (IoT & Embedded Systems)",
    company: "Emertxe — India (Remote)",
    period: "July – August 2024",
    achievements: [
      "Developed a smart home automation system using Arduino, PICSimLab, and Blynk IoT platform",
      "Integrated sensors and actuators for temperature, lighting, and security management with real-time mobile monitoring",
    ],
  },
  {
    title: "Founder & President",
    company: "ARSII – Association de Recherche Scientifique et Innovation en Informatique, ISIMG",
    period: "2025 – 2026",
    achievements: [
      "Founded ARSII to promote scientific research and innovation in computer science and AI at ISIMG",
      "Led projects in AI, data science, and software development to foster student-led research",
      "Organized national hackathons and research events to encourage collaboration and innovation",
    ],
  },
  {
    title: "Founder & Chair",
    company: "IEEE ISIMG Industry Applications Society (IAS) Student Branch Chapter",
    period: "2024 – 2025",
    achievements: [
      "Founded and led the IEEE IAS Chapter at ISIMG",
      "Organized technical workshops, hackathons, and professional development events",
      "Managed a multidisciplinary team and fostered collaboration among students and industry professionals",
    ],
  },
  {
    title: "Founder & Chair",
    company: "IEEE SIGHT (Special Interest Group on Humanitarian Technology) – ISIMG",
    period: "2024 – 2025",
    achievements: [
      "Established the IEEE SIGHT group at ISIMG to promote technology-based humanitarian innovation",
      "Launched community-driven projects integrating AI, IoT, and sustainability solutions",
      "Collaborated with local and international IEEE groups to expand humanitarian impact",
    ],
  },
  {
    title: "Chair",
    company: "Ecoguardians AI Competition 1.0 — ISIMG",
    period: "2024",
    achievements: [
      "Organized and chaired the Ecoguardians AI competition focused on environmental technology solutions",
    ],
  },
]

// ─────────────────────────────────────────────────────────────
//  EDUCATION
// ─────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "B.Eng., Software Engineering — Data Science Track",
    institution: "Higher Institute of Computer Science, Gabès University",
    period: "September 2023 – September 2026",
    grade: "14/20 — ranked top 10 in cohort (Tunisian national grading scale)",
    description:
      "Coursework: Machine Learning, Deep Learning, NLP, Data Visualisation & Analysis, Software Testing, Agile Methodologies.",
    icon: "blue",
  },
  {
    degree: "Preparatory Cycle (Classes Préparatoires en Informatique)",
    institution: "Higher Institute of Computer Science, Gabès University",
    period: "September 2021 – June 2023",
    grade: "",
    description:
      "Intensive foundation in Mathematics, Statistics, Algorithms, Probability, and Numerical Analysis.",
    icon: "green",
  },
]

// ─────────────────────────────────────────────────────────────
//  CERTIFICATIONS
// ─────────────────────────────────────────────────────────────
export const certifications = {
  technical: [
    { name: "Generative AI with Diffusion Models",       org: "NVIDIA Deep Learning Institute" },
    { name: "LLM Fine-Tuning & Satellite Image Preprocessing", org: "NVIDIA" },
    { name: "Python 101 for Data Science",               org: "IBM" },
    { name: "Flutter Training Bootcamp",                 org: "IEEE Computer Society" },
    { name: "The Hashgraph Developer Course",            org: "Hashgraph" },
    { name: "General AI Basics and NLP",                 org: "The NGB" },
    { name: "Dar Blockchain Friday Program Certificate", org: "Dar Blockchain" },
  ],
  business: [
    { name: "Innovation and Entrepreneurship Summer Camp", org: "Avila University / US Embassy Tunisia" },
    { name: "Scrum Fundamentals Certified (SFC)",          org: "ScrumStudy" },
    { name: "Training in Negotiation Techniques",          org: "4C FSG" },
    { name: "Fostering Diversity, Equity and Inclusion",  org: "IEEE" },
    { name: "Integrating Sustainability in Your Career",  org: "IEEE" },
    { name: "Soft Skills",                                 org: "WeYouth" },
  ],
  ieee: [
    { name: "Computer Society R8 Share Your Journey Contest Winner", org: "IEEE Computer Society" },
    { name: "Region 8 Humanitarian Ambassadors Program",             org: "IEEE SIGHT" },
    { name: "Computer Society Mentorship Program",                   org: "IEEE" },
    { name: "PES HAC Congress Ambassador",                           org: "IEEE PES" },
  ],
  language: [
    { name: "English Language Course", org: "Elite School" },
    { name: "English Training",        org: "Center Asia World" },
    { name: "French Training",         org: "Center Asia World" },
    { name: "Step for Future",         org: "AIESEC" },
  ],
  community: [
    { name: "Initiation Training", org: "Tunisian Red Crescent" },
  ],
}

// ─────────────────────────────────────────────────────────────
//  AWARDS & HONOURS
// ─────────────────────────────────────────────────────────────
export const awards = [
  {
    title: "IEEE Women in Engineering Distinguished Mentor Award",
    organization: "IEEE WIE",
    year: "2024",
    description:
      "Internationally recognized award for outstanding mentorship and contributions to IEEE Women in Engineering. Profile published on the IEEE WIE website.",
    color: "from-pink-500 to-rose-600",
    url: "https://wie.ieee.org/distinguished-volunteer-and-mentor-rakia-souei/",
  },
  {
    title: "Winner — IEEE CS Region 8 Share Your Journey Contest",
    organization: "IEEE Computer Society",
    year: "2024",
    description:
      "Winner of the Share Your Journey contest at the IEEE Computer Society Region 8 Congress, attended in person in Cairo, Egypt.",
    color: "from-blue-500 to-purple-600",
    url: "",
  },
  {
    title: "IEEE Region 8 Inspiring Student Ambassador",
    organization: "IEEE SIGHT — Humanitarian Technology",
    year: "2024",
    description:
      "Selected as Inspiring Student Ambassador for humanitarian technology initiatives across IEEE Region 8.",
    color: "from-purple-500 to-pink-600",
    url: "",
  },
  {
    title: "National Student Entrepreneur Label",
    organization: "University of Gabès",
    year: "2026",
    description:
      "Officially recognized as a national Student Entrepreneur by the University of Gabès.",
    color: "from-green-500 to-teal-600",
    url: "",
  },
  {
    title: "1st Prize — JPO Innovation Track Idea Competition",
    organization: "ISIMG",
    year: "2025",
    description:
      "First place in the innovation ideas competition at ISIMG's Journée Portes Ouvertes.",
    color: "from-amber-500 to-yellow-600",
    url: "",
  },
  {
    title: "3rd Prize — IEEE AI SMART Hackathon",
    organization: "IEEE SMART Summit, Monastir, Tunisia",
    year: "2025",
    description:
      "Awarded 3rd place for a geospatial ML ensemble pipeline predicting soil moisture from Sentinel-2 satellite and SAR radar data.",
    color: "from-emerald-500 to-teal-600",
    url: "https://smart.ieee.tn/",
  },
  {
    title: "2nd Prize — DEV Hackathon, Medical AI",
    organization: "Gabès University",
    year: "2024",
    description:
      "Second place in the Medical AI Solution category with a deep learning-based cancer detection application.",
    color: "from-yellow-500 to-orange-600",
    url: "",
  },
]

// ─────────────────────────────────────────────────────────────
//  CONFERENCES & WORKSHOPS
// ─────────────────────────────────────────────────────────────
export const conferences = [
  {
    event: "IEEE SMART AI Summit in Research and Technology",
    location: "Tunisia",
    date: "Dec 2025",
    role: "Attendee",
    color: "border-blue-500",
    url: "https://smart.ieee.tn/",
  },
  {
    event: "IEEE Industry Applications Society Annual Meeting",
    location: "Sousse, Tunisia",
    date: "Oct 2025",
    role: "Delegate",
    color: "border-purple-500",
    url: "https://ias-am.ieee.tn/",
  },
  {
    event: "IEEE Computer Society Region 8 Congress",
    location: "Cairo, Egypt",
    date: "Nov 2024",
    role: "Delegate",
    color: "border-indigo-500",
    url: "",
  },
  {
    event: "IEEE Women in Engineering Annual Congress of Tunisia 4.0",
    location: "Hammamet, Tunisia",
    date: "Oct 2024",
    role: "Delegate",
    color: "border-pink-500",
    url: "",
  },
  {
    event: "Innovation & Entrepreneurship Summer Camp — Avila University / US Embassy Tunisia",
    location: "Tunisia",
    date: "2024",
    role: "Selected Participant",
    color: "border-green-500",
    url: "https://tn.usembassy.gov/first-edition-of-the-summer-innovation-camp/",
  },
]

// ─────────────────────────────────────────────────────────────
//  LANGUAGES
// ─────────────────────────────────────────────────────────────
export const languages = [
  { name: "Arabic",  level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French",  level: "Fluent" },
]

// ─────────────────────────────────────────────────────────────
//  VOLUNTEERING
// ─────────────────────────────────────────────────────────────
export const volunteering = [
  { role: "Content Creator — IEEE WIE Collaboratec",  year: "2025" },
  { role: "Member — JCI Gabès",                       year: "2025" },
  { role: "Member — AIESEC Tacapes",                  year: "2022 – 2024" },
  { role: "Volunteer — Tunisian Red Crescent",        year: "2019 – 2024" },
]

// ─────────────────────────────────────────────────────────────
//  PROFESSIONAL SUMMARY
// ─────────────────────────────────────────────────────────────
export const professionalSummary =
"Final-year Software Engineering & Data Science student with a strong interest in artificial intelligence, machine learning, and data-driven systems applied to real-world problems."
// ─────────────────────────────────────────────────────────────
//  CV MODAL — Technical Skills summary
// ─────────────────────────────────────────────────────────────
export const cvSkillsSummary = {
  languages:      "Python, SQL, JavaScript, HTML/CSS",
  mlDl:           "PyTorch, scikit-learn, XGBoost, LightGBM, CatBoost, U-Net, Transformers",
  dataAnalytics:  "NumPy, Pandas, Matplotlib, Seaborn, Power BI, SHAP, LIME (XAI)",
  toolsPlatforms: "Django, Git & GitHub, Figma, Agile, Agentic Coding (Claude CLI)",
}