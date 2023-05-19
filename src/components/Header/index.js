import { Link } from "react-router-dom"
import { HeaderContainer, LinksContainer, Title } from './styles'
import { Button } from "../Button"

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        React Blog
      </Title>

      <LinksContainer>
        <Link to='/'>
          <Button>
            Home
          </Button>
        </Link>

        <Link to='/post/create'>
          <Button>
            Criar Post
          </Button>
        </Link>
      </LinksContainer>
    </HeaderContainer>
  )
}