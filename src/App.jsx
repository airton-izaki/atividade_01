import { useState } from 'react'
import FirstComponents from './components/FirstComponents'
import './App.css'
import SecondComponents from './components/SecondComponents'
import ThirdComponents from './components/ThirdComponents'
import ListCar from './components/ListCar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Págnia app.jsx</h2>
      <FirstComponents/>
      <SecondComponents/>
      <ThirdComponents/>
      <ListCar/>
    </div>
  )
}

export default App
