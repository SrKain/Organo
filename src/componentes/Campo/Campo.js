import './Campo.css'
import { useState } from 'react'

const Campo = (props, type='text') => {

    const [valor, setValor] = useState('')

    const digitando = (action) => {
        props.setValor(action.target.value);
        console.log(props.valor)
}

    return (
        <div className={`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input 
                type={props.type}
                value={props.valor} 
                onChange={digitando} 
                required={props.obrigatório} 
                placeholder={`${props.placeholder}`}/>
        </div>
    )
}

export default Campo; 