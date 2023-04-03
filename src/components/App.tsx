import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import MainScreen from './MainScreen';
import Background from './Background';
import Overlay from './Overlay';
import Error from './Error';

const GlobalStyle = createGlobalStyle`
  ${reset};
  background-color: black;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Overlay />
    <Background />
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </>
);

export default App;
