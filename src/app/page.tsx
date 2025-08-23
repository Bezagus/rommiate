import React from 'react';
import { Copyright, Header, Phone } from '@/components';
import { Button } from '@/styles';

const Home = () => {
  return (
    <main className="h-svh w-svw overflow-hidden flex flex-col justify-center relative">
      <Header />
      <Phone />
      <Copyright />
    </main>
  );
};

export default Home;
