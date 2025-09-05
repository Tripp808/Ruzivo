export interface Project {
  id: string
  title: string
  description: string
  category: 'NLP' | 'Computer Vision' | 'Machine Learning' | 'Data Science'
  status: 'ongoing' | 'completed' | 'planned'
  tags: string[]
  links?: {
    github?: string
    paper?: string
    demo?: string
    dataset?: string
  }
  image?: string
  date: string
}

export const projects: Project[] = [
  {
    id: 'african-language-models',
    title: 'African Language Models',
    description: 'Developing transformer-based language models for major African languages including Swahili, Amharic, Yoruba, and Zulu. This project aims to create high-quality language models that understand the nuances and cultural contexts of African languages.',
    category: 'NLP',
    status: 'ongoing',
    tags: ['Transformers', 'Language Models', 'African Languages', 'Multilingual NLP'],
    links: {
      github: 'https://github.com/ruzivo/african-language-models',
      paper: '#',
      dataset: '#'
    },
    date: '2024-01-15'
  },
  {
    id: 'agricultural-cv',
    title: 'Agricultural Computer Vision for African Crops',
    description: 'Computer vision system for identifying diseases and optimizing yields in crops commonly grown across Africa. Using deep learning to analyze satellite imagery and field photos to provide actionable insights to farmers.',
    category: 'Computer Vision',
    status: 'ongoing',
    tags: ['Agriculture', 'Disease Detection', 'Satellite Imagery', 'Deep Learning'],
    links: {
      github: 'https://github.com/ruzivo/agricultural-cv',
      demo: '#'
    },
    date: '2023-09-20'
  },
  {
    id: 'multilingual-sentiment',
    title: 'Multilingual Sentiment Analysis',
    description: 'Fine-tuning models for sentiment analysis across multiple African languages, with a focus on social media text and news articles. Addressing the lack of sentiment analysis tools for African languages.',
    category: 'NLP',
    status: 'completed',
    tags: ['Sentiment Analysis', 'Social Media', 'African Languages', 'Fine-tuning'],
    links: {
      github: 'https://github.com/ruzivo/multilingual-sentiment',
      paper: '#',
      demo: '#'
    },
    date: '2023-12-10'
  },
  {
    id: 'healthcare-nlp',
    title: 'Healthcare NLP for African Medical Records',
    description: 'Natural language processing tools for extracting insights from medical records in African healthcare systems. Working with local hospitals to improve patient care through better data analysis.',
    category: 'NLP',
    status: 'planned',
    tags: ['Healthcare', 'Medical Records', 'Information Extraction', 'Clinical NLP'],
    links: {},
    date: '2024-03-01'
  },
  {
    id: 'wildlife-monitoring',
    title: 'Wildlife Monitoring with Computer Vision',
    description: 'Automated wildlife monitoring system using camera traps and computer vision to track animal populations across African national parks. Collaborating with conservation organizations.',
    category: 'Computer Vision',
    status: 'ongoing',
    tags: ['Wildlife Conservation', 'Object Detection', 'Camera Traps', 'Conservation'],
    links: {
      github: 'https://github.com/ruzivo/wildlife-monitoring',
      demo: '#'
    },
    date: '2023-11-05'
  },
  {
    id: 'education-ai',
    title: 'AI-Powered Educational Tools',
    description: 'Developing AI tools to personalize education for African students, including adaptive learning systems and automated essay grading in local languages.',
    category: 'Machine Learning',
    status: 'planned',
    tags: ['Education', 'Personalization', 'Adaptive Learning', 'Essay Grading'],
    links: {},
    date: '2024-05-01'
  }
]

export const categories = ['All', 'NLP', 'Computer Vision', 'Machine Learning', 'Data Science'] as const
export const statuses = ['All', 'ongoing', 'completed', 'planned'] as const

