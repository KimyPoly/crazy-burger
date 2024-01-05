import React, {useState} from 'react'
import { Link } from "react-router-dom";


export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("")

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Bonjour ${inputValue}`)
    setInputValue("")
  }
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <form action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous </h1>
    <h2>Connectez-vous !</h2>
      <input value={inputValue}
              onChange={handleChange}
              type="text"
              placeholder="Entrez votre prénom"
              required/>
      <button><Link to="/order">Aller à la page de commande</Link></button>
      <Link to="/order">Order</Link>
    </form>
  )
}
