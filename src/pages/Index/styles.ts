import styled from 'styled-components';

import background from '../../static/images/background.png';

export const Container = styled.main`
  height: 100%;
  width: 100%;

  ::after {
    content: '';
    height: 100vh;
    width: 100%;

    position: absolute;
    top: 0;
    background: url(${background}) no-repeat 15px 15px;

    z-index: -5;
  }
`;

export const Header = styled.header`
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

    > img {
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

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 100px;
  margin-top: 65px;

  h1 {
    font-weight: bold;
    font-size: 80px;
    line-height: 92px;
    color: #473889;
  }

  .categories {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    max-height: 750px;
    /* width: 440px; */

    overflow-y: auto;

    h3 {
      /* align-self: flex-start; */

      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 32px;

      color: #473889;

      margin-bottom: 80px;
    }
  }
`;
