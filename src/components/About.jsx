import React from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const About = () => {
    return (
        <>

            <motion.div varients={textVariant()}>
                <p className={styles.sectionSubText}>Intriduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>


            <motion.p varients={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading[30px]"
            >
                Hi, I’m Yash — a passionate frontend developer who loves building immersive, responsive, and user-friendly web experiences. I specialize in modern JavaScript frameworks like React, and I enjoy bringing designs to life with smooth animations and interactive 3D elements.

                I’m always learning, experimenting with new technologies, and pushing myself to build better, faster, and more scalable web applications. My goal is to create digital products that are not only visually appealing but also intuitive and impactful for real users.
            </motion.p>


            <div className='mt-20 gap-10 flex flex-wrap'>
                {services.map((service, index) => (
                    <servicecard key={service-title} index=
                    {index} {...service}/>
                ))}

            </div>

        </>
    )
}

export default About
