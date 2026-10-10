// ✏️ All site content lives here. Edit this file to update the portfolio.
export const profile = {
  name: 'Kashi Mahtta',
  email: 'kashimahtta@gmail.com',
  phone: '+91 7060144444',
  github: 'https://github.com/kashimahtta',
  instagram: 'https://www.instagram.com/mahtta_kashi?dlrf=YTNuYjJ1em9mZjU1',
  linkedin: 'https://www.linkedin.com/in/kashi-mahtta-179436307',
  whatsapp: 'https://wa.me/917060144444',
  snapchat: 'https://www.snapchat.com/add/kashimahtta0201?share_id=rSotkfvSk-s&locale=en-GB',
  location: 'Ghaziabad, Uttar Pradesh, India',
};

export const nav = [
  ['about', 'About'], ['skills', 'Skills'], ['experience', 'Experience'],
  ['projects', 'Projects'], ['education', 'Education'], ['contact', 'Contact'],
];

export const stats = [
  ['4', 'Internship Experiences'], ['AI + Web', 'Development Focus'],
  ['2024–2028', 'B.Tech CSE'], ['AWS + Docker', 'Cloud Learning'],
];

export const floatingCards = ['Full-Stack Development', 'Generative AI', 'RAG & AI Agents', 'Cloud Computing'];

export const approach = [
  ['Understand First', 'Good solutions begin with asking the right questions.'],
  ['Build With Purpose', 'Every feature should solve a real problem.'],
  ['Keep Improving', 'Learn, test, refine, and build better.'],
];

export const skills = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'React Router', 'React Hooks', 'Context API', 'Bootstrap', 'jQuery', 'AJAX', 'Responsive Design'],
  Backend: ['Python', 'Django', 'Django REST Framework', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'CRUD Operations', 'Authentication'],
  'Databases & Search': ['MySQL', 'SQL', 'MongoDB', 'FAISS', 'Vector Indexing', 'Semantic Search'],
  'Generative AI': ['LLMs', 'Transformers', 'Prompt Engineering', 'RAG', 'LangChain', 'LangGraph', 'Cohere', 'Embeddings', 'Reranking', 'AI Agents', 'Citation Generation', 'Hallucination Mitigation'],
  'Tools & Cloud': ['Git', 'GitHub', 'Docker', 'AWS', 'Linux', 'Google Cloud', 'API Integration', 'Testing', 'Debugging'],
  'Currently Exploring': ['Data Structures & Algorithms', 'Cloud Computing', 'AWS Deployment', 'Docker', 'DevOps Fundamentals'],
};

export const experience = [
  { org: 'HCLTech', role: 'Generative AI Intern', date: 'June 2026 – August 2026',
    summary: 'Built RAG pipelines and agent-based AI workflows for an enterprise AI capstone project.',
    details: 'Worked on Generative AI applications using LLMs, transformer architecture, and LLM API integration. Built RAG pipelines and agent-based AI workflows using LangChain, LangGraph, FAISS, and Cohere embedding models. Worked with structured JSON outputs, Pydantic validation, retrieval evaluation, citation generation, and hallucination mitigation.',
    tags: ['Python', 'Generative AI', 'LLMs', 'RAG', 'LangChain', 'LangGraph', 'FAISS', 'Cohere', 'Pydantic'] },
  { org: 'Persevex', role: 'Web Development Intern', date: 'October 2025 – March 2026',
    summary: 'Developed full-stack web applications with React.js, Node.js and MongoDB.',
    details: 'Developed full-stack web applications using HTML, CSS, JavaScript, Bootstrap, and React.js. Built responsive UI components, implemented CRUD operations, integrated MongoDB, connected backend services using Node.js, and improved performance through debugging and optimization.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Git'] },
  { org: '1Stop', role: 'Frontend Development Intern', date: 'July 2025 – September 2025',
    summary: 'Built responsive, usable interfaces with JavaScript, jQuery and Bootstrap.',
    details: 'Developed responsive interfaces using HTML, CSS, JavaScript, jQuery, and Bootstrap. Implemented dynamic functionality using DOM manipulation and event handling, worked on frontend projects, and improved usability and cross-browser compatibility.',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Responsive Design'] },
  { org: 'Kenmark ITAN', role: 'Software Development Intern', date: 'January 2025 – June 2025',
    summary: 'Built frontend interfaces and CRUD modules for business applications.',
    details: 'Developed responsive frontend interfaces for business applications, integrated REST APIs, built CRUD modules using JavaScript, Node.js, and MongoDB, and collaborated on debugging, documentation, and Git-based version control.',
    tags: ['JavaScript', 'Node.js', 'MongoDB', 'REST APIs', 'Git', 'GitHub'] },
];

