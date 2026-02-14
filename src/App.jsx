import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";

export default function App() {
  return (

    <>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Header />
          <HeroSection />
          <About />
        </div>
      </div>
    </>
  )
}




