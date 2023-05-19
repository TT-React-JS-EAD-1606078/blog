import { StyledButton } from './styles'

export const Button = ({ children, secondary, ...props }) => {
  return (
    <StyledButton secondary={secondary} {...props}>
      {children}
    </StyledButton>
  )
}