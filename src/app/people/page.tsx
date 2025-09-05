'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Globe, GraduationCap, MapPin, ExternalLink, Github, Linkedin, Twitter, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { teamMembers, categories, type TeamMember } from '@/data/team'

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

function PersonCard({ person }: { person: TeamMember }) {
  const categoryColors = {
    Researcher: 'bg-blue-100 text-blue-800 border-blue-200',
    'ML Engineer': 'bg-purple-100 text-purple-800 border-purple-200',
    'Software Engineer': 'bg-green-100 text-green-800 border-green-200',
    'Mobile Developer': 'bg-orange-100 text-orange-800 border-orange-200',
    Collaborator: 'bg-pink-100 text-pink-800 border-pink-200'
  }

  // Generate a consistent avatar based on name
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
      'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
    ]
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
    return colors[index]
  }

  return (
    <motion.div variants={fadeInUp}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="text-center">
          {/* Avatar */}
          <div className="w-36 h-36 rounded-full mx-auto mb-6 overflow-hidden shadow-lg border-4 border-white">
            {person.image ? (
              <img 
                src={person.image} 
                alt={person.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div className={`w-full h-full rounded-full ${getAvatarColor(person.name)} flex items-center justify-center text-white font-bold text-2xl ${person.image ? 'hidden' : ''}`}>
              {getInitials(person.name)}
            </div>
          </div>
          
          <div className="space-y-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${categoryColors[person.category]}`}>
              {person.category}
            </span>
            <CardTitle className="text-xl">{person.name}</CardTitle>
            <CardDescription className="font-medium text-primary">
              {person.role}
            </CardDescription>
            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {person.location}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {person.bio}
          </p>

          {/* Affiliation */}
          <div className="flex items-center gap-2 text-sm">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{person.affiliation}</span>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Education</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {person.education.map((edu, index) => (
                <li key={index}>• {edu}</li>
              ))}
            </ul>
          </div>

          {/* Research Interests */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Research Interests</h4>
            <div className="flex flex-wrap gap-1">
              {person.interests.map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {person.links && Object.keys(person.links).length > 0 && (
            <div className="flex gap-2 pt-4 border-t">
              {person.links.website && (
                <Button variant="outline" size="sm" asChild>
                  <a href={person.links.website} target="_blank" rel="noopener noreferrer" title="Website">
                    <Globe className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {person.links.scholar && (
                <Button variant="outline" size="sm" asChild>
                  <a href={person.links.scholar} target="_blank" rel="noopener noreferrer" title="Google Scholar">
                    <GraduationCap className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {person.links.github && (
                <Button variant="outline" size="sm" asChild>
                  <a href={person.links.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {person.links.linkedin && (
                <Button variant="outline" size="sm" asChild>
                  <a href={person.links.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {person.links.twitter && (
                <Button variant="outline" size="sm" asChild>
                  <a href={person.links.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function PeoplePage() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.interests.some(interest => interest.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         member.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All' || member.category === selectedCategory

    return matchesSearch && matchesCategory
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
            Our Team
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Meet the dedicated machine learning engineers, software engineers, and researchers behind RUZIVO. 
            All African Leadership University graduates based primarily in Kigali, Rwanda, 
            united by our commitment to advancing AI research for African contexts.
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
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
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
            </motion.div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredMembers.map((member) => (
            <PersonCard key={member.id} person={member} />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredMembers.length === 0 && (
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              No team members found matching your criteria.
            </p>
          </motion.div>
        )}

        {/* Join Us CTA */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16 py-12 bg-secondary/20 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Interested in Joining Us?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for passionate researchers, students, and collaborators 
            who share our vision of advancing AI research in Africa.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

