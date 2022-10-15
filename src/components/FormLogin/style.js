import styled from 'styled-components'

export const LoginFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    text-align: center;
  }

  p {
    color: var(--color-primary);
    font-size: 12px;
    margin-top: 5px;
  }

  input {
    height: 40px;
    border-radius: 5px;
    padding: 6px 16px;
    outline: none;
    background-color: var(--color-grey-2);
    border: 2px solid white;
    color: var(--color-white);
  }

  label {
    font-size: 12px;
    margin-bottom: 8px;
  }

  button {
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
  }
`
