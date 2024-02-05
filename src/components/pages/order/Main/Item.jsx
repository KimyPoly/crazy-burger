import styled from 'styled-components'
import { theme } from "../../../../theme"
import PrimaryButton from '../../../reusable-ui/PrimaryButton';

export default function Item({ imageSource, title, price, item, onAddToBasket  }) {


  return (
    <ItemStyled>
      <img src={imageSource} alt={title} />

      <div className='item-description'>
        <h3>{title}</h3>
        <div className='price-plus-button'>

          <div className='left-description'>
            <p>{price.toFixed(2)} €</p>
          </div>

         <div className='right-description'>
           <PrimaryButton className="button-order" label={'Ajouter'} onClick={() => onAddToBasket(item)}/>
         </ div>

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
      display: grid;
      grid-template-columns: 1fr 3fr;


      .left-description{
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.P1};

        .button-order {
          font-size: ${theme.fonts.XS};
          cursor: pointer;
          padding: 12px;
        }
      }

    }
    }
    img {
      height: 145px;
      width: 200px;
      padding: 50px 20px 20px 20px;
      object-fit: contain;
    }

 `;
