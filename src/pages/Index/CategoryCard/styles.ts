import styled, { keyframes, css } from 'styled-components';

interface IContainer {
  selectedItem?: boolean;
}

const hoverCard = keyframes`
  from {
    background: #fff;
  }
  to {
    background: #776FC3;
    width: 490px;
  }
`;

export const Container = styled.div<IContainer>`
  height: 185px;
  width: 440px;

  background: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 120px;
    width: 120px;

    border-radius: 50%;
    margin-right: 55px;

    pointer-events: none;
  }

  :hover {
    cursor: pointer;
    b {
      color: #fff;
    }
    p {
      color: #fff;
    }

    animation: ${hoverCard} 0.5s linear normal forwards;
  }

  :not(:last-child) {
    margin-bottom: 40px;
  }

  b {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 27px;
    color: #473889;
  }

  ${(props) =>
    props.selectedItem &&
    css`
      b {
        color: #fff;
      }
      p {
        color: #fff;
      }

      animation: ${hoverCard} 0.5s linear normal forwards;
    `}
`;
