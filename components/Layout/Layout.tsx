import Head from 'next/head';
import React from 'react';
import { Header } from '../Header';

type Props = {
  children: React.ReactNode;
  title: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
   <>
    <Head>
      <title>
        {title} | Flick Glimpse
      </title>
    </Head>

    <Header></Header>

    <main>
      {children}
    </main>
   </>
  );
};
