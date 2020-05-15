import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  /* max-width: 1715px; */

  padding: 0 100px;
  margin: 40px auto 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .search-area {
    display: flex;
    align-items: center;

    > a {
      margin-left: 100px;
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;

  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0 30px;

  height: 70px;
  width: 440px;

  background: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 24px;

  image {
    position: absolute;
    right: 0;
  }
`;

export const Search = styled.input`
  border: none;
  outline: none;

  font-weight: 500;
  font-size: 24px;
  line-height: 27px;

  color: #473889;

  ::placeholder {
    color: #473889;
  }
`;

export const CartContainer = styled(Link)`
  text-decoration: none;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  .price {
    margin-top: 2.5px;

    position: absolute;
    color: #473889;
  }
`;
