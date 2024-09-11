import { useEffect, useState } from 'react'
import loader from '../assets/loader.gif'

export function RandomCoffee() {
  const [coffeeData, setCoffeeData] = useState()

  useEffect(() => {
    fetch(`http://localhost:7030/coffee/random`)
      .then(res => res.json())
      .then(setCoffeeData)
  }, [])

  if (!coffeeData) {
    return <div><img src={loader} className="loader" /></div>
  }
  const { coffee } = coffeeData

  return (
    <div>
      {coffee.origin} - {coffee.format}
    </div>
  )
}
