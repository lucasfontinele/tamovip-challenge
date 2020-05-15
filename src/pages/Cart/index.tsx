import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { IconButton } from '@material-ui/core';
import { FiMinus, FiPlus } from 'react-icons/fi';

import { ApplicationState } from '../../reduxStore';
import { handleCart } from '../../store/cart/actions';
import { ICelebrities } from '../../store/cart/types';
import { toCurrency } from '../../helpers/util';

import MainLayout from '../../layouts/Main';

import {
  TableContainer,
  PaymentBox,
  ContentWrapper,
  ShippingContainer,
  MethodPaymentContainer,
  PaymentMethodButton,
  CheckoutButton,
} from './styles';

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: ApplicationState) => state.cart);

  const getTotalPrice = () => {
    return toCurrency(
      cart.reduce((accumulated, current) => {
        return accumulated + current.price * current.quantity;
      }, 0),
    );
  };

  function handleRemoveItem(item: number) {
    const oldCart = [...cart];

    oldCart.splice(item, 1);

    dispatch(handleCart(oldCart));
  }

  function handleMinus(item: number) {
    const oldCart = [...cart];

    if (item > -1) {
      let celebrity = oldCart[item];

      if (celebrity.quantity > 1) {
        celebrity.quantity -= 1;

        dispatch(handleCart(oldCart));
      }
    }
  }

  function handlePlus(item: number) {
    const oldCart = [...cart];

    if (item > -1) {
      let celebrity = oldCart[item];

      celebrity.quantity += 1;

      dispatch(handleCart(oldCart));
    }
  }

  return (
    <MainLayout>
      <ContentWrapper>
        <div>
          <h1>Carrinho</h1>
          <TableContainer>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Remover</th>
            </tr>
            {cart.length <= 0 && (
              <p style={{ marginTop: 40, marginBottom: 40, marginLeft: 40 }}>
                Você ainda não adicionou produtos ao carrinho
              </p>
            )}
            {cart.map((item: ICelebrities, index) => (
              <tr>
                <td>
                  <div className="product-td">
                    <img src={item.image} alt="produto" />
                    <div className="product-description">
                      <p>{item.name}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </td>
                <td>{toCurrency(item.price)}</td>
                <th>
                  <div className="quantityCard">
                    <IconButton onClick={() => handleMinus(index)}>
                      <FiMinus />
                    </IconButton>
                    <p>{item.quantity}</p>
                    <IconButton onClick={() => handlePlus(index)}>
                      <FiPlus />
                    </IconButton>
                  </div>
                </th>
                <td>
                  <IconButton onClick={() => handleRemoveItem(index)}>
                    <FiMinus size={20} />
                  </IconButton>
                </td>
              </tr>
            ))}
          </TableContainer>
          <ShippingContainer>
            <p>
              <strong>Total: </strong>
              {getTotalPrice()}
            </p>
          </ShippingContainer>
        </div>
        <div>
          <PaymentBox>
            <h3>Pagamento</h3>
            <div className="divisor" />
            <MethodPaymentContainer>
              <h4>Métodos de Pagamento:</h4>
              <div className="optionsArea">
                <PaymentMethodButton>Cartão de crédito</PaymentMethodButton>
                <PaymentMethodButton>PayPal</PaymentMethodButton>
              </div>
            </MethodPaymentContainer>
            <CheckoutButton>Confirmar pagamento</CheckoutButton>
          </PaymentBox>
        </div>
      </ContentWrapper>
    </MainLayout>
  );
};

export default CartPage;
