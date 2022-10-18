import styled from 'styled-components'

export const TechContent = styled.div`
  width: 100%;

  > header {
    display: flex;
    justify-content: space-between;

    button {
      background-color: var(--color-grey-3);
      border: none;
      color: var(--color-white);
      padding: 7px 10px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    }
  }

  > ul {
    background-color: var(--color-grey);
    border-radius: 4px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`
