import styled from 'styled-components'
import { breakpoints, primary } from '../../theme'
import { Button } from '../../components/Button'
import { StyledButton } from '../../components/Button/styles'

export const InputsContainer = styled.div`
  border: 2px solid ${primary};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const MainInfo = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > ${StyledButton} {
    margin-top: 1rem;

    @media (max-width: ${breakpoints.mobile}){
      width: 100%;
    }
  }
`