import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from '../../../theme'
import { IoIosArrowForward } from "react-icons/io"
import { BsPersonCircle } from "react-icons/bs"
import TextInput from "../../reusable-ui/TextInput"
import PrimaryButton from '../../reusable-ui/PrimaryButton'

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
    <LoginFormStyle action="submit" onSubmit={handleSubmit}>

      <h2>Bienvenue chez nous !</h2>
      <h3>Connectez-vous</h3>

      <TextInput
        value={inputValue}
        onChange={handleChange}
        Icon={<BsPersonCircle />}
        placeholder={"Entrez votre prénom"}
        required
      />

      <PrimaryButton label={"Accédez à votre espace"} Icon={<IoIosArrowForward/>}/>

    </LoginFormStyle>
  )
}


const LoginFormStyle = styled.form`
  width: 464px;
  height: 438.31px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size : ${theme.fonts.P5};
    border-bottom: 2px solid ${theme.colors.primary};
    padding-bottom: ${theme.spacing.md};
    margin-top: 0;
  }
  h3 {
    font-size : ${theme.fonts.P3};
    margin-top: 0;
  }
  svg {
    font-size: ${theme.fonts.P0};
    margin-right: ${theme.spacing.xs};
    padding-left: ${theme.spacing.xs};
  }
`


// Ajout style composant, 4 manieres :
// - inline style ex: <h1 style={{color: "red", backgroundColor: "blue"}}> Bienvenue </h1>

// - object style : const titreH1style = {color: "red", backgroundColor: "blue"}
//                  <h1 style = {titreH1style} >Bienvenue </h1>
// - module css (avec className): Créer un fichier(a coté du composant conserner) et definir des regle css a l'interieur.
//                                Faire un import dans le composant

// - global style (index.css)
