import React, { useContext } from 'react';
import './styles.scss';

import Status from '../Status';
import { RacaContext } from '../../contexts/RacaContext';

const Cabecalho = () => {
  const { status } = useContext(RacaContext);

  return (
    <div className="cabecalho">
      <h1 className="cabecalho__titulo">Seja bem-vindo ao InfoCão</h1>

      <p className="cabecalho__texto">
        Clique em um nome e te daremos informações úteis sobre a raça e uma imagem bem bonita.
      </p>

      <Status status={status} />
    </div>
  );
};

export default Cabecalho;
