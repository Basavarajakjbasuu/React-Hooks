import React, { useEffect, useState } from 'react'

const UseEffectBasics = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = `Title ${counter} changed`
  })
  return (
    <div>
      <button onClick={() => setCounter( counter + 1)}>Click {counter} times</button>
    </div>
  )
}

export default UseEffectBasics