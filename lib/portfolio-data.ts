// =============================================================
//  PORTFOLIO DATA — Improved version based on PhD CV
// =============================================================

// ─────────────────────────────────────────────────────────────
//  PERSONAL INFORMATION
// ─────────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Rakia Souei",
  title: "Software Engineer specializing in Artificial Intelligence and Data Science, with research experience in predictive modeling, optimization, and data-driven decision-making.",
  email: "rakia.souei@gmail.com",
  phone: "+216 51 137 455",
  location: "Tunis, Tunisia",
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
export const heroBadge = "Open to Opportunities"


// ─────────────────────────────────────────────────────────────
//  ABOUT ME
// ─────────────────────────────────────────────────────────────
export const aboutText = {
  paragraph1:
    "I am a Software Engineer specializing in Artificial Intelligence and Data Science, with research experience through the MITACS Globalink program at Concordia University in Canada. My work applies machine learning, deep learning, and predictive modeling to practical engineering problems.",

  paragraph2:
    "During my completed MITACS research internship, I designed and evaluated machine learning models for fluid-system leak prediction, predictive maintenance, and anomaly detection, using explainable AI to interpret results. My research interests include operations research, optimization, and data-driven decision-making.",

  paragraph3:
    "I also founded and led student research and engineering initiatives, including ARSII and the IEEE ISIMG Industry Applications Society chapter. I am motivated by thoughtful, evidence-based technology that translates research into useful real-world outcomes.",
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
      { name: "Python" },
      { name: "SQL" },
      { name: "JavaScript" },
      { name: "HTML & CSS" },
      { name: "Django" },
      { name: "Flask" },
      { name: "Streamlit" },
      { name: "Git & GitHub" },
    ],
  },
  aiData: {
    title: "AI & Data Science",
    icon: "Database",
    color: "green",
    items: [
      { name: "PyTorch" },
      { name: "scikit-learn" },
      { name: "XGBoost, LightGBM & CatBoost" },
      { name: "U-Net & Transformers" },
      { name: "NumPy & Pandas" },
      { name: "Matplotlib & Seaborn" },
      { name: "Power BI" },
      { name: "SHAP & LIME (XAI)" },
      { name: "Feature Engineering & Model Evaluation" },
    ],
  },
  tools: {
    title: "Methods & Tools",
    icon: "Settings",
    color: "purple",
    items: [
      { name: "Exploratory Data Analysis" },
      { name: "Data Cleaning & Statistical Analysis" },
      { name: "Docker" },
      { name: "LaTeX" },
      { name: "Figma" },
      { name: "Claude CLI" },
    ],
  },
}

// ─────────────────────────────────────────────────────────────
//  PROJECTS
// ─────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "Machine Learning for Pipeline Leak Prediction — MITACS Globalink",
    description:
      "Designed and implemented a machine learning framework at Concordia University to predict leaks in fluid-mechanics systems. Evaluated classical and deep-learning models on experimental data and applied explainable AI to interpret leak-related factors.",
    tags: ["Predictive Modeling", "Anomaly Detection", "Explainable AI", "MITACS Globalink"],
    color: "from-cyan-500 to-blue-600",
    github: "",
    demo: "",
    image: "/projects/pipeline-leakage.png",
  },
  {
    title: "Automated Spinal Cord Segmentation — Final-Year Project",
    description:
      "Built a custom 3D U-Net pipeline to segment spinal cords in MRI scans and investigated cross-sectional area estimation for neurological assessment. Integrated model results into a Flutter app with a Flask backend.",
    tags: ["3D U-Net", "MRI", "Medical Imaging", "Flutter", "Flask"],
    color: "from-blue-500 to-purple-600",
    github: "https://github.com/rakiaaaaaaaaaaa/Deep-Learning-Spinal-Cord-Segmentation",
    demo: "https://github.com/rakiaaaaaaaaaaa/Deep-Learning-Spinal-Cord-Segmentation/blob/main/PFA%20report%20document.pdf",
    image: "/projects/medical-ai.png",
  },
  {
    title: "Soil Moisture Prediction — AI SMART Hackathon, 3rd Prize",
    description:
      "Developed an ensemble machine-learning pipeline using satellite, weather, and soil data with LightGBM, XGBoost, and CatBoost. The project earned third prize at the 2025 AI SMART Hackathon.",
    tags: ["LightGBM", "XGBoost", "CatBoost", "Satellite Data", "Geospatial ML"],
    color: "from-emerald-500 to-teal-600",
    github: "https://github.com/rakiaaaaaaaaaaa/Soil-Moisture-Prediction/",
    demo: "",
    image: "/projects/soil-moisture.png",
  },
  {
    title: "Breast Cancer Detection",
    description:
      "Developed a convolutional neural-network medical image classification pipeline spanning image preprocessing, model training and evaluation, and integration into an application.",
    tags: ["CNN", "Medical Imaging", "Classification", "Deep Learning"],
    color: "from-red-500 to-pink-600",
    github: "https://github.com/rakiaaaaaaaaaaa/Breast-cancer-AI",
    demo: "",
    image: "/projects/breast-cancer.png",
  },
  {
    title: "Skin Cancer Detection",
    description:
      "Designed a CNN-based skin-lesion classification system covering image preprocessing, model training, performance evaluation, and application deployment.",
    tags: ["CNN", "Skin Lesion", "Classification", "Medical AI"],
    color: "from-orange-500 to-red-600",
    github: "https://github.com/rakiaaaaaaaaaaa/skin-cancer-classification",
    demo: "",
    image: "/projects/skin-lesion.png",
  },
]

