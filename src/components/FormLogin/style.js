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

  label {
    font-size: 12px;
    margin-bottom: 8px;
  }
`
