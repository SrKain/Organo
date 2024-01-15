import Card from '../Card/Card'
import './Times.css'

const Times = (props) => {
    return(

        props.colabs.length > 0 && <section className='time' style={{backgroundColor: props.corPrimaria}}>

            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className='colabs'>
                {props.colabs.map(colab => <Card 
                key={colab.nome} 
                nome={colab.nome} 
                cargo={colab.cargo} 
                imagem={colab.imagem} 
                time={colab.time}
                cor={props.corSecundaria}
                />)}
            </div>
        </section>
    )
}

export default Times