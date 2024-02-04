import styled from 'styled-components'
import BasketCard from './BasketCard'

export default function BasketProducts({basket}) {
  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <BasketCard key={basketProduct.id} {...basketProduct}/>
      ))}
    </BasketProductsStyled>
  )
}
const BasketProductsStyled = styled.div`
  background: pink;
  color: black;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
