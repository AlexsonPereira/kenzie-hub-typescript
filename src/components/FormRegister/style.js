import styled from 'styled-components'

export const FormRegisterStyle = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 12px;

    margin-top: 10px;
    margin-bottom: 10px;
  }

  input {
    height: 40px;
    border-radius: 5px;
    padding: 6px 16px;
    outline: none;
    background-color: var(--color-grey-2);
    color: var(--color-white);
    border: none;
  }

  button {
    height: 40px;
    border-radius: 4px;
    border: none;
    color: var(--color-white);
    cursor: pointer;
    font-weight: 500;
    background-color: var(--color-primary-disable);
    transition: 1s;

    :hover {
      filter: brightness(50%);
    }
  }

  p {
    color: var(--color-primary);
    font-size: 12px;
    margin-top: 5px;
  }
`