// cover: which CSS illustration to draw (see ProjectCover.jsx). Add `github` / `live` ONLY with verified URLs.
export const projects = [
  { title: 'AI Laptop Health Guardian', category: 'AI · Monitoring', cover: 'dashboard',
    desc: 'An AI-powered laptop health monitoring system that analyzes CPU, RAM, battery, storage, and temperature to generate an overall Laptop Health Score. Includes monitoring, predictive analytics, smart alerts, recommendations, performance charts, and a natural-language troubleshooting assistant.',
    tags: ['Python', 'React.js', 'Tailwind CSS', 'FastAPI', 'AI', 'Data Visualization'] },
  { title: 'Enterprise Knowledge Assistant', category: 'Generative AI · RAG', cover: 'rag',
    desc: 'A document-based RAG application for semantic search and context-aware answers from uploaded PDF documents.',
    tags: ['Python', 'RAG', 'LangChain', 'FAISS', 'Embeddings', 'Vector Search'] },
  { title: 'AI Minutes of Meeting & Action Assistant', category: 'AI Agents', cover: 'meeting',
    desc: 'An AI application that transforms meeting content into structured minutes, decisions, risks, and assigned action items using RAG and LangGraph.',
    tags: ['Python', 'RAG', 'LangGraph', 'LLMs', 'AI Agents'] },
  { title: 'AI-Powered Interview Assistant', category: 'Recruitment Tech', cover: 'interview',
    desc: 'A recruitment tool that analyzes resumes, generates candidate insights and interview questions, and supports voice interaction.',
    tags: ['Generative AI', 'Python', 'LLM APIs', 'Resume Analysis'] },
  { title: 'MAK Quiz Builder', category: 'Generative AI · Education', cover: 'quiz',
    desc: 'A Python and Streamlit quiz application that generates 3–10 topic-based MCQs with configurable difficulty, score evaluation, answer explanations, and JSON export.',
    tags: ['Python', 'Streamlit', 'Generative AI', 'JSON'] },
  { title: 'Infrared Image Enhancement & Colorization', category: 'Computer Vision', cover: 'infrared',
    desc: 'Enhanced and colorized grayscale infrared satellite images using false-color mapping for thermal analysis and object recognition.',
    tags: ['Python', 'OpenCV', 'NumPy', 'Computer Vision'] },
];

// ✏️ Short descriptions below are generic — replace with your real project details.
export const moreProjects = [
  { title: 'AI Recipe Maker', category: 'Generative AI', desc: 'An AI-assisted recipe generation project.' },
  { title: 'AI Writing Tutor', category: 'Generative AI', desc: 'An AI-assisted writing feedback project.' },
  { title: 'Sudoku AI Solver', category: 'Algorithms', desc: 'A Sudoku solving project.' },
  { title: 'Hotel Management System', category: 'Full-Stack', desc: 'A hotel management application.' },
  { title: 'Personal Expense Tracker', category: 'Web App', desc: 'An expense tracking application.' },
  { title: 'Orbit — Microsoft 365 Copilot Extension Agent', category: 'Prototype', desc: 'A Microsoft 365 Copilot extension agent prototype.' },
  { title: 'Responsive Frontend Websites', category: 'Frontend', desc: 'A collection of responsive frontend websites.' },
];

export const education = [
  ['JSS Academy of Technical Education, Noida', 'B.Tech, Computer Science & Engineering', '2024–2028'],
  ['DAV Public School, Shreshtha Vihar, Delhi', 'Class XII, PCM + Biotechnology', '2024'],
  ['DAV Public School, Shreshtha Vihar, Delhi', 'Class X', '2022'],
];
