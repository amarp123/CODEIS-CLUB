import { motion, useInView } from "motion/react";
import { Code, Lightbulb, Users, Trophy, Target, Rocket, Heart, Award } from "lucide-react";
import { useState, useRef } from "react";

const features = [
  {
    icon: Code,
    title: "Coding Sessions",
    description: "Regular coding workshops and practice sessions to sharpen your skills",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation Challenges",
    description: "Solve real-world problems through creative tech solutions",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a vibrant community of passionate developers and innovators",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Trophy,
    title: "Hackathons",
    description: "Participate in exciting hackathons and compete with the best",
    color: "from-yellow-500 to-orange-500"
  }
];

const stats = [
  { label: "Active Members", value: "150+", icon: Users },
  { label: "Events Hosted", value: "30+", icon: Award },
  { label: "Projects Built", value: "50+", icon: Rocket },
  { label: "Success Stories", value: "100+", icon: Heart }
];

export function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
          >
            <Target className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300">Who We Are</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            About CodeIS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            The Official Coding Club of the Information Science Department, dedicated to fostering a culture of innovation, learning, and collaboration in technology.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                  <div className="text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Grid with Bento-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
              
              <div className="relative h-full p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800/50 group-hover:border-slate-700/50 transition-all duration-300">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}
                    animate={{
                      rotate: hoveredIndex === index ? [0, -10, 10, -10, 0] : 0,
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Card with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group"
        >
          {/* Animated gradient border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-50 group-hover:opacity-75 blur-lg transition-opacity duration-500" />
          
          <div className="relative p-12 md:p-16 rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-slate-800/50 overflow-hidden">
            {/* Animated background orbs */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full filter blur-3xl opacity-10"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-10"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -30, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, delay: 1 }}
            />
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 mb-8 shadow-xl shadow-blue-500/30"
              >
                <Rocket className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                To create a dynamic ecosystem where students can explore, learn, and excel in coding and technology. 
                We aim to bridge the gap between theoretical knowledge and practical application through hands-on projects, 
                workshops, and collaborative learning experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}