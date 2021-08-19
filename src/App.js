import './App.css';
import Dados from './Paginas/Dados';
import DataHorario from './Paginas/DataHorario';

export default function App() {

  const title = 'App Imagens Aleatórias Infinito'
  
  return (
    <>

      <section className={'caixa'}>
        <DataHorario />
        <Dados titulo={title} />
      </section>

  </>
  );
}

