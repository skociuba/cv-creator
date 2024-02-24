import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

import ReduxWrapper from '../provider/redux/ReduxWrapper';

import Provider from './context/AuthContext';
import ToasterContext from './context/ToasterContext';
import Nav from './components/Nav';

import './styles/globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'cv generator',
  description: 'cv creator app for job seekers',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ReduxWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Provider>
            <ToasterContext />
            <Nav />
            {children}
          </Provider>
        </body>
      </html>
    </ReduxWrapper>
  );
}
