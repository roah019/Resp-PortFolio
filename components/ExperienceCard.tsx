import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
        <motion.img
        initial={{
            y:-100,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true}} 
        className='w-32 h-32 rounded-full xl:w-[200px] object-cover object-center' 
        src="https://images.livemint.com/img/2022/09/27/1600x900/hcl-tech_1664247173484_1664247191811_1664247191811.JPG" alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Software Engineer</h4>
            <p className='font-bold text-2xl mt-1'>HCLTech</p>
            <div className='flex space-x-2 my-2'>
                <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="" />
                <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="" />
                <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="" />
                {/* tech stack */}
                {/* tech stack */}
                {/* tech stack */}
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
    </article>
  )
}