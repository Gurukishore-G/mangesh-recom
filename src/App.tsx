import React, { useState } from 'react';
import { Star, User, Calendar, ExternalLink, ChevronDown, ChevronUp, Award, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Recommendation {
  id: number;
  name: string;
  title: string;
  company: string;
  date: string;
  relationship: string;
  text: string;
  avatar?: string;
  gradient: string;
}

function App() {
  const [expandedRec, setExpandedRec] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Enhanced recommendations with gradient colors
  const recommendations: Recommendation[] = [
    {
      id: 1,
      name: "Nitin Sharma",
      title: "General Manager at Weener Plastics Group",
      company: "Weener Plastics Group",
      date: "September 3, 2025",
      relationship: "Nitin was Mangesh's client",
      text: "I had the pleasure of working with Mangesh during Spin selling training, and I can confidently say that he is one of the most impactful trainers I've come across. His ability to break down complex concepts into engaging, easy-to-understand sessions is truly commendable. What sets Mangesh apart is his deep subject matter expertise, interactive training style, and genuine passion for empowering others. They foster an environment that encourages participation, curiosity, and growth — making every session both insightful and enjoyable.",
      gradient: "from-violet-500 via-purple-500 to-indigo-600"
    },
    {
      id: 2,
      name: "S Babu",
      title: "Sales & Leadership Coach | Pharma Training Expert",
      company: "Strategic Coaching and Adult Learning Principles",
      date: "September 2, 2025",
      relationship: "S was Mangesh's client",
      text: "I had the opportunity to attend a training session conducted by Mangesh Shenai, and I was truly amazed by his facilitation skills. He has a remarkable ability to make complex topics simple, engaging, and easy to apply. Mangesh's expertise in MBTI is evident in the way he understands people and their unique behaviors. He has an incredible knack for identifying challenges and designing scientifically-based, practical training solutions that resonate with participants. His sessions are not only insightful but also highly interactive, keeping everyone engaged while delivering deep learning. What stands out most is his ability to combine knowledge with real-world application, making his training impactful and memorable. Mangesh is a true professional and a masterful facilitator, and I highly recommend him to anyone seeking expert guidance in personality profiling, behavioral insights, or skill development.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600"
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedRec(expandedRec === id ? null : id);
  };

  const truncateText = (text: string, maxLength: number = 200) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Header Section */}
      <motion.div 
        className="relative bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20"
        style={{ y: headerY, opacity: headerOpacity }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="flex justify-center items-center mb-6"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <User className="w-12 h-12 text-white" />
                </div>
                <motion.div 
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl font-bold bg-gradient-to-r from-slate-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional Recommendations
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Training Excellence • Leadership Development • Sales Coaching
            </motion.p>
            
            <motion.div 
              className="flex justify-center items-center space-x-3 text-sm text-slate-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-1">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="font-semibold text-slate-700">20 Professional Recommendations</span>
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + star * 0.1 }}
                  >
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-indigo-800 bg-clip-text text-transparent mb-6">
            What Clients & Colleagues Say
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            These recommendations showcase real experiences from professionals who have worked with me 
            in training, coaching, and business development initiatives.
          </p>
        </motion.div>

        {/* Recommendations Grid */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.id}
              variants={cardVariants}
              className="group relative"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10 from-blue-200/50 via-purple-200/50 to-indigo-200/50" />
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 group-hover:border-white/80">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${rec.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start space-x-6 mb-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${rec.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {rec.name.split(' ').map(n => n[0]).join('')}
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        {rec.name}
                      </motion.h3>
                      <p className="text-slate-600 font-medium text-lg mb-2">{rec.title}</p>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{rec.date}</span>
                        </div>
                        <span>•</span>
                        <span className="italic">{rec.relationship}</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Text */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    <div className="text-slate-700 leading-relaxed text-lg">
                      <span className={`text-6xl bg-gradient-to-r ${rec.gradient} bg-clip-text text-transparent font-serif absolute -left-4 -top-4 opacity-60`}>"</span>
                      <div className="pl-8 relative z-10">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                        >
                          {expandedRec === rec.id ? rec.text : truncateText(rec.text)}
                        </motion.div>
                      </div>
                      <span className={`text-6xl bg-gradient-to-r ${rec.gradient} bg-clip-text text-transparent font-serif opacity-60`}>"</span>
                    </div>
                    
                    {rec.text.length > 200 && (
                      <motion.button
                        onClick={() => toggleExpand(rec.id)}
                        className={`mt-6 flex items-center space-x-2 bg-gradient-to-r ${rec.gradient} bg-clip-text text-transparent hover:opacity-80 transition-all duration-300 font-semibold group/btn`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>{expandedRec === rec.id ? 'Show Less' : 'Read More'}</span>
                        <motion.div
                          animate={{ rotate: expandedRec === rec.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform duration-200" />
                        </motion.div>
                      </motion.button>
                    )}
                  </motion.div>
                </div>

                {/* Footer with enhanced styling */}
                <div className="bg-gradient-to-r from-slate-50/80 to-blue-50/80 backdrop-blur-sm px-8 py-5 border-t border-slate-100/50">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.div
                          key={star}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + star * 0.05 }}
                          whileHover={{ scale: 1.2 }}
                        >
                          <Star className="w-5 h-5 text-amber-400 fill-current hover:text-amber-500 transition-colors duration-200" />
                        </motion.div>
                      ))}
                    </div>
                    <div className="text-sm font-medium text-slate-600">
                      Professional Recommendation
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl" />
            
            <div className="relative z-10 text-center">
              <motion.h3 
                className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Experience Excellence?
              </motion.h3>
              
              <motion.p 
                className="text-slate-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join the growing list of satisfied clients who have experienced transformative 
                training and coaching. Let's discuss how I can help your organization achieve its goals.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.button 
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.button>
                
                <motion.button 
                  className="border-2 border-indigo-600 text-indigo-600 px-10 py-4 rounded-2xl font-semibold hover:bg-indigo-50 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All 20 Recommendations
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Footer */}
      <motion.footer 
        className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 text-white py-12 mt-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            className="flex items-center justify-center space-x-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl">Professional Recommendations Showcase</span>
          </motion.div>
          <motion.p 
            className="text-slate-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Showcasing excellence in training, coaching, and professional development
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;