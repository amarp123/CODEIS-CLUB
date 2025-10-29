import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Calendar, Clock, Users, Trophy, Award, Sparkles, MapPin, Zap, Target, Rocket, Code, Coffee, Utensils } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function InvisionPage({ onNavigateToDashboard }: { onNavigateToDashboard?: () => void }) {
  const [hoveredSchedule, setHoveredSchedule] = useState<number | null>(null);
  const [announcements] = useState<{id:number; title:string; body:string; created_at:string}[]>([
    { id: 1, title: "Welcome to invISion 2025", body: "Dashboard is now open. Submit your team details and upload via the Google Form.", created_at: new Date().toISOString() },
    { id: 2, title: "Submission Window", body: "Please ensure your PPT/PDF is submitted before the deadline.", created_at: new Date().toISOString() },
  ]);

  const hackathonDetails = {
    title: "invISion 2025",
    subtitle: "The Ultimate Innovation Challenge",
    date: "31 OCT 2025",
    duration: "12 Hours",
    location: "ISE Department, Main Campus",
    status: "upcoming",
    image: "src/assets/WhatsApp Image 2025-10-26 at 14.44.39_8b1b7bf8.jpg",
    prize: "15000",
    teams: "2-4 Members",
    participants: "150+",
    theme: "AI & Sustainability",
    description: "Join us for 12 hours of innovation, coding, and creativity. Build solutions that matter, collaborate with brilliant minds, and compete for amazing prizes and opportunities.",
    tracks: ["AI/ML", "Full Stack", "IoT", "Open Innovation"],
    perks: [
      "Industry mentorship",
      "Exclusive swag & goodies",
      "Networking opportunities",
      "Certificates for all",
      "Workshop sessions",
      "Refreshments & Lunch"
    ],
    schedule: [
      { time: "8:00 AM", event: "Registration & Opening Ceremony", icon: Sparkles, color: "blue" },
      { time: "9:00 AM", event: "Hacking Begins!", icon: Code, color: "purple" },
      { time: "10:30 AM", event: "Morning Refreshments", icon: Coffee, color: "green" },
      { time: "11:30 PM", event: "First Evaluation Round", icon: Award, color: "yellow" },
      { time: ":00 PM", event: "Lunch Break", icon: Utensils, color: "orange" },
      { time: "4:30 PM", event: "Second Evaluation Round", icon: Trophy, color: "pink" },
      { time: "5:00 PM", event: "Evening Refreshments", icon: Coffee, color: "green" },
      { time: "6:00 PM", event: "Top 10 Teams Presentations", icon: Rocket, color: "blue" },
      { time: "7:00 PM", event: "Awards & Closing Ceremony", icon: Trophy, color: "purple" }
    ]
  };

  const colorMap: Record<string, string> = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    green: "from-green-500 to-emerald-500",
    yellow: "from-yellow-500 to-orange-500",
    orange: "from-orange-500 to-red-500",
    pink: "from-pink-500 to-rose-500"
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-20"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
          >
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-blue-300">Official CodeIS Hackathon</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            {hackathonDetails.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-slate-300 mb-8"
          >
            {hackathonDetails.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 px-8 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
              onClick={() => window.open('https://forms.gle/kEdXuAikTwZfEYjM9', '_blank')}
            >
              <span className="flex items-center gap-2">
                Register Now
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </div>

        {/* Main Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />

          <div className="relative bg-slate-950/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800/50">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 md:h-auto overflow-hidden">
                <ImageWithFallback
                  src={hackathonDetails.image}
                  alt={hackathonDetails.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />
              </div>

              {/* Details */}
              <div className="p-8 md:p-12">
                <h2 className="text-3xl mb-6 text-white">Event Details</h2>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20">
                      <Calendar className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Date</div>
                      <div className="text-white">{hackathonDetails.date}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/20">
                      <Clock className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Duration</div>
                      <div className="text-white">{hackathonDetails.duration}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-pink-500/20">
                      <Users className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Team Size</div>
                      <div className="text-white">{hackathonDetails.teams}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-yellow-500/20">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Prize Pool</div>
                      <div className="text-white">{hackathonDetails.prize}</div>
                    </div>
                  </motion.div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-slate-300">{hackathonDetails.location}</span>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {hackathonDetails.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Schedule Section - Enhanced with animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-20"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Event Schedule
          </motion.h2>
          <p className="text-xl text-slate-300">
            A full day of innovation, evaluation, and celebration
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-8">
            {hackathonDetails.schedule.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredSchedule(index)}
                  onHoverEnd={() => setHoveredSchedule(null)}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-black z-10"
                    animate={{
                      scale: hoveredSchedule === index ? 1.5 : 1,
                      boxShadow:
                        hoveredSchedule === index
                          ? "0 0 20px rgba(59, 130, 246, 0.8)"
                          : "0 0 0px rgba(59, 130, 246, 0)",
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content card */}
                  <motion.div
                    className={`flex-1 ml-20 md:ml-0 ${
                      isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    } md:w-5/12`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative group">
                      <motion.div
                        className={`absolute -inset-0.5 bg-gradient-to-r ${
                          colorMap[item.color]
                        } rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300`}
                        animate={{
                          opacity: hoveredSchedule === index ? 0.3 : 0,
                        }}
                      />

                      <div className="relative bg-slate-950/80 backdrop-blur-sm p-6 rounded-xl border border-slate-800/50 group-hover:border-slate-700 transition-colors">
                        <div className="flex items-start gap-4">
                          <motion.div
                            className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${
                              colorMap[item.color]
                            }`}
                            animate={{
                              rotate: hoveredSchedule === index ? 360 : 0,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>

                          <div className="flex-1">
                            <motion.div
                              className="text-sm text-slate-400 mb-1"
                              animate={{
                                x: hoveredSchedule === index ? 5 : 0,
                              }}
                            >
                              {item.time}
                            </motion.div>
                            <motion.h3
                              className="text-lg text-white"
                              animate={{
                                x: hoveredSchedule === index ? 5 : 0,
                              }}
                            >
                              {item.event}
                            </motion.h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Announcements Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-20"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Announcements</h2>
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            onClick={() => onNavigateToDashboard && onNavigateToDashboard()}
          >
            Open Dashboard
          </Button>
        </div>
        <div className="space-y-4">
          {announcements.length === 0 && (
            <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800/50 text-slate-300">
              No announcements yet.
            </div>
          )}
          {announcements.slice(0,4).map((a) => (
            <motion.button
              key={a.id}
              whileHover={{ x: 6 }}
              onClick={() => onNavigateToDashboard && onNavigateToDashboard()}
              className="w-full text-left relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative p-5 rounded-2xl bg-slate-950/80 border border-slate-800/50">
                <div className="text-white font-medium mb-1">{a.title}</div>
                <div className="text-slate-300 text-sm line-clamp-2">{a.body}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tracks Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hackathon Tracks
          </h2>
          <p className="text-xl text-slate-300">
            Choose your domain and build something amazing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hackathonDetails.tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
              <div className="relative bg-slate-950/80 backdrop-blur-sm p-6 rounded-xl border border-slate-800/50 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl text-white">{track}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Perks Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            What You'll Get
          </h2>
          <p className="text-xl text-slate-300">
            More than just a competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathonDetails.perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-6 rounded-xl bg-slate-950/80 backdrop-blur-sm border border-slate-800/50 hover:border-blue-500/30 transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
              <span className="text-slate-300">{perk}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />

          <div className="relative bg-slate-950/80 backdrop-blur-sm p-12 rounded-3xl border border-slate-800/50">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              Ready to Innovate?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Register now and be part of the most exciting hackathon of the year!
            </p>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 px-12 py-6 text-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
              onClick={() => window.open('https://forms.gle/kEdXuAikTwZfEYjM9', '_blank')}
            >
              <span className="flex items-center gap-2">
                Register for invISion 2025
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </span>
            </Button>
            <p className="text-sm text-slate-400 mt-4">
              Limited spots available • First come, first served
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}