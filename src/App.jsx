import './App.css'
import HookCOunterTwo from './components/state-hook/HookCOunterTwo'
import StateArray from './components/state-hook/StateArray'
import StateObject from './components/state-hook/StateObject'
import UseStateHook from './components/state-hook/UseStateHook'

const App = () => {
  return (
    <div className='app'>
      {/* <UseStateHook /> */}
      {/* <HookCOunterTwo /> */}
      {/* <StateObject /> */}
      <StateArray />
    </div>
  )
}

export default App  