import { Author, Container, Description, Title } from './styles'
import { formatDate } from '../../utils/date'
import { Image } from '../Image'

export const Post = ({ title, description, author, createdAt, avatar }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Description>
        {description}
      </Description>

      <Author>
        <Image src={avatar} alt={`avatar-${author}`} />

        Por: <strong>{author}</strong> em {formatDate(createdAt)}
      </Author>
    </Container>
  )
}