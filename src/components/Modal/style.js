import styled from 'styled-components'

export const ModalStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #12121480;

  > div {
    width: 300px;

    background-color: var(--color-grey-3);

    > div {
      display: flex;
      align-content: center;
      justify-content: space-between;
      background-color: var(--color-grey-2);
      padding: 20px;

      > svg {
        cursor: pointer;
        align-self: center;
      }
    }

    > form {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;

      > div {
        display: flex;
        flex-direction: column;

        > label {
          font-size: 12px;
          margin-bottom: 5px;
          color: var(--color-grey-0);
        }
      }
    }
  }
`
