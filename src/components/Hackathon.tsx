import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Calendar, Trophy, Users, Sparkles, Clock, Award, Zap, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HackathonProps {
  onNavigateToInvision: () => void;
}

export function Hackathon({ onNavigateToInvision }: HackathonProps) {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300">Featured Event</span>
          </motion.div>
          
          <motion.h2 
            className="text-6xl md:text-8xl mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            invISion 2025
          </motion.h2>
          <p className="text-2xl md:text-3xl text-slate-300 max-w-3xl mx-auto">
            The Ultimate Hackathon Experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000" />
          
          <div className="relative bg-slate-900/90 backdrop-blur-2xl rounded-3xl overflow-hidden border border-slate-800/50">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left side - Image (2 cols) */}
              <div className="md:col-span-2 relative h-80 md:h-auto overflow-hidden">
                <ImageWithFallback
                  src="src/assets/WhatsApp Image 2025-10-26 at 14.44.39_8b1b7bf8.jpg"
                  alt="invISion Hackathon"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
                
                {/* Floating badge on image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute top-6 left-6"
                >
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 backdrop-blur-sm shadow-xl">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-white" />
                      <span className="text-white">Prize Pool: 15000</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Content (3 cols) */}
              <div className="md:col-span-3 p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Zap className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-3xl md:text-4xl text-white">
                      Transform Ideas into Reality
                    </h3>
                  </div>
                  
                  <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                    Join us for 12 hours of innovation, coding, and creativity. Build solutions that matter, 
                    collaborate with brilliant minds, and compete for amazing prizes and opportunities.
                  </p>

                  {/* Stats Grid with enhanced design */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Calendar, label: "Date", value: "31 OCT 2025", color: "from-blue-500 to-cyan-500" },
                      { icon: Clock, label: "Duration", value: "12 Hours", color: "from-purple-500 to-pink-500" },
                      { icon: Users, label: "Teams", value: "2-4 Members", color: "from-pink-500 to-rose-500" },
                      { icon: Trophy, label: "Prize Pool", value: "15000", color: "from-yellow-500 to-orange-500" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative"
                      >
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300`} />
                        <div className="relative flex items-start gap-3 p-4 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
                          <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-slate-400 mb-1">{item.label}</div>
                            <div className="text-white">{item.value}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Benefits list with enhanced design */}
                  <div className="mb-8">
                    <h4 className="text-xl mb-4 text-white flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-400" />
                      What You'll Get
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Mentorship from industry experts",
                        "Exclusive swag and goodies",
                        "Networking opportunities",
                        "Certificates for all participants"
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-blue-500/30 transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                          <span className="text-slate-300">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button
                        size="lg"
                        onClick={onNavigateToInvision}
                        className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 px-8 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 h-14 rounded-xl"
                      >
                        <span className="flex items-center gap-2">
                          View Full Details
                          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </span>
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button
                        size="lg"
                        onClick={() => window.open('https://forms.gle/kEdXuAikTwZfEYjM9', '_blank')}
                        className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 px-8 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 h-14 rounded-xl"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative flex items-center gap-2">
                          Register Now
                          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </span>
                      </Button>
                    </motion.div>
                  </div>

                  <p className="text-sm text-slate-400 mt-6 text-center">
                    Organized by CodeIS Club, ISE Department
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}