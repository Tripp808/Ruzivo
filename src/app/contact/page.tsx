'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send, MessageSquare, Users, Briefcase, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

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

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '', interest: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Interested in collaborating, joining our research, or learning more about our work? 
            We'd love to hear from you. Reach out through any of the channels below.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="lg:col-span-2"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <MessageSquare className="h-6 w-6" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium mb-2">
                        I'm interested in
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select an option</option>
                        <option value="collaboration">Research Collaboration</option>
                        <option value="joining">Joining the Team</option>
                        <option value="internship">Internship Opportunities</option>
                        <option value="partnership">Partnership</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="media">Media Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Brief subject of your message"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group">
                      <Send className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Info & Ways to Get Involved */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="space-y-8"
          >
            {/* Contact Information */}
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Email</h4>
                    <a
                      href="mailto:contact@ruzivo.org"
                      className="text-primary hover:underline"
                    >
                      contact@ruzivo.org
                    </a>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">General Inquiries</h4>
                    <a
                      href="mailto:info@ruzivo.org"
                      className="text-primary hover:underline"
                    >
                      info@ruzivo.org
                    </a>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Research Collaborations</h4>
                    <a
                      href="mailto:research@ruzivo.org"
                      className="text-primary hover:underline"
                    >
                      research@ruzivo.org
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>
                    Stay updated with our latest research and announcements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ways to Get Involved */}
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Ways to Get Involved
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Students & Researchers</h4>
                      <p className="text-sm text-muted-foreground">
                        Join our research projects, collaborate on papers, or start your own research initiative.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Industry Partners</h4>
                      <p className="text-sm text-muted-foreground">
                        Partner with us to apply our research to real-world challenges and scale solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Community</h4>
                      <p className="text-sm text-muted-foreground">
                        Provide feedback on our work, share data, or help us understand community needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 py-16 bg-primary/5 rounded-2xl text-center"
        >
          <div className="max-w-2xl mx-auto px-8">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive updates on our latest research, 
              publications, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="group">
                Subscribe
                <Send className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

