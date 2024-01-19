import React from 'react'
import { ProdutosEmAlta } from '../../componets/produtosEmAlta/ProdutosEmAlta';
import {Slider}  from '../../componets/slider/Slider'
import { ColecoesDestaque } from '../../componets/colecoesdestaque/ColecoesDestaque';

export const Home = () => {
  return (
    <div>
      <Slider/>
      <ColecoesDestaque/>
      <ProdutosEmAlta/>
    </div>
  )
}
