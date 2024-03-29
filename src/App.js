
import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/forms/Forms';
import Times from './componentes/Times/Times';
import Footer from './componentes/Footer/Footer';
import Separador from './componentes/Separador/Separador';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',
      id: uuidv4(),
    },
    {
      nome: 'Front-End',
      cor: '#82CFFA',
      id: uuidv4(),
    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
      id: uuidv4(),
    },
    {
      nome: 'Devops',
      cor: '#E06B69',
      id: uuidv4(),
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF',
      id: uuidv4(),
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05',
      id: uuidv4(),
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
      id: uuidv4(),
    },
  ])

  const [colabs, setColab] = useState([{
    nome:'Kauan Iasin',
    cargo:'Front-end Developer, especialista em HTML, CSS e js, com foco em React.js e TailwindCSS',
    imagem: 'https://github.com/srkain.png',
    time: times[0].nome,
    favorito: true,
    id: uuidv4(),
  }])

  const newColab = (colab) => {
    console.log(colabs);
    setColab([...colabs, colab])
  }

  const newTeam =(team) => {
    console.log(team);
    setTimes([...times, team])
  }

  function deleteColab (id) {
    setColab(colabs.filter(colab => colab.id !== id))
  }

  function mudaCorDoTime (cor, id) {
      setTimes(times.map(time => {
        if(time.id === id) {
          time.cor = cor;
        }
        return time;
      }))
  }

  function favColab (id) {
    console.log(id);
    setColab(colabs.map(colaborador => {
      if(colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
        console.log(colaborador.favorito)
      }
      return colaborador;
    }
    )
    )
  } 
  
  return (
    <div className="App">
      <Banner/>
      <Formulario 
        options={times.map((time => time.nome))} 
        addColab={colab => newColab(colab)}
        addTeam={team => newTeam(team)}
      />

      <Separador>Minha Organização:</Separador>

      {times.map(time => <Times
        mudaCor={mudaCorDoTime}
        key={time.nome}
        id={time.id}
        nome={time.nome}
        cor={time.cor}
        colabs={colabs.filter((colab => colab.time === time.nome))}
        aoDeletar={id => {deleteColab(id)}}
        favoritar={id => {favColab(id)}}
        />)
      }

        <Footer/>

    </div>
  );
}

export default App;
