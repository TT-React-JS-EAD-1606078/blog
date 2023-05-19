import { Container, Text } from "./styles"

// Falsy

export const Error = ({ message }) => {

  if (!message) {
    return null
  }

  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  )
}