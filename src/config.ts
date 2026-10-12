// All site content lives here. Edit this file to update the portfolio.
// Sections hide automatically when their array is empty.

export const siteConfig = {
  name: "Pavitra Murugesan",
  title: "Manufacturing AI Manager at Procter & Gamble",
  tagline: "Industrial AI · MLOps · Edge AI · Global AI Program Leadership",
  headline:
    "I take manufacturing AI from proof of concept to production, then make it repeatable.",
  description:
    "Pavitra Murugesan — Manufacturing AI Manager at Procter & Gamble. Scaling industrial AI, MLOps and edge AI across 18+ plants and 11+ business units.",
  location: "Frankfurt am Main, Germany",
  status: "Open to TPM, PM and technical AI roles",
  accentColor: "#0f766e",
  siteUrl: "https://mpavu.github.io",
  // Path to a PDF in /public (e.g. "/Pavitra_Murugesan_CV.pdf"). Leave empty to hide the button.
  // Use a version WITHOUT your phone number — this site is public.
  resume: "",
  social: {
    email: "pavitra.murugesan@gmail.com",
    linkedin: "https://www.linkedin.com/in/pavitra-murugesan",
    github: "https://github.com/mpavu",
  },

  stats: [
    { value: "55+", label: "AI use cases coached to production" },
    { value: "18+", label: "manufacturing sites worldwide" },
    { value: "11+", label: "business units reached" },
    { value: "200+", label: "practitioners trained & coached" },
  ],

  aboutMe: [
    "I work where manufacturing meets AI. At Procter & Gamble's Kronberg Innovation Center I lead the scaling of manufacturing AI across a global plant network — anomaly detection, predictive maintenance, soft sensors, touchless quality and closed-loop control — from use-case definition to production deployment and adoption.",
    "My focus is not only building the technology, but making sure it creates lasting value: reusable deployment patterns, MLOps on Azure and Siemens Industrial Edge, and a global coaching program that turns engineers into AI practitioners.",
    "My background spans OT/PLC integration, cloud ML and program leadership with global stakeholders and partners such as Siemens and ABB.",
  ],
  snapshot: [
    { label: "Role", value: "Manufacturing AI Manager, P&G" },
    { label: "Focus", value: "Industrial AI, MLOps, Edge AI, GenAI" },
    { label: "Experience", value: "4+ years in industrial data science & AI" },
    { label: "Based in", value: "Frankfurt am Main, Germany" },
    { label: "Education", value: "M.Eng. Automation & IT, TH Köln" },
    { label: "Languages", value: "English (C2), Tamil, Hindi, German (A2)" },
  ],

  // Case studies: problem → what I did → result → what I learned
  caseStudies: [
    {
      tag: "Predictive maintenance",
      metric: "~$5.8M",
      metricLabel: "estimated value, single site",
      name: "Anomaly detection as a reusable capability",
      problem:
        "A critical gear failure on a mill showed that degradation was visible in the data long before it became a breakdown — but every site was building detection from scratch.",
      action:
        "Standardised anomaly-detection deployment on SmartBox edge infrastructure, Siemens Industrial Edge and historian data, and coached 20+ projects across Asia, Europe and the Americas.",
      result:
        "Early detection of mill degradation became the reference case and is now the template for predictive maintenance across the network.",
      learning:
        "Scale comes from the deployment pattern, not the model. A boring, repeatable pipeline beats a clever one-off.",
      skills: ["Anomaly detection", "Siemens Industrial Edge", "SmartBox", "Time series"],
    },
    {
      tag: "Quality",
      metric: "~$2M",
      metricLabel: "estimated value per implementation",
      name: "Touchless quality: replacing manual sampling",
      problem:
        "Product quality was checked through manual sampling — slow, labour-intensive and blind between samples.",
      action:
        "Established a cloud ML approach for continuous quality prediction and worked with the quality organisation on validation and acceptance criteria.",
      result:
        "Secured quality-organisation acceptance for scale-up, with ~$12M of identified opportunity across further lines.",
      learning:
        "In regulated domains the hardest part is trust. Bring the quality team in at the start, not at sign-off.",
      skills: ["Azure ML", "Soft sensors", "Validation", "Stakeholder management"],
    },
    {
      tag: "Capability building",
      metric: "200+",
      metricLabel: "practitioners enabled",
      name: "WISE Coach Qualification (WCQ) program",
      problem:
        "AI training was happening, but it rarely turned into deployed solutions on the plant floor.",
      action:
        "Lead the global WCQ program: learning journeys, coaching frameworks, global sessions and cross-site communities of practice, each tied to a real use case. Created AI-X templates so engineers can build and deploy AI without deep data-science support.",
      result:
        "Turned training into a capability engine — 55+ coached use cases across 11+ business units, with self-serve AI patterns adopted in 6 business units.",
      learning:
        "Learning sticks when it ships. Tie every cohort to a production problem with an owner.",
      skills: ["Program leadership", "Coaching", "Change management", "Community building"],
    },
    {
      tag: "Master thesis · MLOps",
      metric: "ms",
      metricLabel: "closed-loop predictions on the line",
      name: "RapidMLOps: ML from Excel-like tools to the PLC",
      problem:
        "Engineers built good models in JMP, but there was no path to run them on edge devices against live PLC data.",
      action:
        "Built an end-to-end framework to package, deploy and manage models with Azure ML, GitHub and Power Apps; enabled JMP models on Siemens edge devices with real-time S7 PLC read/write, and a generic method for Siemens, Rockwell and Mitsubishi PLCs via OPC UA, MQTT, ZMQ and EtherNet/IP.",
      result:
        "Piloted on a production line with millisecond predictions for closed-loop control; built a lab test stand (pH soft sensor) and trained professionals from multiple business units.",
      learning:
        "Meet engineers in the tools they already use, then automate everything after the model.",
      skills: ["Azure ML", "OPC UA", "MQTT", "Siemens S7", "Power Apps"],
    },
  ],
  caseStudyNote:
    "Values are estimates from internal business cases and are rounded. Details are kept at a level that respects confidentiality.",

  // Things currently in progress
  nowBuilding: [
    {
      name: "Agentic AI for manufacturing operations",
      status: "Exploring",
      description:
        "Evaluating Generative AI and agent-based applications for plant operations with technology partners.",
    },
    {
      name: "This portfolio",
      status: "Live",
      description:
        "Open-source, built with Astro and Tailwind CSS on top of the DevPortfolio template and hosted on GitHub Pages.",
      link: "https://github.com/mpavu/mpavu.github.io",
    },
  ],

  // Personal & open-source projects
  projects: [
    {
      name: "Claude Slides",
      description:
        "Ready-to-use AI slide-creation setup for GitHub Copilot and other coding agents.",
      link: "https://github.com/mpavu/Claude_Slides",
      skills: ["GenAI", "Coding agents"],
    },
    {
      name: "Handwritten character recognition",
      description:
        "CNN-based handwritten character recognition built with Keras and TensorFlow.",
      link: "https://github.com/mpavu/Hand-written-character-recognization",
      skills: ["Python", "Keras", "CNN"],
    },
    {
      name: "Car number plate detection",
      description:
        "Image-processing pipeline in MATLAB that detects and reads vehicle number plates for ANPR.",
      link: "https://github.com/mpavu/car-number-plate-detection-using-matlab",
      skills: ["MATLAB", "Computer vision"],
    },
    {
      name: "Automatic irrigation with farmer alerts",
      description:
        "Arduino system with soil-moisture and ultrasonic sensors that drives two pumps and texts the farmer whenever pump status changes.",
      link: "https://github.com/mpavu/Automatic-irrigation-system-with-notification-to-the-farmer",
      skills: ["Arduino", "C++", "IoT"],
    },
  ],

  experience: [
    {
      company: "Procter & Gamble · Kronberg Innovation Center",
      title: "Manufacturing AI Manager (WISE – Intelligent Control Automation Platform)",
      dateRange: "Apr 2024 – Present",
      bullets: [
        "Lead the scaling of manufacturing AI across P&G's global plant network; coached 55+ use cases across 11+ business units and 18+ sites (~$15M+ estimated single-instance value, ~$38M+ identified opportunity).",
        "Designed a repeatable deployment pattern for shrink-sleeve defect prediction planned across 19 lines; deployed multi-cavity edge anomaly monitoring at a German plant.",
        "Lead the global WISE Coach Qualification program and AI-X self-serve templates adopted across 6 business units.",
        "Evaluate and pilot technologies with Siemens, ABB, Falcon Labs and AI vendors, including GenAI and agent-based applications.",
      ],
    },
    {
      company: "Procter & Gamble · Kronberg (thesis with TH Köln)",
      title: "Master Thesis Student & Intern – Manufacturing MLOps",
      dateRange: "May 2023 – Feb 2024",
      bullets: [
        "Built RapidMLOps, an end-to-end framework to package, deploy and manage ML models in manufacturing.",
        "Enabled JMP models on Siemens edge devices with real-time S7 PLC data and write-back for closed-loop control.",
        "Led the production-line pilot and trained professionals from multiple business units.",
      ],
    },
    {
      company: "Aptiv GmbH · Wiehl",
      title: "Working Student – Data Science, Sensor Systems",
      dateRange: "Oct 2022 – Mar 2023",
      bullets: [
        "Signal processing and optimisation in MATLAB for a vehicle breakage alarm-sensor system.",
        "Localised incidents using neural-network classification; supported sensor planning and installation.",
      ],
    },
    {
      company: "Remark Skill Education · Decibel's Lab · Delhi",
      title: "Internships – Data Science & Control Systems",
      dateRange: "2020 – 2021",
      bullets: [
        "CNN-based handwritten character recognition; numerical modelling and simulation of vehicle and drone systems.",
      ],
    },
  ],

  skillGroups: [
    {
      name: "AI & Data Science",
      items: ["Machine learning", "Anomaly detection", "Predictive maintenance", "Time-series forecasting", "Soft sensors", "Generative & agentic AI", "JMP"],
    },
    {
      name: "MLOps & Cloud",
      items: ["Azure ML", "Azure Databricks", "AWS", "Docker", "GitHub & Copilot", "CI/CD", "Prometheus"],
    },
    {
      name: "Industrial / OT",
      items: ["Siemens Industrial Edge", "SmartBox", "PLC integration (S7, Rockwell, Mitsubishi)", "OPC UA", "MQTT", "Profinet", "Node-RED", "TIA Portal"],
    },
    {
      name: "Programming",
      items: ["Python", "SQL", "R", "MATLAB / Simulink", "Power BI", "Power Apps"],
    },
    {
      name: "Program & Product",
      items: ["Global program management", "Stakeholder & vendor management", "Risk management", "Agile", "Digital product management"],
    },
    {
      name: "Leadership",
      items: ["Capability building & coaching", "Training program design", "Change management", "Influencing up and across"],
    },
  ],

  awards: [
    { name: "CEO Award", org: "Procter & Gamble", year: "2026" },
    { name: "SCI Solution Provider Award", org: "Procter & Gamble", year: "2026" },
    { name: "Deutschlandstipendium", org: "TH Köln", year: "2021 – 2024" },
    { name: "Academic Awards (1st & 3rd position)", org: "University of Delhi", year: "" },
  ],

  education: [
    {
      school: "TH Köln – Cologne University of Applied Sciences",
      degree: "M.Eng. Automation and IT",
      dateRange: "Oct 2021 – Feb 2024",
      achievements: [
        "Industrial IoT & MES, industrial communication, IT security, data science",
        "Deutschlandstipendium scholar",
      ],
    },
    {
      school: "University of Delhi",
      degree: "B.Sc. (Hons) Instrumentation",
      dateRange: "Jul 2017 – Jul 2020",
      achievements: ["Control systems, embedded systems, robotics", "Academic awards (1st and 3rd position)"],
    },
  ],

  // How I work — short principles
  principles: [
    { title: "Plan with intention, adapt with ease", text: "Clear goals, short loops, and the flexibility to change course when the data says so." },
    { title: "Pilot to production", text: "A use case isn't done until it runs on the line and someone owns it." },
    { title: "Build once, reapply everywhere", text: "Templates and patterns that let the next site go live in a fraction of the effort." },
    { title: "People before platforms", text: "Adoption is a people problem. Coaching and community make technology stick." },
  ],

  // Personal
  beyondWork: {
    intro:
      "Outside work I'm curious about where IoT, growth and futuristic AI are heading — and I like learning in public and helping others get started with AI.",
    interests: [
      { emoji: "✈️", label: "Travel" },
      { emoji: "🏃‍♀️", label: "Running" },
      { emoji: "🍲", label: "Food & cooking" },
      { emoji: "🎬", label: "Movies" },
      { emoji: "🇩🇪", label: "Learning German" },
      { emoji: "🤖", label: "Futuristic AI" },
    ],
  },
};
