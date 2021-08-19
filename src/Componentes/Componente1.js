import React, {useState} from 'react';
import Componente2 from './Componente2';

//COMP CHILD FROM => App.js
export default function Componente1(props){
    const[randomImagem1, setRandomImagem1] = useState(0)
    const img2 = (randomImagem2) => {
        let imagem = 'https://picsum.photos/300/100?random=' + randomImagem2
        return imagem
    }
    
    return (
    <>
           
        <div className={'divBackground'}>
            <p className={'texto'}>
              <b>Componente 1 </b>
              <button onClick={() => setRandomImagem1(100)}>Alterar Imagem</button>
            </p>
            <img className={'imagemButtom'} src={props.img(randomImagem1)}/>
        </div>
        <Componente2 imagem={img2} />

    </>
    )
}
