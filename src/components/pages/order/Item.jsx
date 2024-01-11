import styled from 'styled-components'
import { theme } from "../../../theme"

export default function Item({ id, imageSource, title, price, quantity, isAvailable, isAdvertised }) {
  return (
    <ItemStyled>
      <img src={imageSource} alt={title} />
      <div className='item-description'>
        <h3>{title}</h3>

        <div className='price-plus-button'>
          <p>{price}</p>
          <button>Ajouter</button>
        </div>

      </div>
    </ItemStyled>
  )
}
 const ItemStyled = styled.div`
  border: 1px solid ${theme.colors.background_white};
  height: 330px;
  width: 240px;
  color: black;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
    img {
      height: 145px;
      width: 200px;
    }
    .price-plus-button {
      display: flex;
    }
 `;
