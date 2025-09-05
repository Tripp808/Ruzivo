export interface TeamMember {
  id: string
  name: string
  role: string
  category: 'Researcher' | 'ML Engineer' | 'Software Engineer' | 'Mobile Developer' | 'Collaborator'
  bio: string
  education: string[]
  interests: string[]
  links?: {
    website?: string
    scholar?: string
    linkedin?: string
    twitter?: string
    github?: string
  }
  image?: string
  location: string
  affiliation: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'samiratu-ntohsi',
    name: 'Samiratu Ntohsi',
    role: 'AI/ML Researcher & Instructor',
    category: 'Researcher',
    bio: 'Samiratu specializes in AI/ML applications for healthcare and natural language processing. She brings expertise in mobile application development and machine learning education, contributing to both research innovation and knowledge transfer within the RUZIVO community.',
    education: [
      'MSc in Engineering Artificial Intelligence, Carnegie Mellon University Africa',
      'BSc in Computer Science, African Leadership University Rwanda'
    ],
    interests: ['AI/ML for Healthcare', 'Natural Language Processing', 'Mobile Application Development', 'Machine Learning Education'],
    image: '/images/team/samira.jpg',
    links: {
      linkedin: '#',
      github: '#'
    },
    location: 'Kigali, Rwanda',
    affiliation: 'African Leadership University'
  },
  {
    id: 'anesu-kafesu',
    name: 'Anesu Kafesu',
    role: 'Software Engineer & NLP Researcher',
    category: 'Software Engineer',
    bio: 'Anesu is a dedicated software engineer with expertise in advancing natural language processing technologies. His research centers on breaking down language barriers through innovative low-resource language translation systems.',
    education: [
      'BSc (Hons) in Software Engineering, African Leadership University'
    ],
    interests: ['Natural Language Processing', 'Low-Resource Language Translation', 'Software Engineering', 'Cross-Lingual AI'],
    image: '/images/team/anesu.jpg',
    links: {
      linkedin: '#',
      github: '#'
    },
    location: 'Harare, Zimbabwe',
    affiliation: 'African Leadership University'
  },
  {
    id: 'isaiah-essien',
    name: 'Isaiah Essien',
    role: 'Machine Learning Engineer & Mobile Developer',
    category: 'ML Engineer',
    bio: 'Isaiah is a versatile technologist combining machine learning expertise with comprehensive software engineering skills. Beyond his research in computer vision and AI for healthcare, he brings practical experience in mobile development, backend systems, DevOps, and financial market analysis.',
    education: [
      'BSc in Software Engineering with ML Specialization, African Leadership University'
    ],
    interests: ['Computer Vision', 'Machine Intelligence', 'Reinforcement Learning', 'AI for Healthcare', 'Mobile Development', 'DevOps', 'Financial Analytics'],
    image: '/images/team/isaiah.jpg',
    links: {
      linkedin: '#',
      github: '#'
    },
    location: 'Kigali, Rwanda',
    affiliation: 'African Leadership University'
  },
  {
    id: 'oche-ankeli',
    name: 'Oche D. Ankeli',
    role: 'Machine Learning Engineer & Researcher',
    category: 'ML Engineer',
    bio: 'Oche is a machine learning engineer and researcher specializing in ethical AI development and bias detection. His work focuses on evaluating and benchmarking AI models to reveal hidden biases, while fine-tuning systems for domain-specific applications. He brings expertise in both NLP and computer vision to ensure AI systems are fair and inclusive.',
    education: [
      'BSc in Software Engineering with AI/ML Specialization, African Leadership University'
    ],
    interests: ['Ethical AI', 'NLP Model Evaluation', 'Bias Detection & Mitigation', 'Model Benchmarking', 'Domain-Specific Fine-tuning', 'Computer Vision'],
    image: '/images/team/oche.jpg',
    links: {
      linkedin: '#',
      github: '#'
    },
    location: 'Kigali, Rwanda',
    affiliation: 'African Leadership University'
  },
  {
    id: 'samuel-babalola',
    name: 'Samuel Babalola',
    role: 'Machine Learning Engineer & AI Ethics Researcher',
    category: 'ML Engineer',
    bio: 'Samuel combines deep technical expertise in machine learning with a passionate commitment to ethical AI development. With over four years of teaching experience, he bridges the gap between cutting-edge research and accessible education. His faith-driven approach to technology emphasizes responsible innovation and community impact.',
    education: [
      'BSc in Software Engineering with ML Specialization, African Leadership University'
    ],
    interests: ['Deep Learning', 'Geospatial Machine Learning', 'AI Ethics & Fairness', 'Bias Mitigation', 'Explainable AI (XAI)', 'Education & Knowledge Sharing'],
    image: '/images/team/samuel.jpg',
    links: {
      linkedin: '#',
      github: '#'
    },
    location: 'Kigali, Rwanda',
    affiliation: 'African Leadership University'
  }
]

export const categories = ['All', 'Researcher', 'ML Engineer', 'Software Engineer', 'Mobile Developer', 'Collaborator'] as const

