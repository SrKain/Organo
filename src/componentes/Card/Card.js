import './Card.css'

const Card = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabeçalho' style={{backgroundColor: props.cor}}>
                <img src={props.imagem} alt={props.nome}></img>         
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Card