import styled from 'styled-components'

export const LoginPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;

  background-color: var(--color-black);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: var(--color-primary);
    margin-bottom: 20px;
  }

  .passInput {
    position: relative;
    svg {
      position: absolute;
      right: 15px;
      top: 12px;
      cursor: pointer;
    }
  }

  > div {
    background-color: var(--color-grey);
    width: 360px;
    padding: 20px;
    color: var(--color-white);
    border-radius: 4px;

    @media (max-width: 370px) {
      width: 250px;
    }

    > form {
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
        color: red;
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
    }

    > div {
      display: flex;
      flex-direction: column;
      margin-top: 35px;

      p {
        text-align: center;
        color: var(--color-grey-1);
        font-size: 12px;
        margin-bottom: 20px;
      }

      button {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        border: none;
        color: var(--color-white);
        cursor: pointer;
        font-weight: 500;
        background-color: var(--color-grey-1);
        margin-bottom: 20px;
        transition: 1s;

        :hover {
          filter: brightness(50%);
        }
      }
    }
  }
`
