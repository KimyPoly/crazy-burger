import styled from 'styled-components'

export default function BasketProducts() {
  return (
    <BasketProductsStyled>
      BasketProducts
    </BasketProductsStyled>
  )
}
const BasketProductsStyled = styled.div`
  background: pink;
  color: black;
  text-align: center;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
