
import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/forms/Forms';
import Times from './componentes/Times/Times';


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157',
    },
    {
      nome: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29',
    },
  ]

  const [colabs, setColab] = useState([])

  const newColab = (colab) => {
    console.log(colabs);
    setColab([...colabs, colab])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario options={times.map((time => time.nome))} addColab={colab => newColab(colab)}/>
      {times.map(time => <Times key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
    </div>
  );
}

export default App;
