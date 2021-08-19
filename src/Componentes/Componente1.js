import React from 'react';
import Componente2 from './Componente2';

//COMP CHILD FROM => App.js
export default function Componente1(props){

    const img2 = () => {
        return 'https://picsum.photos/300/100?random=2'
    }
    const valor1 = 2021
    const valor2 = 1986

    return (
    <>

        <div className={'divBackground'}>
            <p className={'texto'}>
              <b>{props.nome}, {props.idade(valor1, valor2)}</b>
            </p>
            <img className={'imagemButtom'} src={props.imagem2()}/>
        </div>
        <Componente2 imagem={img2} />

    </>
    )
}
