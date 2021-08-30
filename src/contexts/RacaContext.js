import React from "react"
import { createContext, useEffect, useState } from "react";

import { buscaSobreRacas, buscaImagemPorRaca, buscaTodasRacas } from '../api'

export const RacaContext = createContext({})

export const RacaProvider = ({children}) => {
  const [racas, setRacas] = useState([]);
  const [racaSelecionada, setRacaSelecionada] = useState({});
  const [status, setStatus] = useState("Você ainda não selecionou nenhum cachorro :(");
  
  const inicializarValores = async () => {
    // buscar quais raças têm imagens na API
    const racasDisponiveis = await buscaTodasRacas();
    
    // buscar informações sobre TODAS as raças no thedogapi
    const sobreRacas = await buscaSobreRacas();
    
    // pegar as informações somente das raças que têm
    // imagens disponíveis
    const listaRacasMostradas = sobreRacas.filter(
      sobre => racasDisponiveis.includes(sobre.name.toLowerCase())
    )
    
    setRacas([...listaRacasMostradas]);
  }
  
  const buscarImagem = async (raca) => {
    const imagem = await buscaImagemPorRaca(raca)
    
    return imagem;
  }
  
  const selecionarRaca = async (novaRaca) => {
    const infoDaRaca = racas.filter(infoRaca => infoRaca.name === novaRaca)
    const imagem = await buscarImagem(novaRaca);
    
    setRacaSelecionada({imagem, ...infoDaRaca[0]})
    setStatus("A imagem sempre será diferente, pode clicar quantas vezes quiser!")
  }
  
  useEffect(() => {
    inicializarValores();
  }, [])
  
  return(
      <RacaContext.Provider value={{racas, racaSelecionada, selecionarRaca, status}}>
          {children}
      </RacaContext.Provider>
  );
}