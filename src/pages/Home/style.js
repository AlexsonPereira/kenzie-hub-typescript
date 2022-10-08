import styled from 'styled-components'

export const HomePage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-black);
  color: var(--color-white);

  header {
    border-bottom: 0.5px solid var(--color-grey-3);

    button {
      background-color: var(--color-grey-3);
      border: none;
      color: var(--color-white);
      padding: 7px 15px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .ContentInitial {
    border-bottom: 0.5px solid var(--color-grey-3);

    > div {
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 40px 0;

        @media (max-width: 320px) {
          flex-direction: column;
          justify-content: normal;
          align-items: normal;
          gap: 10px;
        }

        p {
          color: var(--color-grey-1);
          font-size: 12px;
        }
      }
    }
  }

  .DevelopContent {
    div {
      div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 40px;

        @media (max-width: 320px) {
          display: none;
        }
      }
    }
  }

  .container {
    width: 70%;
    margin: 0 auto;

    @media (max-width: 320px) {
      width: 90%;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
`
