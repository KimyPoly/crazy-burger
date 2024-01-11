import styled from 'styled-components'

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
  border: 1px solid black;
  height: 330px;
  width: 240px;
  color: black;
    img {
      height: 145px;
      width: 200px;
    }
    .price-plus-button {
      display: flex;
    }
 `;
