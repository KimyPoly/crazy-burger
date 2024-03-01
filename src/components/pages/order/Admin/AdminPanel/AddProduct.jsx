import styled from 'styled-components'
import { getInputTextsConfig } from "./inputTextConfig.jsx"
import TextInput from '../../../../reusable-ui/TextInput.jsx'
import OrderContext from "../../../../../context/OrderContext.jsx";
import { useContext, useState } from 'react';
import ImagePreview from './ImagePreview.jsx';



export default function AddProduct() {
  const {newProduct, setNewProduct } = useContext(OrderContext)
  // const [isSubmitted, setIsSubmitted] = useState(false)
  const inputTexts = getInputTextsConfig(newProduct)


  const handleChange = (event) => {
    const { name, value } = event.target
    setNewProduct({ ...newProduct, [name]: value })
  }



  return (
    <AddProductStyled>
      <ImagePreview/>
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput {...input} key={input.id} onChange={handleChange} version="minimalist" />
        ))}
      </div>
    </AddProductStyled>
  )
}
const AddProductStyled = styled.div`
   display: grid;
   grid-template-columns: 1fr 3fr;

   .input-fields {
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-row-gap: 8px;
    margin-top: 15px;

  }

`;
