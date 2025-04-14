import React from 'react';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';



const categories = [
    { name: "Transport", icon: "🛣️" },
    { name: "Health Services", icon: "🏥" },
    { name: "Education", icon: "🎓" },
    { name: "Government", icon: "🛂" },
    { name: "Online Services", icon: "🌐" },
    { name: "Lifestyle", icon: "🛒" },
    { name: "Tourism", icon: "🏞️" },
    { name: "Finance", icon: "🏦" },
    { name: "Accommodation", icon: "🏨" },
    { name: "Utilities", icon: "⚡" },
    { name: "Courier", icon: "📦" },
    { name: "Jobs", icon: "💼" },
    { name: "Misc Services", icon: "🛠️" },
  ];


const Banner = () => {
    const handleType = (count) => {
        // console.log(`Word typed: ${count}`);
    };
    
      const handleDone = () => {
        // console.log(`Done after 5 loops!`)
      }
    return (
        <div className="px-6 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold">
                         Welcome to {' '}
                    <span style={{ color: 'green', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['YourSylhet!']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                    </h1>
                    <p className="mt-4 text-lg text-white w-6/12">
                        Your trusted guide to everything in Sylhet – transport, health, tourism, jobs, and more.<span className='text-4xl'>🌿</span>
                    </p>
                </div>

                {/* Animated Bubble Icons */}
                <div className="md:w-1/2 mt-10 md:mt-0 grid grid-cols-3 gap-4 justify-items-center">
                    {categories.slice(0, 9).map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                            className="bg-white rounded-full shadow-md w-16 h-16 flex items-center justify-center text-2xl"
                        >
                            {cat.icon}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;