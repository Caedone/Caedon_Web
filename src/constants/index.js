import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = 'I am a driven Computer Science student at The University of Texas at Dallas with a strong foundation in machine learning, data analysis, and software development. Through my hands-on experience spanning cybersecurity, neuroscience research, and mobile application development, I have developed exceptional technical versatility and problem-solving capabilities. My expertise includes machine learning and computer vision combining technical excellence with practical application.';

export const ABOUT_TEXT = `I am a dedicated Computer Science student at The University of Texas at Dallas with a passion for machine learning, data analysis, and software development. Currently pursuing my BS in Computer Science (Expected May 2026), I have gained hands-on experience in cybersecurity analysis, neuroscience research, and mobile application development. My technical journey spans from developing award-winning mobile health applications to optimizing complex data processing pipelines for behavioral analysis. I excel in collaborative environments and enjoy solving complex problems through innovative technical solutions. My expertise includes computer vision, machine learning frameworks like PyTorch, and data processing in MATLAB and Python.`;

export const EXPERIENCES = [
  {
    year: "May 2025 - Aug 2025",
    role: "Cyber Security Analyst Intern",
    company: "Christus Health",
    description: `Analyzed production-scale distributed systems using Elastic Stack and enterprise SIEM platforms. Researched security vulnerabilities and contributed to ransomware defense script analysis with focus on data parsing and system integration.`,
    technologies: ["Python", "Elastic Stack", "SIEM"],
  },
  {
    year: "Jun 2024 - May 2025",
    role: "Research Assistant",
    company: "Neuroscience Research Lab - UTD",
    description: `Developed machine learning algorithms for behavioral data clustering, achieving 98% accuracy. Built data processing pipeline handling 1M+ rows, reducing processing time by 50% through code optimization.`,
    technologies: ["Python", "MATLAB", "Machine Learning", "SQL"],
  },
];

export const PROJECTS = [
  {
    title: "Computer Vision  Training and Optimization",
    image: project1,
    description:
      "Built and optimized 5 CNN architectures achieving 94%+ accuracy on computer vision datasets. Implemented comprehensive evaluation suite with statistical analysis and performance metrics.",
    technologies: ["Python", "PyTorch", "TensorFlow", "scikit-learn"],
    github: "https://colab.research.google.com/drive/1-vFQKRQwl7sRGMLf5FPzn7jFqoHIOrrw?usp=sharing",
  },
  {
    title: "Mobile Health Application - 'WHIZZARD'",
    image: project2,
    description:
      "First place winner at Axxess Hackathon 2024. Developed HIPAA-compliant React components and image analysis algorithms achieving 95% accuracy in medical sample identification.",
    technologies: ["React", "NumPy", "OpenCV", "GPT"],
    github: "https://github.com/RafidN/Whizzard",
  },
  {
    title: "Personal Website Portfolio",
    image: project3,
    description:
      "Built and deployed a modern portfolio website using React and Tailwind CSS with responsive design and optimized performance. Integrated contact form and project showcase.",
    technologies: ["React", "JavaScript", "Vercel", "CSS"],
    github: "https://github.com/Caedone/Caedon_Web",
  },
  {
    title: "Airline Management Backend",
    image: project4,
    description:
      "Back-end solution with database connectivity. Implemented clean architecture with comprehensive CRUD operations for custom passenger management system.",
    technologies: ["Java", "JDBC", "SQL"],
    github: "https://github.com/Caedone/Airline_sys",
  },
];

export const CONTACT = {
  address: "Dallas, Texas, USA",
  phoneNo: "+1 214-608-3358",
  email: "CaedonEwing2@gmail.com",
};