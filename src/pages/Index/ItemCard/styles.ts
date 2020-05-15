import styled from 'styled-components';

import { ButtonBase as MuiButtonBase } from '@material-ui/core';

export const Container = styled.div`
  height: 580px;
  width: 400px;

  background: #ffffff;
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  transition: filter 0.6s;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 4px 24px;

  img {
    margin-top: 30px;
    pointer-events: none;

    height: 250px;
    width: 250px;

    object-fit: cover;
  }

  .actionWrapper {
    padding: 8px;
    width: 100%;
  }

  :hover {
    img {
      filter: blur(3px);
    }

    .actionWrapper > div {
      background: #776fc3;
    }
    .actionWrapper b {
      color: #fff;
    }
    .actionWrapper p {
      color: #fff;
    }
    .actionWrapper button {
      background: #574a97;
    }
    .actionWrapper button svg {
      color: #fff;
    }
  }
`;

export const ActionArea = styled.div`
  position: relative;

  width: 100%;
  height: 200px;
  padding: 35px;

  background: #e7ddf2;
  mix-blend-mode: normal;
  border-radius: 32px;

  transition: background 0.6s;

  & > b {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    color: #473889;
  }
  & > p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #988fbb;

    margin-top: 6px;
    max-width: 265px;
  }
  & > .price {
    margin-top: 10px;

    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #413382;
  }
`;

export const CartButton = styled(MuiButtonBase)`
  && {
    position: absolute;
    bottom: 0;
    right: 0;

    margin: 0 15px 15px 0;

    height: 60px;
    width: 60px;
    background: #fff;

    border-radius: 50%;

    svg {
      color: #413382;
    }
  }
`;
