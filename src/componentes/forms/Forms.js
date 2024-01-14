import { useState } from "react";
import Button from "../Button/Button";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/Lista";
import "./Forms.css";

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');


  const aoSalvar = (evento) => {
    evento.preventDefault();
    // console.log("deu boa =>", nome, cargo, imagem, time)

    props.addColab({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o seu card de colaborador</h2>

        <CampoTexto 
        obrigatório={true} 
        label="Nome" 
        placeholder="Digite seu nome" 
        valor={nome}
        setValor={valor => setNome(valor)}
        />

        <CampoTexto 
        obrigatório={true} 
        label="Cargo" 
        placeholder="Digite seu cargo"
        valor={cargo}
        setValor={valor => setCargo(valor)}
        />

        <CampoTexto 
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
    </section>
  );
};

export default Formulario;
