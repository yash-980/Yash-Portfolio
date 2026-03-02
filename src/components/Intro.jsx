import { useEffect, useRef } from "react";
import gsap from "gsap";

const Intro = ({ onFinish }) => {
  const introRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onFinish,
    });

    tl.fromTo(
      textRef.current,
      { y: 120 },
      { y: 0, duration: 1.2, ease: "power4.out" }
    )
    .to(introRef.current, {
      y: "-100%",
      duration: 1.3,
      ease: "power4.inOut",
      delay: 0.3,
    });

  }, []);

  return (
    <div ref={introRef} className="intro">
      <div className="intro-mask">
        <h1 ref={textRef} className="intro-text">Yash</h1>
      </div>
    </div>
  );
};

export default Intro;