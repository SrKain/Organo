import { useState } from "react";
import Button from "../Button/Button";
import Campo from "../Campo/Campo";
import ListaSuspensa from "../ListaSuspensa/Lista";
import "./Forms.css";
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [favorito , setFavorito] = useState(false);
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('#FFFFFF');
  const id = uuidv4();


  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.addColab({
      nome,
      cargo,
      imagem,
      time,
      id,
      favorito,
    })
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
    setFavorito(false);
  }

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o seu card de colaborador</h2>

        <Campo 
        obrigatório={true} 
        label="Nome" 
        placeholder="Digite seu nome" 
        valor={nome}
        setValor={valor => setNome(valor)}
        />

        <Campo 
        obrigatório={true} 
        label="Cargo" 
        placeholder="Digite seu cargo"
        valor={cargo}
        setValor={valor => setCargo(valor)}
        />

        <Campo 
        label="Imagem" 
        placeholder="Informe o endereço da sua imagem"
        valor={imagem}
        setValor={valor => setImagem(valor)}
        />

        <ListaSuspensa 
        label="Time" 
        itens={props.options}
        valor={time}
        setValor={valor => setTime(valor)}
        />

        <Button>
          Criar Card
        </Button>
      </form>
      <form onSubmit={(evento) => {
        evento.preventDefault();
        props.addTeam({
          nome: nomeTime,
          cor: corTime,
          id: uuidv4(),
        })
        setNomeTime('');
        setCorTime('#ffffff');
      }}>
        <h2>Preencha os dados para criar o seu novo time</h2>

        <Campo 
        obrigatório={true} 
        label="Nome" 
        placeholder="Digite o nome do seu time" 
        valor={nomeTime}
        setValor={valor => setNomeTime(valor)}
        />

        <Campo 
        obrigatório={true} 
        label="Cor" 
        type='color'
        placeholder="Escolha a cor do seu time"
        valor={corTime}
        setValor={valor => setCorTime(valor)}
        />
        <Button>
          Criar um novo time
        </Button>
      </form>
    </section>
  );
};

export default Formulario;
