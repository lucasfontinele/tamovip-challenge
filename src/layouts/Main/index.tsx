import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default MainLayout;
