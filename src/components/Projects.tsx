// components/Projects.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  { name: 'E-commerce', description: 'I Used Next.js To Make A E-Commerce Website' },
  { name: 'Portfolio', description: 'I Used Next.js To Make A Portfolio-Website' },
  { name: 'Blog', description: 'Blog Website using Blog' },
  { name: 'Calculater', description: 'I Have Used TypeScript or Javascript to make a Calculater.' },
  { name: 'Olx Clone', description: 'OLX clone Using Next.js ' },
  { name: 'ATM', description: 'I Have Use TypeScript or Javascript to make a ATM.' },
  { name: 'Login Or Sign Up Form', description: 'Login or Sign Up Form Where You Can Login And Sign up.' },
  { name: 'Todo App Using ', description: 'Todo App Using Type Script or Javascript' },
  { name: 'Code Studio', description: 'I have used HTML CSS to make a Code Studio'},
  { name: 'Food Website', description: 'I have Used HTML,CSS to create a Food-Website'},
  { name: 'Currency Converter', description: 'I Create Currency Converter using Typescript , JavaScript '},

];

const Projects = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div id='project' ref={ref} className=" py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg text-center hover:bg-blue-200 cursor-pointer transition transform hover:scale-105"
              variants={projectVariants}
            >
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-gray-700 mt-4">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;