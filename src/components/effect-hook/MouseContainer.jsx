import React, { useState } from 'react'
import UseEffectCleanup from './UseEffectCleanup'

const MouseContainer = () => {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() =>  setDisplay(!display) }>Display</button>
      {
        display && <UseEffectCleanup />
      }
    </div>
  )
}

export default MouseContainer