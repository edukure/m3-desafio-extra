import React, { useContext } from 'react';
import { RacaContext } from '../../contexts/RacaContext';
import './styles.scss';

const ListaRacas = () => {
  const { racas, selecionarRaca } = useContext(RacaContext);
  return (
    <ul className="lista-racas">
      {racas.map((raca) => (
        <li className="lista-racas__item" key={raca.id} onClick={() => selecionarRaca(raca.name)}>
          {raca.name}
        </li>
      ))}
    </ul>
  );
};

export default ListaRacas;
