import Card from '../Card/Card'
import './Times.css'
import hexToRgba from 'hex-to-rgba';

const Times = (props) => {
    return(

        props.colabs.length > 0 && <section className='time' style={{backgroundColor: hexToRgba(props.cor, 0.2)}}>

            <input value={props.cor} onChange={evento => {props.mudaCor(evento.target.value, props.id)}} type='color' className='input-cor'/>
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='colabs'>

                {props.colabs.map(colab => 
                {
                    return(
                    <Card       
                        id={colab.id}
                        key={colab.nome} 
                        nome={colab.nome} 
                        cargo={colab.cargo} 
                        imagem={colab.imagem} 
                        time={colab.time}
                        cor={props.cor}
                        favoritar={props.favoritar}
                        favorito={colab.favorito}
                        aoDeletar={props.aoDeletar}
                />)})}
            </div>
        </section>
    )
}

export default Times