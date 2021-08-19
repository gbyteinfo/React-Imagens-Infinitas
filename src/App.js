import './App.css';
import Dados from './Paginas/Dados';
import DataHorario from './Paginas/DataHorario';

export default function App() {
  
  const title = 'App React Laboratório'

  return (
    <>

      <section className={'caixa'}>
        <DataHorario />
        <Dados titulo={title} />
      </section>

  </>
  );
}

