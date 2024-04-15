import React, { useState } from "react";
import Campo from "../Campo";
import Button from "../Button/index";
import ListaSuspensa from "../ListaSuspensa";
import "./Forms.css";
import { IColab } from "../../shared/interfaces/IColab";
import { ITeam } from "../../shared/interfaces/ITeams";

interface FormularioProps {
  addColab: (colab: IColab) => void
  addTeam: (Team: ITeam) => void
  options: string[]
}

const Formulario = ({addColab, addTeam, options,}: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [favorito, setFavorito] = useState(false);
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#FFFFFF");

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    addColab({
      nome,
      cargo,
      imagem,
      time,
      favorito,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
    setFavorito(false);
  };

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o seu card de colaborador</h2>

        <Campo
          obrigatório={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          setValor={(valor) => setNome(valor)}
        />

        <Campo
          obrigatório={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          setValor={(valor) => setCargo(valor)}
        />

        <Campo
          label="Imagem"
          placeholder="Informe o endereço da sua imagem"
          valor={imagem}
          setValor={(valor) => setImagem(valor)}
        />

        <ListaSuspensa
          label="Time"
          itens={options}
          valor={time}
          setValor={(valor : string) => setTime(valor)}
        />

        <Button>Criar Card</Button>

      </form>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          addTeam({
            nome: nomeTime,
            cor: corTime,
            id: nomeTime
          });
          setNomeTime("");
          setCorTime("#ffffff");
        }}
      >
        <h2>Preencha os dados para criar o seu novo time</h2>

        <Campo
          obrigatório={true}
          label="Nome"
          placeholder="Digite o nome do seu time"
          valor={nomeTime}
          setValor={(valor) => setNomeTime(valor)}
        />

        <Campo
          obrigatório={true}
          label="Cor"
          type="color"
          placeholder="Escolha a cor do seu time"
          valor={corTime}
          setValor={(valor) => setCorTime(valor)}
        />
        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};

export default Formulario;
