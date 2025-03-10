import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react'

const MAXIMUN_COUNT = 10;

export default function CounterEffect() {
  
    const [counter, setCounter] = useState(2);
    // manera ideal para hacer referencia y animaciones.
    const counterElement = useRef<HTMLHeadingElement>(null);
  
    const handleCounter = () => {
        if (counter < 10) {
            console.log("se sumó 1")
            setCounter(prev => prev + 1);
            return;
        }
    }

    useEffect(() => {
        if (counter < MAXIMUN_COUNT) {
            return;
        };

        console.log('Se llegó al valor maximo');

        // hacer referencia con useRef y animar con timeline, es la manera correccta
        const tl = gsap.timeline();
        tl.to(counterElement.current, { y: -10, duration: 0.5, ease: 'ease.out' })
            .to(counterElement.current, { y: 0, duration: 0.5, ease: 'bounce-out' })
        
    }, [counter])
    

    return (
      <>
          <div className="flex flex-col ">
                <h1>Counter effect</h1>
                <h2 ref={counterElement} >{ counter }</h2>
                <button onClick={handleCounter}>
                    +1
                </button>
        </div>
      </>
  )
}
