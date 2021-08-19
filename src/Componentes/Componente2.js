import React,{useState} from 'react';
import Componente3 from './Componente3';

//COMP CHILD FROM => Componente1.js
export default function Componente2(props){
    const[randomImagem2, setRandomImagem2] = useState(101)
    const img3 = (randomImagem3) => {
        let imagem = 'https://picsum.photos/300/180?random=' + randomImagem3
        console.log("Imagem3: Random=", randomImagem3)
        return imagem
    } 

    return (
    <>

        <div className={'divBackground'}>
            <p className={'texto'}>
                <b>Componente 2</b>
                <button onClick={() => setRandomImagem2(randomImagem2+1)}>Alterar Imagem / {randomImagem2}</button>
            </p>
            <img className={'imagemButtom'} src={props.imagem(randomImagem2)}/>
        </div>
        <Componente3 imagem={img3} />
        
    </>
    )
}