import styled from 'styled-components'
import BasketCard from './BasketCard'

export default function BasketProducts({basket, handleDeleteBasketProduct}) {

  const handleOnDelete = (id) => {
    alert("Le produit sera supprimé du panier")
    handleDeleteBasketProduct(id)
  }
  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <div className='basket-card' key={basketProduct.id}>
          <BasketCard
            {...basketProduct}
            onDelete={() => handleOnDelete(basketProduct.id)}
          />
        </div>
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
  overflow-y: scroll;
  position: relative;


  .basket-card {
    margin: 10px 16px;
    box-sizing: border-box;
  }
`
