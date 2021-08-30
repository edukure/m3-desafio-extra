import React, { useContext } from 'react';

import RacaSelecionada from '../RacaSelecionada';
import RacaNaoSelecionada from '../RacaNaoSelecionada';
import { RacaContext } from '../../contexts/RacaContext';

const Raca = () => {
  const { racaSelecionada } = useContext(RacaContext);
  const racaFoiSelecionada = Boolean(racaSelecionada.name);

  return racaFoiSelecionada ? (
    <RacaSelecionada racaSelecionada={racaSelecionada} />
  ) : (
    <RacaNaoSelecionada />
  );
};

export default Raca;
