import './App.css'
import MouseContainer from './components/effect-hook/MouseContainer'
import UseEffectBasics from './components/effect-hook/UseEffectBasics'
import UseEffectCleanup from './components/effect-hook/UseEffectCleanup'
import UseEffectDependecy from './components/effect-hook/UseEffectDependecy'
import UseEffectIncorrectDependency from './components/effect-hook/UseEffectIncorrectDependency'
import UseEffectRunOnlyOnce from './components/effect-hook/UseEffectRunOnlyOnce'
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
      {/* <StateArray /> */}

      {/* UseEffect */}
      {/* <UseEffectBasics /> */}
      {/* <UseEffectDependecy /> */}
      {/* <UseEffectRunOnlyOnce /> */}
      {/* <UseEffectCleanup /> */}
      {/* <MouseContainer /> */}
      <UseEffectIncorrectDependency />
    </div>
  )
}

export default App  