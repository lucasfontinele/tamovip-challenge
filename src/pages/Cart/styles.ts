import styled from 'styled-components';

import { ButtonBase as MuiButtonBase } from '@material-ui/core';
import { shade } from 'polished';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 60px 100px;

  width: 100%;

  div > h1 {
    font-weight: bold;
    font-size: 68px;
    color: #473889;
  }
`;

export const TableContainer = styled.table`
  margin-top: 40px;
  width: 880px;
  border-collapse: collapse;

  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 4px 24px;

  td,
  th {
    text-align: left;
    padding: 15px;

    font-weight: normal;
    font-size: 16px;
  }

  td img {
    height: 120px;
    width: 120px;
    object-fit: cover;
  }

  .quantityCard {
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 42px;
    width: 110px;

    border: 1px solid #f1f1f1;
    border-radius: 21px;
  }

  .product-td {
    display: flex;
  }

  .product-description {
    margin-left: 10px;
  }

  tr:first-child {
    border-bottom: 1px solid #ddd;
  }
`;

export const PaymentBox = styled.div`
  position: relative;

  height: 645px;
  width: 360px;

  padding: 20px 30px;

  border-radius: 10px;
  background: #37445b;

  > h3 {
    font-weight: 600;
    font-size: 40px;
    color: #fff;

    margin-bottom: 10px;
  }

  h4 {
    font-weight: 600;
    font-size: 18px;
    color: #fff;

    margin-bottom: 10px;
  }

  .divisor {
    height: 1px;
    width: 100%;
    background: #707070;
  }
`;

export const ShippingContainer = styled.div`
  margin-top: 100px;
  float: right;

  display: flex;

  font-size: 18px;
`;

export const MethodPaymentContainer = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: column;

  .optionsArea {
    margin-top: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PaymentMethodButton = styled(MuiButtonBase)`
  && {
    width: 140px;
    height: 50px;

    border: 1px solid #fff;
    border-radius: 30px;

    background: transparent;

    font-family: 'GT Walsheim Pro Regular';
    color: #fff;
    font-weight: bold;
  }
`;

export const CheckoutButton = styled(MuiButtonBase)`
  && {
    position: absolute;
    bottom: 0;

    margin-bottom: 30px;

    width: 300px;
    height: 55px;

    border-radius: 100px;
    background: #3f88eb;

    color: #fff;

    font-family: 'GT Walsheim Pro Regular';
    font-weight: bold;
    font-size: 20px;

    :hover {
      background: ${shade(0.2, '#3F88EB')};
    }
  }
`;
