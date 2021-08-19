import React from 'react';
import DataHorario from './DataHorario';
import Componente1 from '../Componentes/Componente1';

export default function Dados(props){

    const img1 = () =>{ return 'https://picsum.photos/300/100?random=1' }
    const autor = 'Jorge Mira '
    const idade = () => {
      const valor1 = 2021
      const valor2 = 1986
      const idade = valor1 - valor2
      return idade
  }
    return(
    <>
        
        <section >
            <div className={'center'}>
              <span>Nome: {autor} - Idade: {idade()} anos</span>
              <h2>{props.titulo}</h2>
            </div>
            <Componente1 imagem2={img1} />

        </section>
        
    </>
    )
}