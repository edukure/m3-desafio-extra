import React from 'react';
import './styles/index.scss';

import Raca from './components/Raca';
import ListaRacas from './components/ListaRacas';
import Cabecalho from './components/Cabecalho';

import { RacaProvider } from './contexts/RacaContext';

const App = () => {
  return (
    <div className="container">
      <RacaProvider>
        <Cabecalho />
        <Raca />
        <ListaRacas />
      </RacaProvider>
    </div>
  );
};

export default App;
