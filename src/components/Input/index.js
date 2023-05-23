import { Container, Label, StyledInput } from "./styles"

export const Input = ({ name, label, ...props }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>

      <StyledInput name={name} {...props} />
    </Container>
  )
}