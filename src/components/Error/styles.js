import styled from 'styled-components'
import { error } from '../../theme'

export const Container = styled.div`
  border-radius: 8px;
  padding: 0.5rem 1rem;
  border: 2px solid ${error};
`

export const Text = styled.span`
  font-size: 16px;
  color: ${error};
  font-weight: 600;
`