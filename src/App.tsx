import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/forms/index";
import Times from "./componentes/Times";
import React from "react";
import Footer from "./componentes/Footer";
import Separador from "./componentes/Separador";
import { IColab } from "./shared/interfaces/IColab";
import { ITeam } from "./shared/interfaces/ITeams";

function App() {
  const [times, setTimes] = useState<ITeam[]>([
    {
      nome: "Programação",
      cor: "#57C278",
      id: '1'
    },
    {
      nome: "Front-End",
      cor: "#82CFFA",
      id: '2'
    },
    {
      nome: "Data Science",
      cor: "#A6D157",
      id: '3'
    },
    {
      nome: "Devops",
      cor: "#E06B69",
      id: '4'
    },
    {
      nome: "UX e Design",
      cor: "#DB6EBF",
      id: '5'
    },
    {
      nome: "Mobile",
      cor: "#FFBA05",
      id: '6'
    },
    {
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
      id: '7'
    },
  ]);

  const [colabs, setColab] = useState<IColab[]>([
    {
      nome: "Kauan Iasin",
      cargo:
        "Front-end Developer, especialista em HTML, CSS e js, com foco em React.js e TailwindCSS",
      imagem: "https://github.com/srkain.png",
      time: times[0].nome,
      favorito: true,
      id: 'kauan'
    },
  ]);

  const newColab = (colab: IColab) => {
    setColab([...colabs, colab]);
  };

  const newTeam = (team: ITeam) => {
    setTimes([...times, team]);
  };

  function deleteColab(id: string) {
    setColab(colabs.filter((colab) => colab.id !== id));
  }

  function mudaCorDoTime(cor: string, id: string) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function favColab(id: string) {
    console.log(id);
    setColab(
      colabs.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito;
          console.log(colaborador.favorito);
        }
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Banner
        enderecoImagem=" /imagens/banner.png"
        textoAlternativo="Banner da pagina Organo."
      />
      <Formulario
        options={times.map((time) => time.nome)}
        addColab={(colab) => newColab(colab)}
        addTeam={(team) => newTeam(team)}
      />

      <Separador>Minha Organização:</Separador>

      {times.map((time) => (
        <Times
          mudaCor={mudaCorDoTime}
          key={time.nome}
          id={time.id}
          nome={time.nome}
          cor={time.cor}
          colabs={colabs.filter((colab) => colab.time === time.nome)}
          aoDeletar={(id: string) => {
            deleteColab(id);
          }}
          favoritar={(id: string) => {
            favColab(id);
          }}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
