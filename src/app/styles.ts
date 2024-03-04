import { styled } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  footer {
    display: inherit;
    justify-content: center;
    align-items: inherit;

    width: 100%;

    height: 70px;
    background-color: var(--primary);

  }
  footer p {
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
  }
`;
