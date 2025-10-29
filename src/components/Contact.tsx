import { motion } from "motion/react";
import { Mail, Instagram, Linkedin, Send, MessageCircle, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-black via-blue-950/20 to-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

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
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300">Let's Connect</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info with enhanced cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:codeisclub@gmail.com"
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="block relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 group-hover:border-slate-700/50 transition-all duration-300">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-400 mb-1">Email</div>
                      <div className="text-white">codeisclub@gmail.com</div>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://instagram.com/codeis_club"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="block relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 group-hover:border-slate-700/50 transition-all duration-300">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
                      <Instagram className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-400 mb-1">Instagram</div>
                      <div className="text-white">@codeis_club</div>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/company/codeis-club-ise"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="block relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 group-hover:border-slate-700/50 transition-all duration-300">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                      <Linkedin className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-400 mb-1">LinkedIn</div>
                      <div className="text-white">CodeIS Club ISE</div>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Office hours card with enhanced design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-50 blur-lg" />
              <div className="relative p-8 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl text-white">Office Hours</h4>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    ISE Department, Main Campus
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-xl" />
            
            <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-3 text-slate-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl h-12 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-3 text-slate-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl h-12 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-3 text-slate-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what you're thinking..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl resize-none transition-all"
                    required
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 h-14 rounded-xl"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}