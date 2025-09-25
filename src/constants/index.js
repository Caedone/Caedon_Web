import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = 'I am a dedicated Computer Science student at The University of Texas at Dallas with a passion for machine learning, data analysis, and software development. Through my hands-on experience spanning software engineering, neuroscience research, and healthcare data systems, I have developed exceptional technical versatility and problem-solving capabilities. My expertise includes machine learning, computer vision, and scalable system architecture combining technical excellence with practical application.';

export const ABOUT_TEXT = `I am a dedicated Computer Science student at The University of Texas at Dallas with a passion for machine learning, data analysis, and software development. Currently pursuing my BS in Computer Science (Expected December 2025), I have gained hands-on experience in software engineering, neuroscience research, and healthcare data management. My technical journey spans from developing award-winning medical research platforms to architecting scalable data processing pipelines for behavioral analysis. I excel in collaborative environments and enjoy solving complex problems through innovative technical solutions. My expertise includes computer vision, machine learning frameworks like PyTorch, distributed systems with Docker and Kubernetes, and enterprise-level application development.`;

export const EXPERIENCES = [
  {
    year: "May 2025 - Aug 2025",
    role: "IM CyberSecurity Intern",
    company: "Christus Health",
    description: `Developed scalable C# applications with SQL database integration for healthcare data management systems, implementing robust CRUD operations and optimized database queries using .NET framework. Built production-scale infrastructure components for distributed healthcare data systems and collaborated with cross-functional engineering teams.`,
    technologies: ["C#", ".NET Framework", "SQL"],
  },
  {
    year: "Jun 2024 - May 2025",
    role: "Research Assistant - Computational Data Analyst",
    company: "Neuroscience Research Lab - UT Dallas",
    description: `Led interdisciplinary team developing custom ML infrastructure utilizing unsupervised learning algorithms and affinity propagation for large-scale behavioral data clustering, doubling pattern recognition accuracy. Architected scalable data processing pipeline for over 1M rows of raw research data, reducing processing time by 50%. Utilized Docker to containerize MATLAB clustering sessions and deployed distributed MATLAB instances across compute nodes.`,
    technologies: ["Python", "MATLAB", "Machine Learning", "Docker", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "Computer Vision Model Optimization",
    image: project1,
    description:
      "Engineered scalable ML compute infrastructure benchmarking 5 CNN architectures across 15 model variants on large-scale datasets (MNIST, Fashion-MNIST, CIFAR-10), achieving 94%+ accuracy. Built comprehensive evaluation suite with statistical analysis and performance metrics.",
    technologies: ["Python", "PyTorch", "Scikit-learn"],
    github: "https://colab.research.google.com/drive/1-vFQKRQwl7sRGMLf5FPzn7jFqoHIOrrw?usp=sharing",
  },
  {
    title: "WHIZZARD - Medical Research Platform",
    image: project2,
    description:
      "First place winner at Axxess Hackathon 2024. Developed responsive React components implementing HIPAA-compliant interfaces for healthcare research. Built custom image analysis algorithms using OpenCV achieving 95% accuracy in medical sample identification.",
    technologies: ["React", "OpenCV", "Python", "GPT"],
    github: "https://github.com/RafidN/Whizzard",
  },
  {
    title: "Dipfin - Financial Data Infrastructure",
    image: project3,
    description:
      "Architected scalable financial data aggregation system using React TypeScript frontend with .NET backend API for real-time market data processing and analysis. Developed robust data pipeline infrastructure integrating multiple financial modeling APIs.",
    technologies: ["React", "TypeScript", ".NET API", "Python"],
    github: "https://github.com/Caedone/Dipfin",
  },
  {
    title: "Airline Management Backend",
    image: project4,
    description:
      "Back-end solution with database connectivity. Implemented clean architecture with comprehensive CRUD operations for custom passenger management system using Java and JDBC.",
    technologies: ["Java", "JDBC", "SQL"],
    github: "https://github.com/Caedone/Airline_sys",
  },
];

export const CONTACT = {
  address: "Dallas, Texas, USA",
  phoneNo: "+1 214-608-3358",
  email: "CaedonEwing2@gmail.com",
};