import './App.css';
import Dados from './Paginas/Dados';

export default function App() {
  
  const title = 'App React Laboratório'

  return (
    <>

      <section className={'caixa'}>
        <Dados titulo={title} />
      </section>

  </>
  );
}

