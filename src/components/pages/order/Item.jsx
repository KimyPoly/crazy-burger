import styled from 'styled-components'
import { theme } from "../../../theme"
import PrimaryButton from '../../reusable-ui/PrimaryButton';

export default function Item({ id, imageSource, title, price, quantity, isAvailable, isAdvertised }) {


  return (
    <ItemStyled>
      <img src={imageSource} alt={title} />

      <div className='item-description'>
        <h3>{title}</h3>

        <div className='price-plus-button'>
          <p>{price.toFixed(2)} €</p>
          <PrimaryButton className="button-order" label={'Ajouter'}/>
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
  padding: 20px 20px 10px 20px;

    .item-description {
      height: 105px;
      width: 200px;

      h3 {
        font-family: "Amatic SC", cursive;
        font-size: ${theme.fonts.P4};
        margin: 0;
        text-align: left;
      }

      .price-plus-button {
      display: flex;
      justify-content: space-between;

      p{
        color: ${theme.colors.primary};
      }

      .button-order {
         width: 50%;
      }
    }
    }
    img {
      height: 145px;
      width: 200px;
      padding: 50px 20px 20px 20px;
    }

 `;
