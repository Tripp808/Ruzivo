'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Globe2, Lightbulb, BookOpen, Eye, Brain, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 }
}

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/30 to-accent/5">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-20 -right-20 w-96 h-96 bg-accent/10 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute top-1/2 -left-32 w-64 h-64 bg-primary/5 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-1/4 w-32 h-32 bg-accent/20 transform rotate-45"
            animate={{ 
              rotate: [45, 225, 45]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div variants={fadeInLeft} transition={{ duration: 0.8 }} className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                    Localizing AI Research for Africa
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight font-serif">
                    <span className="text-foreground">RUZIVO</span>
                    <br />
                    <span className="text-primary">Research Lab</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg">
                    A grassroots collective advancing artificial intelligence that understands 
                    and serves African communities.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg px-8 py-3">
                    <a href="/research">
                      Explore Research
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                    <a href="/about">Our Story</a>
                  </Button>
                </div>

                <div className="pt-4">
                  <p className="text-base text-muted-foreground italic">
                    "RUZIVO" means knowledge in Shona
                  </p>
                </div>
              </motion.div>

              {/* Right Visual */}
              <motion.div variants={fadeInRight} transition={{ duration: 0.8 }} className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  {/* Central Hub */}
                  <motion.div 
                    className="relative z-20 w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl shadow-2xl flex items-center justify-center"
                    animate={{ 
                      rotateY: [0, 180, 360],
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Code className="w-12 h-12 text-white" />
                  </motion.div>

                  {/* Orbiting Elements */}
                  <motion.div 
                    className="absolute top-8 left-8 w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center"
                    animate={{ 
                      rotate: [0, 360],
                      y: [-10, 10, -10]
                    }}
                    transition={{ 
                      rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <Globe2 className="w-6 h-6 text-accent" />
                  </motion.div>

                  <motion.div 
                    className="absolute top-8 right-8 w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center"
                    animate={{ 
                      rotate: [360, 0],
                      y: [10, -10, 10]
                    }}
                    transition={{ 
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-secondary to-muted rounded-2xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 45, 0]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400">
                    <motion.path
                      d="M200,200 L100,100"
                      stroke="url(#gradient1)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <motion.path
                      d="M200,200 L300,100"
                      stroke="url(#gradient2)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <motion.path
                      d="M200,200 L200,300"
                      stroke="url(#gradient3)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

             {/* Research Focus Areas */}
      <section className="py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-6xl mx-auto space-y-16"
          >
            <div className="text-center">
              <motion.h2 
                variants={fadeInUp} transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-bold text-foreground font-serif mb-6"
              >
                Our Research Focus Areas
              </motion.h2>
              <motion.p 
                variants={fadeInUp} transition={{ duration: 0.8 }}
                className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto"
              >
                We advance AI research across key domains with an African-first perspective, 
                targeting the world's most prestigious conferences and journals.
              </motion.p>
            </div>

            <motion.div 
              variants={fadeInUp} transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <div className="text-center p-6 bg-card/50 rounded-xl border border-border/50 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <BookOpen className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="text-2xl font-bold text-primary mb-3 font-serif">Natural Language Processing</div>
                <div className="space-y-2 text-base text-muted-foreground">
                  <div>• African language models</div>
                  <div>• Low-resource NLP</div>
                  <div>• Cultural bias mitigation</div>
                  <div>• Multilingual systems</div>
                </div>
              </div>
              <div className="text-center p-6 bg-card/50 rounded-xl border border-border/50 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <Eye className="w-8 h-8 text-accent mx-auto" />
                </div>
                <div className="text-2xl font-bold text-accent mb-3 font-serif">Computer Vision</div>
                <div className="space-y-2 text-base text-muted-foreground">
                  <div>• African context recognition</div>
                  <div>• Cultural heritage preservation</div>
                  <div>• Agricultural applications</div>
                  <div>• Medical imaging</div>
                </div>
              </div>
              <div className="text-center p-6 bg-card/50 rounded-xl border border-border/50 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <Brain className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="text-2xl font-bold text-primary mb-3 font-serif">Machine Learning</div>
                <div className="space-y-2 text-base text-muted-foreground">
                  <div>• Data-efficient learning</div>
                  <div>• Transfer learning</div>
                  <div>• Federated learning</div>
                  <div>• Domain adaptation</div>
                </div>
              </div>
              <div className="text-center p-6 bg-card/50 rounded-xl border border-border/50 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <Scale className="w-8 h-8 text-accent mx-auto" />
                </div>
                <div className="text-2xl font-bold text-accent mb-3 font-serif">AI Ethics & Society</div>
                <div className="space-y-2 text-base text-muted-foreground">
                  <div>• Algorithmic fairness</div>
                  <div>• Bias detection</div>
                  <div>• Responsible AI</div>
                  <div>• Social impact assessment</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Target Venues */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-6xl mx-auto space-y-16"
          >
            <div className="text-center">
              <motion.h2 
                variants={fadeInUp} transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-6"
              >
                Where We Publish & Present
              </motion.h2>
              <motion.p 
                variants={fadeInUp} transition={{ duration: 0.8 }}
                className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto"
              >
                RUZIVO researchers target the most prestigious venues in AI and ML, 
                ensuring our work reaches both global and African research communities.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Conferences */}
              <motion.div variants={fadeInUp} transition={{ duration: 0.8 }} className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground font-serif mb-6">Target Conferences</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <div className="font-semibold text-primary mb-2">Global NLP/ML Venues</div>
                    <div className="text-base text-muted-foreground space-y-1">
                      <div>• ACL (Association for Computational Linguistics)</div>
                      <div>• EMNLP (Empirical Methods in NLP)</div>
                      <div>• AAAI (Artificial Intelligence)</div>
                      <div>• LREC (Language Resources & Evaluation)</div>
                    </div>
                  </div>

                  <div className="p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                    <div className="font-semibold text-accent mb-2">Computer Vision</div>
                    <div className="text-base text-muted-foreground space-y-1">
                      <div>• CVPR (Computer Vision & Pattern Recognition)</div>
                      <div>• ICCV (International Conference on Computer Vision)</div>
                      <div>• ECCV (European Conference on Computer Vision)</div>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <div className="font-semibold text-primary mb-2">Africa-Focused</div>
                    <div className="text-base text-muted-foreground space-y-1">
                      <div>• AfricaNLP Workshop @ ACL</div>
                      <div>• Deep Learning Indaba (Kigali)</div>
                      <div>• IndabaX (Pan-African)</div>
                    </div>
                  </div>

                  <div className="p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                    <div className="font-semibold text-accent mb-2">Ethics & Society</div>
                    <div className="text-base text-muted-foreground space-y-1">
                      <div>• FAccT (Fairness, Accountability, Transparency)</div>
                      <div>• AIES (AI, Ethics, and Society)</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Journals */}
              <motion.div variants={fadeInUp} transition={{ duration: 0.8 }} className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground font-serif mb-6">Target Journals</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/20 rounded-lg">
                    <div className="font-semibold text-foreground mb-3">Premier AI/ML Journals</div>
                    <div className="text-base text-muted-foreground space-y-2">
                      <div className="flex justify-between">
                        <span>• Journal of Artificial Intelligence Research (JAIR)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Transactions of the ACL (TACL)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Machine Learning Journal (Springer)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-secondary/20 rounded-lg">
                    <div className="font-semibold text-foreground mb-3">Ethics & Society Focus</div>
                    <div className="text-base text-muted-foreground space-y-2">
                      <div>• AI & Society (Springer)</div>
                      <div>• Data & Society journals</div>
                      <div>• Ethics and Information Technology</div>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-base text-center text-primary font-medium">
                      Strategic positioning in both global and African research ecosystems
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.h2 
              variants={fadeInUp} transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-foreground font-serif"
            >
              Be Part of the Movement
            </motion.h2>
            <motion.p 
              variants={fadeInUp} transition={{ duration: 0.8 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Whether you're a researcher, student, or simply passionate about Africa's technological future, 
              there are many ways to contribute to our mission of localizing AI research for the continent.
            </motion.p>
            <motion.div 
              variants={fadeInUp} transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Button asChild size="lg" className="text-lg px-8">
                <a href="/contact">Join Our Community</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href="/people">Meet the Team</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
