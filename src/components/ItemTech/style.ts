import styled from 'styled-components'

export const LiTech = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 26px;

  border-radius: 4px;

  background-color: var(--color-black-secundary);

  > div {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      color: var(--color-grey-1);
      font-size: 12px;
    }

    svg {
      cursor: pointer;
    }
  }
`
