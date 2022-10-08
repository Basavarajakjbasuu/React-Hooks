import React, { useEffect } from 'react'

const UseEffectDependecy = () => {
  const [counter, setCounter] = React.useState(0)
  const [name, setName] = React.useState('')

  useEffect(() => {
    console.log('useEffect is running');
    document.title = `Title Changed ${counter} times`
  }, [counter])
  return (
    <div>
      <input type="text" value={name} onChange={ e => {setName(e.target.value)}}/>
      <button onClick={() => setCounter( counter + 1)} >you clicked {counter}  times</button>
    </div>
  )
}

export default UseEffectDependecy