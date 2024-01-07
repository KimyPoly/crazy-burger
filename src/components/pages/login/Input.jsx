import PropTypes from "prop-types";
import { BsPersonCircle } from "react-icons/bs"

export default function Input({inputValue, handleChange}) {
  return (
    <div className='input-container'>
      <BsPersonCircle />
      <input value={inputValue}
              onChange={handleChange}
              type="text"
              placeholder= "Entrez votre prénom"
              required/>
    </ div>
  )
}
Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
