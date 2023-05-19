import styled from 'styled-components'
import { whitePrimary, primary } from '../../theme'

export const Container = styled.div`
  background-color: ${whitePrimary};
  border: 2px solid ${primary};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  font-size: 18px;
  margin-bottom: 1rem;
  text-transform: capitalize;
`

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;

  ::first-letter {
    text-transform: uppercase;
  }
`

export const Author = styled.span`
  font-size: 16px;
  margin-top: 1rem;
`