import styled from 'styled-components'
import { whitePrimary } from '../../theme'

// CSS in JS
export const HeaderContainer = styled.header`
  background-color: ${whitePrimary};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
`

export const Title = styled.span`
  font-weight: 600;
  font-size: 22px;
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: auto;
`