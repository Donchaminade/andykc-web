import React from 'react';
    import { motion } from 'framer-motion';

    const AnimatedBackground = () => {
      return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-[-20%] left-[-10%] w-96 h-96 md:w-[500px] md:h-[500px] bg-primary/5 rounded-full filter blur-3xl opacity-40 md:opacity-30"
            animate={{ 
              x: [0, 150, 0, -150, 0], 
              y: [0, -100, 100, -100, 0],
              scale: [1, 1.3, 1, 1.2, 1],
              rotate: [0, 45, 0, -45, 0],
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-[-20%] right-[-10%] w-80 h-80 md:w-[450px] md:h-[450px] bg-secondary/5 rounded-full filter blur-3xl opacity-30 md:opacity-20"
            animate={{ 
              x: [0, -120, 0, 120, 0], 
              y: [0, 80, -80, 80, 0],
              scale: [1, 1.1, 0.9, 1.2, 1],
              rotate: [0, -60, 0, 60, 0]
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
           <motion.div 
            className="absolute top-[30%] right-[5%] w-60 h-60 md:w-[300px] md:h-[300px] bg-accent/5 rounded-full filter blur-2xl opacity-20 md:opacity-15"
            animate={{ 
              x: [0, 50, -50, 50, 0], 
              y: [0, -30, 30, -30, 0],
              scale: [1, 1.1, 0.9, 1.05, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
           <motion.div 
            className="absolute bottom-[10%] left-[5%] w-72 h-72 md:w-[350px] md:h-[350px] bg-primary/3 rounded-full filter blur-3xl opacity-10 md:opacity-10"
            animate={{ 
              x: [0, -70, 70, -70, 0], 
              y: [0, 40, -40, 40, 0],
              rotate: [0, 30, -30, 30, 0]
            }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />
        </div>
      );
    };

    export default AnimatedBackground;