import React from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
    return (
   <Tilt className='xs:w-[250px] w-full '>
        <motion.div 
        variants={fadeIn("right","spring" , 0.5 * index , 0.75)}
        className='w-full green-pink-gradient  p-[1px] rounded-[20px] shadow-card'
        >

<div options={{
    max:45,
    scale:1,
    speed:450
}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]  flex justify-evenly items-center flex-col' >

<img src={icon} alt="Skills Heading" className='w-16 h-16 object-contain' />
<h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
</div>
        </motion.div>
         </Tilt>
    )
}

const About = () => {
    return (
        <>

             <motion.div variants={textVariant()}>
                   <p className={`${styles.sectionSubText} mt-5`}>Introduction</p>
                    <h2 className={styles.sectionHeadText}>Overview.</h2>
                  </motion.div>


            <motion.p variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading[30px]"
            >
                Hi, I’m Yash — a passionate frontend developer who loves building immersive, responsive, and user-friendly web experiences. I specialize in modern JavaScript frameworks like React, and I enjoy bringing designs to life with smooth animations and interactive 3D elements.

                I’m always learning, experimenting with new technologies, and pushing myself to build better, faster, and more scalable web applications. My goal is to create digital products that are not only visually appealing but also intuitive and impactful for real users.
            </motion.p>


            <div className='mt-20 flex flex-nowrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

        </>
    )
}

export default SectionWrapper (About ,"about")
