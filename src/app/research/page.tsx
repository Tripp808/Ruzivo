'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, FileText, Database, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { projects, categories, statuses, type Project } from '@/data/projects'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function ProjectCard({ project }: { project: Project }) {
  const statusColors = {
    ongoing: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    completed: 'bg-green-100 text-green-800 border-green-200',
    planned: 'bg-blue-100 text-blue-800 border-blue-200'
  }

  const categoryColors = {
    NLP: 'bg-purple-100 text-purple-800 border-purple-200',
    'Computer Vision': 'bg-orange-100 text-orange-800 border-orange-200',
    'Machine Learning': 'bg-pink-100 text-pink-800 border-pink-200',
    'Data Science': 'bg-cyan-100 text-cyan-800 border-cyan-200'
  }

  return (
    <motion.div variants={fadeInUp}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${categoryColors[project.category]}`}>
              {project.category}
            </span>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[project.status]}`}>
              {project.status}
            </span>
          </div>
          <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {new Date(project.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long' 
            })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-4 border-t">
            {project.links?.github && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
            {project.links?.paper && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-1" />
                  Paper
                </a>
              </Button>
            )}
            {project.links?.demo && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </a>
              </Button>
            )}
            {project.links?.dataset && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.dataset} target="_blank" rel="noopener noreferrer">
                  <Database className="h-4 w-4 mr-1" />
                  Data
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('All')
  const [selectedStatus, setSelectedStatus] = React.useState('All')

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="text-center mb-12"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
          >
            Research & Publications
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Exploring the frontiers of AI research with a focus on African languages, 
            contexts, and challenges. Our work spans ongoing projects, published papers, 
            and collaborative research initiatives.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <motion.div variants={fadeInUp} className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </motion.div>

            {/* Category and Status Filters */}
            <motion.div variants={fadeInUp} className="flex gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status === 'All' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}

        {/* Publications Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mt-20 pt-16 border-t"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Publications & Papers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our research findings published in top-tier conferences and journals, 
              advancing the field of AI with African-focused perspectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recent Publications */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold font-serif">Recent Publications</h3>
              
              <div className="space-y-4">
                <div className="p-6 bg-card rounded-lg border">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      AfricaNLP 2024
                    </span>
                    <span className="text-sm text-muted-foreground">July 2024</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">
                    "Advancing Low-Resource NLP for African Languages: A Comprehensive Study"
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    A systematic analysis of NLP techniques for under-resourced African languages, 
                    focusing on transfer learning and data augmentation strategies.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      Paper
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>

                <div className="p-6 bg-card rounded-lg border">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      ICCV 2024
                    </span>
                    <span className="text-sm text-muted-foreground">October 2024</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">
                    "Cultural Context Recognition in Computer Vision for African Heritage"
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Novel approaches to incorporating cultural context in computer vision models 
                    for better recognition of African cultural artifacts and practices.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      Paper
                    </Button>
                    <Button variant="outline" size="sm">
                      <Database className="h-4 w-4 mr-1" />
                      Dataset
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Target Venues & Achievements */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold font-serif">Publication Strategy</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold text-primary mb-2">Premier AI Venues</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>• NeurIPS, ICML, ICLR</div>
                    <div>• ACL, EMNLP, NAACL</div>
                    <div>• CVPR, ICCV, ECCV</div>
                  </div>
                </div>

                <div className="p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                  <h4 className="font-semibold text-accent mb-2">Africa-Focused</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>• AfricaNLP Workshop</div>
                    <div>• Deep Learning Indaba</div>
                    <div>• IndabaX Conference Series</div>
                  </div>
                </div>

                <div className="p-4 bg-secondary/20 rounded-lg">
                  <h4 className="font-semibold mb-2">Journal Publications</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>• JAIR, TACL, Nature AI</div>
                    <div>• AI & Society</div>
                    <div>• Computational Linguistics</div>
                  </div>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Papers Under Review</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mt-16 pt-16 border-t"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div variants={fadeInUp}>
              <div className="text-3xl font-bold text-primary mb-2">
                {projects.filter(p => p.status === 'ongoing').length}
              </div>
              <div className="text-muted-foreground">Ongoing Projects</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl font-bold text-primary mb-2">
                {projects.filter(p => p.status === 'completed').length}
              </div>
              <div className="text-muted-foreground">Completed Projects</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl font-bold text-primary mb-2">
                8
              </div>
              <div className="text-muted-foreground">Published Papers</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl font-bold text-primary mb-2">
                15+
              </div>
              <div className="text-muted-foreground">Under Review</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

