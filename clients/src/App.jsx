import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DataJS from './Componets/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   Welcome to The React App 
   <DataJS/>
    </div>
  )
}

export default App
