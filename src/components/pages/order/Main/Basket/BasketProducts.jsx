import styled from 'styled-components'
import BasketCard from './BasketCard'

export default function BasketProducts({basket}) {
  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <BasketCard className='basket-card' key={basketProduct.id} {...basketProduct}/>
      ))}
    </BasketProductsStyled>
  )
}
const BasketProductsStyled = styled.div`

  height: 70vh;
  width: 100%;
  flex: 1;
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  position: relative;


  .basket-card {
    margin: 10px 16px;
    box-sizing: border-box;
  }
`
