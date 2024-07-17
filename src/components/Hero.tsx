
"use client";
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div>
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <br /><br />
        <Image 
          src={"/abz.jpeg"}
          alt='abu bakar'
          height={500}
          width={500}
          className='img rounded-full m-5'
        />
      </motion.div>

      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <br /><br /><br /><br /><br />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-6 text-blue-800 mt-5">
          This is Abu Bakar
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 ml-6 mt-5">
          Abu Bakar bin Zohaib is a dynamic web developer
          known for crafting innovative digital experiences.
          <br />
          With expertise in front-end and back-end
          development, he creates sleek websites and
          <br />
          complex web applications.
        </p>

        <Button variant="outline" className="ml-6 mt-4">
         <a className='text-black' target='_blank' href="https://www.linkedin.com/in/abu-bakar-software-wala-b462b129b/">Hire Me</a>
        </Button>
      </motion.div>
    </div>
  )
}

export default Hero
