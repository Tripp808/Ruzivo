export interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string
  year: number
  type: 'conference' | 'journal' | 'workshop' | 'preprint' | 'upcoming'
  abstract: string
  keywords: string[]
  links?: {
    pdf?: string
    arxiv?: string
    github?: string
    doi?: string
    slides?: string
  }
  citation?: string
  featured?: boolean
  status?: 'published' | 'in-review' | 'upcoming' | 'draft'
}

export const publications: Publication[] = [
  {
    id: 'ruzivo-foundation',
    title: 'Establishing Community-Driven AI Research in Africa: The Ruzivo Initiative',
    authors: ['Alex Johnson', 'Sarah Chen', 'David Mukama'],
    venue: 'African Conference on Machine Learning (AfricaML)',
    year: 2025,
    type: 'upcoming',
    status: 'draft',
    abstract: 'This paper introduces Ruzivo, a grassroots AI research collective focused on addressing African challenges through locally-relevant machine learning solutions. We discuss our community-driven approach, initial research directions, and vision for sustainable AI development in Africa.',
    keywords: ['Community AI', 'African Research', 'Grassroots Technology', 'Local Innovation'],
    featured: true
  },
  {
    id: 'multilingual-toolkit',
    title: 'Building Open-Source Tools for African Language Processing',
    authors: ['Fatima El-Mansouri', 'James Ochieng'],
    venue: 'Workshop on Technologies for African Languages',
    year: 2025,
    type: 'upcoming',
    status: 'in-review',
    abstract: 'We present a comprehensive toolkit for African language processing, developed collaboratively by the Ruzivo community. The toolkit includes data collection, preprocessing, and evaluation tools designed specifically for low-resource African languages.',
    keywords: ['African Languages', 'Open Source', 'Language Tools', 'Community Development']
  },
  {
    id: 'vision-agriculture',
    title: 'Computer Vision Applications for Smallholder Agriculture in East Africa',
    authors: ['David Mukama', 'Alex Johnson'],
    venue: 'International Conference on AI for Social Good',
    year: 2025,
    type: 'upcoming',
    status: 'upcoming',
    abstract: 'A comprehensive study on applying computer vision techniques to support smallholder farmers in East Africa, including crop disease detection and yield estimation using mobile devices.',
    keywords: ['Computer Vision', 'Agriculture', 'Mobile Applications', 'Social Impact']
  }
]

// For filtering and display purposes
export const publicationTypes = ['All', 'Conference', 'Journal', 'Workshop', 'Preprint', 'Upcoming'] as const
export const years = [2025, 2024, 2023] as const

