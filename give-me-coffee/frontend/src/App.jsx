import { useEffect, useState } from 'react'
import { RandomCoffee } from "./coffee/RandomCoffee"
import loader from './assets/loader.gif'
import './App.css'

function App() {
  const [meData, setMeData] = useState()

  useEffect(() => {
    fetch(`http://localhost:7030/user/me`)
      .then(res => res.json())
      .then(setMeData)
  }, [])
  console.log({meData})
  if (!meData) {
    return <img src={loader} className="loader" />
  }

  return (
    <div>
      Bienvenue {meData.user.firstName} {meData.user.lastName}, nous avons selectionné pour toi ajourd'hui:
      <RandomCoffee />
    </div>
  )
}

export default App
