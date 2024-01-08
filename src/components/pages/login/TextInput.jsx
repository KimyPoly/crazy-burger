import PropTypes from "prop-types"
import styled from "styled-components"
import { theme } from '../../../theme'

export default function TextInput({value, onChange, Icon, ...restProps}) {
  return (
    <InputStyled>
      {Icon}
      <input
        value={value}
        onChange={onChange}
        type="text"
        {...restProps}
      />
    </ InputStyled>
  )
}
TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  Icon: PropTypes.element,
};

const InputStyled = styled.div`

  display: flex;
  align-items: center;
  border: 1px solid white;
  background-color: ${theme.colors.background_white};
  width: 80%;
  height: 40px;
  border-radius: ${theme.borderRadius.round};
  margin-bottom: 10px;
  svg {
    color: ${theme.colors.greyMedium};
    font-size: ${theme.fonts.P0};
    margin-right: ${theme.spacing.xs};
    padding-left: ${theme.spacing.xs};
  }

  input {
  border: none;
  background-color: ${theme.colors.background_white};
  color: ${theme.colors.greyDark};
  }
`
