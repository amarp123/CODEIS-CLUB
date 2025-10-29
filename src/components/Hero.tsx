import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Code2, Sparkles, ArrowDown, Zap, Calendar } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import codeIsLogo from "figma:asset/9038739184815e0511fbda87b92584e99bc965ba.png";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = "where codeIs alive";
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 25,
          y: (e.clientY - rect.top - rect.height / 2) / 25,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient - darker */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"
        animate={{
          background: [
            "linear-gradient(to bottom right, #020617, #0f172a, #000000)",
            "linear-gradient(to bottom right, #0f172a, #020617, #000000)",
            "linear-gradient(to bottom right, #020617, #0f172a, #000000)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Grid pattern - subtler */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a10_1px,transparent_1px),linear-gradient(to_bottom,#0f172a10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Enhanced particles with different sizes and speeds */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              background: i % 3 === 0 
                ? "rgb(59, 130, 246)" 
                : i % 3 === 1 
                ? "rgb(139, 92, 246)" 
                : "rgb(168, 85, 247)",
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes - darker theme */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border border-blue-500/10"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: i % 2 === 0 ? "50%" : "20%",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 90, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Logo with 3D effect - adjusted size and placement */}
        <motion.div
          initial={{ scale: 0, rotateY: 180, opacity: 0 }}
          animate={{ scale: 1, rotateY: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mb-12 perspective-1000"
          style={{
            transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
          }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-blue-600/80 p-[2px] shadow-2xl shadow-blue-500/30"
            animate={{
              boxShadow: [
                "0 20px 60px rgba(59, 130, 246, 0.3)",
                "0 20px 60px rgba(139, 92, 246, 0.3)",
                "0 20px 60px rgba(59, 130, 246, 0.3)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="flex items-center justify-center w-full h-full bg-black rounded-2xl relative overflow-hidden p-5">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <img 
                src={codeIsLogo} 
                alt="CodeIS Logo" 
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Main heading with stagger animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h1 className="text-7xl md:text-9xl mb-6 relative inline-block">
            {["C", "o", "d", "e", "I", "S"].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 50, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                className="inline-block bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Typewriter with enhanced effects */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8 relative"
        >
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-3xl md:text-4xl text-blue-300 mb-2 min-h-[3rem] relative flex items-center justify-center gap-2">
            <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-purple-400"
            >
              |
            </motion.span>
          </p>
        </motion.div>

        {/* Tagline with gradient reveal */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Empowering students to <span className="text-blue-400 font-semibold">code</span>, 
          <span className="text-purple-400 font-semibold"> innovate</span>, and 
          <span className="text-pink-400 font-semibold"> lead</span> through technology
        </motion.p>

        {/* CTA Button with magnetic effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 px-10 py-7 text-lg shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-purple-500/60 transition-all duration-300"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Join the Club
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              </span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="group px-10 py-7 text-lg border-2 border-blue-500/50 bg-slate-950/50 backdrop-blur-sm text-blue-300 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Explore Events
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator with enhanced animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-slate-400">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center relative overflow-hidden">
              <motion.div
                className="w-1.5 h-3 bg-blue-400 rounded-full mt-2"
                animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <ArrowDown className="w-4 h-4 text-blue-400" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated gradient orbs with enhanced effects */}
      <motion.div
        className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
}