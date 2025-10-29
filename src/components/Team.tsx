import { motion } from "motion/react";
import { Linkedin, Instagram, Users as UsersIcon, Award } from "lucide-react";
import { Button } from "./ui/button";

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "President",
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=3b82f6&color=fff&size=256",
    linkedin: "#",
    instagram: "#",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    name: "Arjun Patel",
    role: "Vice President",
    image: "https://ui-avatars.com/api/?name=Arjun+Patel&background=8b5cf6&color=fff&size=256",
    linkedin: "#",
    instagram: "#",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    name: "Sneha Reddy",
    role: "Technical Head",
    image: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=ec4899&color=fff&size=256",
    linkedin: "#",
    instagram: "#",
    gradient: "from-pink-600 to-rose-600"
  },
  {
    name: "Rahul Kumar",
    role: "Events Coordinator",
    image: "https://ui-avatars.com/api/?name=Rahul+Kumar&background=06b6d4&color=fff&size=256",
    linkedin: "#",
    instagram: "#",
    gradient: "from-cyan-600 to-blue-600"
  },
  {
    name: "Ananya Singh",
    role: "Creative Head",
    image: "https://ui-avatars.com/api/?name=Ananya+Singh&background=f59e0b&color=fff&size=256",
    linkedin: "#",
    instagram: "#",
    gradient: "from-yellow-600 to-orange-600"
  },
  {
    name: "Vikram Mehta",
    role: "Marketing Lead",
    image: "https://ui-avatars.com/api/?name=Vikram+Mehta&background=10b981&color=fff&size=256",
    linkedin: "#",
    instagram: "#",
    gradient: "from-green-600 to-emerald-600"
  }
];

export function Team() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

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
            <UsersIcon className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300">Leadership</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            The passionate individuals driving CodeIS forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Animated gradient border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />
              
              <div className="relative rounded-3xl overflow-hidden bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 group-hover:border-slate-700/50 transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent`} />
                  
                  {/* Enhanced social icons with glassmorphism */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        size="icon"
                        className="rounded-full bg-blue-600/80 hover:bg-blue-500 backdrop-blur-sm border border-blue-400/30 shadow-2xl shadow-blue-500/50"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        size="icon"
                        className="rounded-full bg-gradient-to-br from-purple-600/80 to-pink-600/80 hover:from-purple-500 hover:to-pink-500 backdrop-blur-sm border border-purple-400/30 shadow-2xl shadow-purple-500/50"
                      >
                        <Instagram className="w-5 h-5" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Role badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${member.gradient} backdrop-blur-sm flex items-center gap-2 shadow-lg`}>
                      <Award className="w-4 h-4 text-white" />
                      <span className="text-sm text-white">{member.role}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center relative">
                  {/* Decorative line */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r ${member.gradient} rounded-full`} />
                  
                  <h3 className="text-2xl mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}