import styled from 'styled-components'

export default function ImagePreview() {
  return (
    <ImagePreviewStyled>
      Ajouter une image
    </ImagePreviewStyled>
  )
}

const ImagePreviewStyled = styled.div`
  border: 1px solid white;
  width: 150px;
  height: 150px;
  margin: auto;
  text-align: center;

`;