// ─────────────────────────────────────────────────────────────
//  EXPERIENCE & LEADERSHIP
// ─────────────────────────────────────────────────────────────
export const experience = [
  {
    title: "Research Intern — MITACS Globalink",
    company: "Concordia University, Department of Mechanical Engineering — Montreal, Canada",
    period: "2026 · Completed",
    achievements: [
      "Designed and implemented a machine-learning framework to predict leaks in fluid-mechanics systems.",
      "Evaluated classical and deep-learning models on experimental data for predictive maintenance and anomaly detection.",
      "Applied explainable AI techniques to interpret predictions and identify factors associated with leaks.",
    ],
  },
  {
    title: "Intensive Data Analysis Bootcamp",
    company: "GoMyCode — Tunisia",
    period: "Dec 2025 – Mar 2026",
    achievements: [
      "Completed practical training in data analysis, cleaning, transformation, and visualization.",
      "Created interactive Power BI dashboards to communicate analytical findings.",
    ],
  },
  {
    title: "Django Developer Intern",
    company: "Squad Crafter — Gabès, Tunisia",
    period: "July 2025",
    achievements: [
      "Developed a learning management system with Django, including backend features and data models for users, courses, and learning content.",
      "Implemented user, course, and student-interaction management features.",
    ],
  },
  {
    title: "Internet of Things Intern",
    company: "Emertxe — India",
    period: "July – Aug 2024",
    achievements: [
      "Developed a smart-home automation system using Arduino, PICSimLab, and Blynk for device monitoring and control.",
      "Integrated hardware components with a mobile interface for remote monitoring.",
    ],
  },
  {
    title: "Founder & President",
    company: "ARSII — Association for Scientific Research and Innovation in Computer Science, ISIMG",
    period: "2025 – 2026",
    achievements: [
      "Founded and led the student association focused on scientific research and innovation in computer science.",
    ],
  },
  {
    title: "Founder & President",
    company: "IEEE ISIMG Industry Applications Society Student Branch Chapter",
    period: "2024 – 2025",
    achievements: [
      "Founded and led the IEEE Industry Applications Society student chapter at ISIMG.",
    ],
  },
]

// ─────────────────────────────────────────────────────────────
//  EDUCATION
// ─────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "Engineering Degree in Software Engineering — Data Science",
    institution: "Higher Institute of Computer Science, University of Gabès, Tunisia",
    period: "September 2023 – September 2026 · Graduated",
    grade: "16/20 — Very Good distinction",
    description:
      "Relevant coursework: Machine Learning, Deep Learning, Statistical Learning, Data Analysis, and Artificial Intelligence.",
    icon: "blue",
  },
  {
    degree: "Preparatory Cycle in Mathematics, Physics, and Computer Science",
    institution: "Higher Institute of Computer Science, University of Gabès, Tunisia",
    period: "September 2021 – June 2023",
    grade: "",
    description:
      "Relevant coursework: Mathematics, Probability and Statistics, Linear Algebra, Algorithms, and Numerical Analysis.",
    icon: "green",
  },
]

