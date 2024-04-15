import './Campo.css'
import React from 'react'

interface CampoProps {
    label: string,
    type?: React.HTMLInputTypeAttribute,
    setValor: (value: string) => void,
    valor: string,
    obrigatório?: boolean,
    placeholder: string,
}

export default function Campo({ label, type = 'text', setValor, valor, placeholder, obrigatório = false, }: CampoProps) {

    const digitando = (action: React.ChangeEvent<HTMLInputElement>) => {
        setValor(action.target.value);
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={digitando}
                required={obrigatório}
                placeholder={`${placeholder}`} />
        </div>
    )
}