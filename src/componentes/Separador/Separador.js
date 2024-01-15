import './Separador.css'

const Separador = (props) => {
    return(
        <div className='separador'>
            <p><strong>{props.children}</strong></p>
        </div>
    )
}

export default Separador