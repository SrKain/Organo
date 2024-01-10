import CampoTexto from "../CampoTexto/CampoTexto";
import "./Forms.css";

const Formulario = () => {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o seu card de colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da sua imagem"/>
      </form>
    </section>
  );
};

export default Formulario;
