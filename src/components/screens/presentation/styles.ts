import { css, styled } from 'styled-components';

const prefix = css`
  font-size: 48px;
  font-weight: 600;
  font-style: normal;
  line-height: 1.2em;
  text-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  text-align: center;
  transition: .2s;
`;

export const Container = styled.section`
  width: 100%;

  padding: 6.25rem 0 0 0;

  background-image: url(background.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #101010;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    ${prefix};
    color: #FFFFFF;
    margin-top: 20px;
  }

  p {
    ${prefix};
    color: var(--primary);
  }

  span {
    position: relative;

    display: flex;

    justify-content: center;
    align-items: center;

    margin: 60px 0;
    width: 100%;
  }

  .button {
    position: absolute;

    color: #FFFFFF;

    width: 350px;
    height: 70px;

    font-size: 19px;
    font-weight: 700;

    background-color: #F55D00;

    border-radius: 50px;

    box-shadow: 0px 0px 20px 0px #F55D00;
    /* padding: 23px 150px 23px 150px; */

    transition: .2s;

    cursor: pointer;

    :hover {
      width: 400px;
      height: 80px;
  
      font-size: 21px;
    }
  }

  /* Tablet */
  @media (max-width: 900px) {
    img {
      width: auto;
      height: calc(100vh / 9.2);
    }

    h2 {
      font-size: 30px;
    }
    p {
      font-size: 30px;
    }

    .button {
      width: 300px;
      height: 65px;

      font-size: 17px;
    }

    .button:hover {
      width: 350px;
      height: 70px;
    
      font-size: 19px;
    }
  }

  /* Mobile */
  @media (max-width: 700px) {
    img {
      width: auto;
      height: calc(100vh / 16);
    }

    h2 {
      font-size: 25px;
    }
    p {
      font-size: 25px;
    }

    .presentation-center {
      display: inherit;
      padding: 1rem 0;
    }

    .button {
      padding: 15px 50px 15px 50px;
    }

    .button {
      width: 250px;
      height: 60px;

      font-size: 15px;
    }

    .button:hover {
      width: 300px;
      height: 65px;
    
      font-size: 17px;
    }
  }

`;
