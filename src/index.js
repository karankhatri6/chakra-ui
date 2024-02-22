import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render( 
  <>
    <ColorModeScript />

    <ChakraProvider>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </>
);
