import React from 'react';
import Componente1 from '../Componentes/Componente1';

export default function Dados(props){
    const img1 = () =>{
        return 'https://picsum.photos/300/100?random=1'
      }
      const idade = (valor1, valor2) => {
        return valor1 - valor2
      }
      const autor = 'Jorge Mira '
    return(
    <>
        
        <section>
            <h2>{props.titulo}</h2>
            <Componente1 nome={autor} idade={idade} imagem2={img1} />
        </section>
        
    </>
    )
}