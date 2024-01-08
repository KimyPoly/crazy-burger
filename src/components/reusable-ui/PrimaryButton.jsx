import PropTypes from "prop-types"
import styled from "styled-components"
import { theme } from '/Users/kim/crazy-burger/src/theme'

export default function PrimaryButton({label, Icon}) {
  return (
    <PrimaryButtonStyled >
    <span> {label} </span>
    {Icon && Icon}
    </PrimaryButtonStyled >
  )
}
PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.element,
};

const PrimaryButtonStyled = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 40px;
  background-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.round};
  font-family: "Open Sans";
  font-size: ${theme.fonts.XS};
  color: ${theme.colors.white};


  .button:hover {
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }
`
