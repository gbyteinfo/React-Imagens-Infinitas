import React, {useState} from 'react';
import Componente1 from '../Componentes/Componente1';

export default function Dados(props){
  const autor = 'Jorge Mira '
  const img1 = (randomImagem1) =>{ 
    let imagem1 = 'https://picsum.photos/300/100?random=' + randomImagem1
    return imagem1
  }
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
            <Componente1 img={img1} />

        </section>
        
    </>
    )
}