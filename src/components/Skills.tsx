// components/Skills.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'TypeScript', level: 'Expert' },
  { name: 'React', level: 'Advanced' },
  { name: 'Next.js', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'HTML', level: 'Advanced' },
  { name: 'Sanity', level: 'Intermediate' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'Python', level: 'Advanced' },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="skills" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg text-center hover:bg-blue-100 cursor-pointer transition transform hover:scale-105"
              variants={skillVariants}
            >
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
           
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;