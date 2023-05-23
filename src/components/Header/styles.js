import styled from 'styled-components'
import { breakpoints, whitePrimary } from '../../theme'

// CSS in JS
export const HeaderContainer = styled.header`
  background-color: ${whitePrimary};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;


  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const Title = styled.span`
  font-weight: 600;
  font-size: 22px;
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: auto;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0;
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0;
    margin-top: 1rem;
  }  
`