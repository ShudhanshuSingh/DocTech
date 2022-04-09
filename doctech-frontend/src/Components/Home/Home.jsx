import React from 'react';
import { Content } from '../Content/Content';
import { Faq } from '../FAQ/Faq';
import { Header } from '../Header/Header';
import { Team } from '../Team/Team';

function Home() {
  return <div>
      <Header />
      <Content />
      <Team />
      <Faq />
  </div>;
}

export default Home;
