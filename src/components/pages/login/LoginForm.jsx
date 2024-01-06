import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";


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


// Ajout style composant, 4 manieres :
// - inline style ex: <h1 style={{color: "red", backgroundColor: "blue"}}> Bienvenue </h1>

// - object style : const titreH1style = {color: "red", backgroundColor: "blue"}
//                  <h1 style = {titreH1style} >Bienvenue </h1>
// - module css (avec className): Créer un fichier(a coté du composant conserner) et definir des regle css a l'interieur.
//                                Faire un import dans le composant

// - global style (index.css)
