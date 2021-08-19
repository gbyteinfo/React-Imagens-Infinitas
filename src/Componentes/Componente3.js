import React from 'react';
import Imagem from '../Medias/logo192.png'

export default function Componente3(props){

    return (
    <>

        <div className={'divBackground'}> 
            <p className={'texto'}>
                <b>Componente 3</b>
            </p>
            <img className={'imagemButtom'} src={props.imagem()} />
        </div>

    </>
    )
}
