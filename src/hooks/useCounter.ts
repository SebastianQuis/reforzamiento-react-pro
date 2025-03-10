import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

// const MAXIMUN_COUNT = 10;

interface Props {
  maxCount: number;
}

export const useCounter = ({ maxCount = 10 }: Props) => {
  const [counter, setCounter] = useState(2);
  // manera ideal para hacer referencia y animaciones.
  const elementToAnimate = useRef<any>(null);
  const tl = useRef(gsap.timeline());

  const handleCounter = () => {
    if (counter < 10) {
      console.log("se sumó 1");
      setCounter((prev) => prev + 1);
      return;
    }
  };

  useLayoutEffect(() => {
    if (!tl.current) return;

    tl.current
      .to(elementToAnimate.current, { y: -10, duration: 0.5, ease: "ease.out" })
      .to(elementToAnimate.current, { y: 0, duration: 0.5, ease: "bounce-out" })
      .pause();
  }, []);

  useEffect(() => {
    if (counter < maxCount) return;

    tl.current.play();
  }, [counter]);

  return {
    elementToAnimate,
    counter,
    handleCounter,
  };
};
