import './Times.css'
import Card from '../Card/index'
import hexToRgba from 'hex-to-rgba';
import { IColab } from '../../shared/interfaces/IColab';

interface TimesProps {
    cor: string,
    nome: string,
    id: string,
    mudaCor: Function
    favoritar: Function
    aoDeletar: Function
    colabs: IColab[]
}

export default function Times(props: TimesProps) {
    return (

        props.colabs.length > 0 ? <section className='time' style={{ backgroundColor: hexToRgba(props.cor, 0.2) }}>

            <input value={props.cor} onChange={evento => { props.mudaCor(evento.target.value, props.id) }} type='color' className='input-cor' />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colabs'>

                {props.colabs.map(colab => {
                    return (
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
                        />)
                })}
            </div>
        </section> : <></>
    )
}