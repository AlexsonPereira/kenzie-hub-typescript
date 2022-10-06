import styled, { css } from 'styled-components'

const component = {
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `
}

export const RegisterPage = styled.div`
  width: 100vw;
  background-color: var(--color-black);

  color: var(--color-white);

  ${component.flexCenter}

  > div {
    width: 360px;
    ${component.flexColumn}

    @media (max-width: 390px) {
      width: 260px;
    }

    > div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      margin: 30px 0;

      h2 {
        color: var(--color-primary);
      }

      button {
        background-color: var(--color-grey-3);
        border: none;
        color: var(--color-white);
        padding: 10px 10px;
        border-radius: 4px;
        cursor: pointer;
      }
    }

    > div:nth-child(2) {
      background-color: var(--color-grey);
      padding: 20px;
      margin-bottom: 30px;

      > div {
        text-align: center;

        h3 {
          font-size: 18px;
          margin: 20px 0;
        }

        span {
          color: var(--color-grey-1);
          font-size: 12px;
        }
      }

      > form {
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

        select {
          height: 40px;
          border-radius: 5px;
          padding: 6px 16px;
          outline: none;
          background-color: var(--color-grey-2);
          color: var(--color-white);
          border: none;
          margin-bottom: 20px;
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
      }
    }
  }
`
