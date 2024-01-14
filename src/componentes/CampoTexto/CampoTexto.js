import './CampoTexto.css'
import { useState } from 'react'

const CampoTexto = (props) => {

    const [valor, setValor] = useState('')

    const digitando = (action) => {
        props.setValor(action.target.value);
        console.log(props.valor)
}

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={digitando} required={props.obrigatório} placeholder={`${props.placeholder}`}/>
        </div>
    )
}

export default CampoTexto; 