// ─────────────────────────────────────────────────────────────
//  CERTIFICATIONS
// ─────────────────────────────────────────────────────────────
export const certifications = {
  technical: [
    { name: "Diffusion Models & LLM Fine-Tuning", org: "NVIDIA" },
    { name: "Data Science Associate", org: "DataCamp · 2024" },
    { name: "Python 101 for Data Science", org: "IBM · 2023" },
  ],
  business: [
    { name: "Innovation and Entrepreneurship Summer Camp", org: "Avila University / U.S. Embassy · 2024" },
  ],
  ieee: [
    { name: "IEEE Computer Society Region 8 Share Your Journey Contest Winner", org: "IEEE Computer Society · 2024" },
    { name: "IEEE Women in Engineering Distinguished Mentor Award", org: "IEEE WIE · 2026" },
  ],
  language: [
    { name: "Arabic", org: "Language" },
    { name: "French", org: "Language" },
    { name: "English", org: "Language" },
  ],
  community: [
    { name: "WYSE Bootcamp", org: "Women United Nations Tunisia · 2024" },
  ],
}

// ─────────────────────────────────────────────────────────────
//  AWARDS & HONOURS
// ─────────────────────────────────────────────────────────────
export const awards = [
  {
    title: "IEEE Women in Engineering Distinguished Mentor Award",
    organization: "IEEE WIE",
    year: "2026",
    description:
      "Recognized by IEEE Women in Engineering for mentorship and contributions to the community. Profile published on the IEEE WIE website.",
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
    event: "NVIDIA Training — Diffusion Models & LLM Fine-Tuning",
    location: "Online",
    date: "Completed",
    role: "Training",
    color: "border-blue-500",
    url: "",
  },
  {
    event: "SMART AI Summit in Research and Technology",
    location: "Tunisia",
    date: "2025",
    role: "Attendee",
    color: "border-purple-500",
    url: "https://smart.ieee.tn/",
  },
  {
    event: "Innovation and Entrepreneurship Summer Camp — Avila University / U.S. Embassy",
    location: "Tunisia",
    date: "2024",
    role: "Participant",
    color: "border-green-500",
    url: "https://tn.usembassy.gov/first-edition-of-the-summer-innovation-camp/",
  },
  {
    event: "IEEE Computer Society Region 8 Congress",
    location: "Cairo, Egypt",
    date: "2024",
    role: "Delegate",
    color: "border-indigo-500",
    url: "",
  },
  {
    event: "WYSE Bootcamp — Women United Nations Tunisia",
    location: "Tunisia",
    date: "2024",
    role: "Participant",
    color: "border-pink-500",
    url: "",
  },
]

// ─────────────────────────────────────────────────────────────
//  LANGUAGES
// ─────────────────────────────────────────────────────────────
export const languages = [
  { name: "Arabic" },
  { name: "English" },
  { name: "French" },
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
"Software Engineer specializing in Artificial Intelligence and Data Science, with MITACS Globalink research experience in predictive modeling, optimization, and data-driven decision-making."
// ─────────────────────────────────────────────────────────────
//  CV MODAL — Technical Skills summary
// ─────────────────────────────────────────────────────────────
export const cvSkillsSummary = {
  languages:      "Python, SQL, JavaScript, HTML/CSS",
  mlDl:           "PyTorch, scikit-learn, XGBoost, LightGBM, CatBoost, U-Net, Transformers",
  dataAnalytics:  "NumPy, Pandas, Matplotlib, Seaborn, Power BI, SHAP, LIME, feature engineering, statistical analysis",
  toolsPlatforms: "Django, Flask, Streamlit, Git, GitHub, Docker, LaTeX, Figma, Claude CLI",
}
