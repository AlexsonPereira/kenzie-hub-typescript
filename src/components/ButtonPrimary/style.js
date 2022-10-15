import styled from 'styled-components'

export const ButtonPrimary = styled.button`
  height: 40px;
  border-radius: 4px;
  border: none;
  color: var(--color-white);
  cursor: pointer;
  font-weight: 500;
  background-color: var(--color-primary);
  transition: 1s;

  :hover {
    filter: brightness(50%);
  }
`
