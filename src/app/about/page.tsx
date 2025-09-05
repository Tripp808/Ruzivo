'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Users, Globe, BookOpen, Lightbulb, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function AboutPage() {
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
            About RUZIVO
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-2xl font-bold text-primary block mb-4 font-serif">
              RUZIVO means "knowledge" in Shona
            </span>
            We are a grassroots collective of researchers united by our commitment to 
            democratizing AI knowledge and localizing research for Africa. Our name reflects 
            our core belief: that true progress comes from sharing knowledge and building 
            it together, rooted in African wisdom and experience.
          </motion.p>
        </motion.div>

        {/* Origin Story */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-african-forest to-african-gold flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Origin Story</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                RUZIVO Research Lab was born from a simple observation: despite Africa's rich 
                linguistic and cultural diversity, most AI research and development happens 
                elsewhere, with little consideration for African contexts, languages, and needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded by a group of passionate students and faculty at African Leadership 
                University, RUZIVO emerged from late-night discussions about how AI could 
                better serve African communities. We realized that meaningful progress required 
                not just adapting existing technologies, but building new ones from the ground up.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as informal research collaborations has grown into a thriving 
                collective of researchers across the continent, all working toward the same goal: 
                making AI research by Africans, for Africans.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-african-gold/10 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🌍</div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* The Meaning of RUZIVO */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mb-20 py-16 bg-gradient-to-br from-african-forest/10 to-african-gold/10 rounded-2xl"
        >
          <div className="px-8">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-center mb-8 font-serif"
            >
              The Meaning of RUZIVO
            </motion.h2>
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-2xl font-medium text-primary font-serif mb-6">
                "Ruzivo" is a Shona word that means <em>knowledge</em>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In Shona culture, knowledge is not just information—it's wisdom passed down through 
                generations, understanding that comes from lived experience, and insight that connects 
                past, present, and future. It embodies the African philosophy of knowledge as a 
                collective treasure, meant to be shared and built upon by the community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By choosing this name, we honor the rich tradition of knowledge-sharing in African 
                societies while committing to democratize AI research. Just as traditional knowledge 
                was preserved and transmitted through storytelling, apprenticeship, and community 
                wisdom, we believe AI knowledge should flow freely, accessibly, and meaningfully 
                throughout African communities.
              </p>
              <div className="mt-8 p-6 bg-white/50 rounded-lg">
                <p className="text-xl font-medium text-primary italic">
                  "Knowledge belongs to the community, grows through sharing, and flourishes when rooted in cultural wisdom."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            Mission & Vision
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    True to our name—<strong>ruzivo</strong> (knowledge)—we advance artificial 
                    intelligence research that understands, preserves, and amplifies African 
                    languages, cultures, and indigenous knowledge systems. We democratize AI 
                    knowledge while addressing real challenges facing African communities, 
                    ensuring that wisdom flows both ways between traditional knowledge and 
                    modern technology.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    A future where <strong>ruzivo</strong>—knowledge—flows freely across African 
                    communities, where AI technologies are designed by Africans for African contexts, 
                    and where the continent's rich diversity is not just represented but leads 
                    innovation in the global AI landscape. We envision a world where African 
                    knowledge systems inform and enhance artificial intelligence.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Ubuntu",
                description: "We believe in the interconnectedness of our work and its impact on African communities."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We foster partnerships across disciplines, institutions, and borders."
              },
              {
                icon: Globe,
                title: "Inclusivity",
                description: "We ensure our research represents Africa's linguistic and cultural diversity."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We maintain high research standards while staying grounded in practical applications."
              }
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ALU Connection */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="relative order-2 lg:order-1">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                <div className="text-4xl">🎓</div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-african-forest to-african-gold flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">African Leadership University</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our connection to African Leadership University (ALU) runs deep. Many of our 
                founding members are ALU students, alumni, or faculty who were inspired by 
                the university's mission to develop Africa's next generation of leaders.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ALU's commitment to developing African solutions for African challenges 
                perfectly aligns with our research philosophy. The university's emphasis on 
                entrepreneurship, leadership, and social impact has shaped our approach to 
                research that goes beyond academic papers to create real-world change.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                While we maintain our independence as a research collective, we continue to 
                collaborate closely with ALU, drawing from its network of talented students, 
                distinguished faculty, and alumni making waves across the continent.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Research Philosophy */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mb-20 py-16 bg-secondary/20 rounded-2xl"
        >
          <div className="px-8">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-center mb-8"
            >
              Our Research Philosophy
            </motion.h2>
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                We believe that meaningful AI research must be rooted in the communities it aims to serve. 
                Our approach combines rigorous academic research with practical applications that address 
                real challenges facing African societies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Community-Driven</div>
                  <p className="text-sm text-muted-foreground">Research guided by community needs and feedback</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Open Science</div>
                  <p className="text-sm text-muted-foreground">Sharing knowledge, data, and tools openly</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Impact-Focused</div>
                  <p className="text-sm text-muted-foreground">Measuring success by real-world impact</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Join Us CTA */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a researcher, student, or someone passionate about African AI development, 
            there's a place for you in our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contact">Get Involved</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/research">Explore Our Research</a>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

