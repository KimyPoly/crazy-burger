import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";


export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()


  //comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    setInputValue("")
    navigate(`order/${inputValue}`)
  }
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  //affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous </h1>
    <h2>Connectez-vous !</h2>
      <input value={inputValue}
              onChange={handleChange}
              type="text"
              placeholder="Entrez votre prénom"
              required/>
      <button>Aller à la page de commande</button>
    </form>
  )
}
