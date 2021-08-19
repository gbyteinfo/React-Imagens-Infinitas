import React from 'react';
import Componente3 from './Componente3';

//COMP CHILD FROM => Componente1.js
export default function Componente2(props){

    const img3 = () => {
        return 'https://picsum.photos/300/100?random=3'
    } 

    return (
    <>

        <div className={'divBackground'}>
            <p className={'texto'}>
                <b>Componente 2</b>
            </p>
            <img className={'imagemButtom'} src={props.imagem()}/>
        </div>
        <Componente3 imagem={img3} />
        
    </>
    )
}