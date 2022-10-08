import React, { useEffect, useState } from 'react'

const UseEffectIncorrectDependency = () => {
  const [count, setCount] = useState(10)

  const tick = () => {
    setCount(count - 1)
    if (count === 0) {
        setCount(10)
    }
  }

  // const tick = () => {
	// 	setCount(prevCount =>  prevCount - 1);
	// };

  useEffect(() => {
    const interval = setInterval(tick, 1000)
   
    return () => {
      clearInterval(interval)
    }
  }, [count]) // should pass the state to continue its functanality
  
  return (
    <div>
      <h2>{count}</h2>
    </div>
  )
}

export default UseEffectIncorrectDependency