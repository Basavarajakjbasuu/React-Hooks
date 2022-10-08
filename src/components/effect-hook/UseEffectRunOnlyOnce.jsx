import React, { useEffect, useState } from 'react'

// Mouse move
const UseEffectRunOnlyOnce = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const mousePosition = (e) => {
    console.log('mouse move');
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    console.log('useEffect ic called');
    window.addEventListener('mousemove', mousePosition)
  }, []) //Add empty array run only once
  return (
    <div>
      <p>Hooks X -{x} and Y -{y}</p>
    </div>
  )
}

export default UseEffectRunOnlyOnce