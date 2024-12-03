import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Metrics from '../../components/Metrics/Metrics';
import Awards from '../../components/Awards/Awards';
import Partners from '../../components/Partners/Partners';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Hero />
      <Services />
      <Metrics />
      <Awards />
      <Partners />
    </HomeContainer>
  );
};

export default Home;