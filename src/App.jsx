import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience"; 
import Intro from "./components/Intro";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  return (

    <>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
             {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

  
        <div className="main-content">
        <Header />
          <HeroSection />
          <About />
          <Experience/>
          <h1>Welcome to My Portfolio</h1>
          </div>
        </div>
      </div>
    </>
  )
}




