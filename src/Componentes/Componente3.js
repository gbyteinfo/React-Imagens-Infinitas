import React,{useState} from 'react';

export default function Componente3(props){
    const[randomImagem3, setRandomImagem2] = useState(201)
    console.log(randomImagem3)
    return (
    <>

        <div className={'divBackground'}> 
            <p className={'texto'}>
                <b>Componente 3</b>
                <button onClick={() => setRandomImagem2(300)}>Alterar Imagem</button>
            </p>
            <img className={'imagemButtom'} src={props.imagem(randomImagem3)} />
        </div>

    </>
    )
}
