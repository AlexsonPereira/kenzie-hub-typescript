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

      a {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        border: none;
        color: var(--color-white);
        cursor: pointer;
        font-weight: 500;
        background-color: var(--color-grey-1);
        margin-bottom: 20px;
        transition: 1s;
        text-decoration: none;
        text-align: center;

        :hover {
          filter: brightness(50%);
        }
      }
    }
  }
`
