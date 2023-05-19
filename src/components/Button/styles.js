import styled from 'styled-components'
import { primary, whitePrimary } from '../../theme'

export const StyledButton = styled.button`
  outline: none;
  background-color: ${({ secondary }) => secondary ? 'white' : primary};
  color: ${({ secondary }) => secondary ? primary : 'white'};
  border: 2px solid ${primary};
  padding: .5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: filter .2s;

  :hover {
    filter: brightness(95%);
    background-color: ${({ secondary }) => secondary && whitePrimary}
  }

  :active {
    filter: brightness(85%);
  }  
`
