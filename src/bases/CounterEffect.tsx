import gsap from 'gsap';
import { useEffect, useState } from 'react'

const MAXIMUN_COUNT = 10;

export default function CounterEffect() {
  
    const [counter, setCounter] = useState(2)
  
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
        // hacer referencia al ID, más no al elemento propio
        gsap.to('h2', { y: -10, duration: 0.5, ease: 'ease.out' }).then(() => { 
            gsap.to('h2', { y: 0, duration: 0.5, ease: 'bounce-out' });
        });
        
    }, [counter])
    

    return (
      <>
          <div className="flex flex-col ">
                <h1>Counter effect</h1>
                <h2>{ counter }</h2>
                <button onClick={handleCounter}>
                    +1
                </button>
        </div>
      </>
  )
}
