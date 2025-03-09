import { useState } from 'react'

interface Props {
    initialValue: number
}

export default function Counter({initialValue}: Props) {
  
    const [counter, setCounter] = useState(initialValue)
  
    const handleCounter = () => {
        setCounter(prev => prev + 1);
    }

    return (
      <>
          <div className="flex flex-col ">
                <h1>Counter {counter}</h1>
                <button onClick={handleCounter}>
                    +1
                </button>
        </div>
      </>
  )
}
