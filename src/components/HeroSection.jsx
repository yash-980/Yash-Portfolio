import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen mx-auto overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col"
            style={{
                backgroundImage: "url('./herobg.png')",
            }}
        >

            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                    <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <h1 className={`${styles.heroHeadText} text-white leading-tight text-3xl sm:text-4xl md:text-5xl`}>
                        Hi, I’m <span className="text-[#915EFF]">Yash</span>
                    </h1>

                    <p className={`${styles.heroSubText} mt-4 text-gray-300 max-w-2xl text-base sm:text-lg md:text-xl`}>
                        I build immersive 3D visuals, beautiful user interfaces,
                        full-stack websites, and modern web applications.
                    </p>
                </motion.div>


                <div className="absolute inset-0 top-[150px] w-full h-full pointer-events-none z-0 ">
                    <ComputersCanvas />
                </div>
                
            </div>

             <div className="absolute bottom-5 w-full flex justify-center items-center z-20">
        <a href="#about" className="pointer-events-auto">
          <div className="w-[28px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
        </section>
    )
}

export default HeroSection
