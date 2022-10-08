import React, { useEffect, useState } from 'react'

const UseEffectCleanup = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePostion = (e) => {
    console.log('Mouse move');
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    console.log('useEffect is calling')
    window.addEventListener('mousemove', logMousePostion)

    return () => {
      console.log('Cleanup function');
      window.removeEventListener('mousemove', logMousePostion) 
    }
    //should be add cleanup function to avoid unwanted behaviour like memory leakage, try to again mounting
  }, [])
  
  return (
    <div>Mouse at X - {x} and Y - {y}</div>
  )
}

export default UseEffectCleanup