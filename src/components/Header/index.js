import { Link } from "react-router-dom"
import { HeaderContainer, Title } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        React Blog
      </Title>

      <Link to='/'>
        Home
      </Link>

      <Link to='/post/create'>
        Criar Post
      </Link>
    </HeaderContainer>
  )
}