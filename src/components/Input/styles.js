import styled from 'styled-components';
import { primary, whiteGray } from '../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 12px;
  margin-bottom: .5rem;
  font-weight: 600;
`

export const StyledInput = styled.input`
  outline: none;
  border: 2px solid ${whiteGray};
  border-radius: 8px;
  padding: .5rem;

  :focus {
    border-color: ${primary};
  }

  ::placeholder {
    color: ${whiteGray};
  }
`