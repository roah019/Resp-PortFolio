import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function  About({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}} 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img
        initial={{
            x:-200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0}}
        viewport={{ once: true}}
        src= "https://scontent.fcok6-1.fna.fbcdn.net/v/t39.30808-6/279625320_4744358055668844_4205553997632156064_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=5gLH8DbVInMAX9R2Ppb&_nc_ht=scontent.fcok6-1.fna&oh=00_AfDjn5nGO1HcWDy8q03nwguVcxWZp6uAayONvMO5YtJYkQ&oe=6409B99A"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 j-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
         />

         <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'> Here is a {" "}<span className='underline decoration-[#F7AB0A]/50'>little{""}</span> background</h4>
            <p className='text-sm'>
                I'm Rohith. Known as Roah throughout the gaming community. I've worked as Software Engineer in HCLTech and have experince of 1 year. I like to tackle the real world problems which helps me with my growth in the technology. I like to share my knowledge to others and also learn new things from others. I like to grow along with technological developments that is being developed day by day. I'm more kinda Coder by day and gamer by night. I play competive games like Valorant, Rainbow Six Siege, Apex Legends etc. 
            </p>
        </div> 
    </motion.div>
  );
};