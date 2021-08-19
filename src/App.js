import './App.css';
import Componente1 from './Componentes/Componente1'
import Dados from './Paginas/Dados';

export default function App() {

  const img1 = () =>{
    return 'https://picsum.photos/300/100?random=1'
  }
  const idade = (valor1, valor2) => {
    return valor1 - valor2
  }
  const autor = 'Jorge Mira '
  const title = 'App React Laboratório'

  return (
    <>

      <section className={'caixa'}>
        <Dados titulo={title} />
        <Componente1 nome={autor} idade={idade} imagem2={img1} />
      </section>

  </>
  );
}

