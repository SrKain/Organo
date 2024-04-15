import './Lista.css'
import React from 'react'

interface listaSuspensaProps {
    label: string
    valor: string
    alterado?: (value: string) => void
    itens: string[]
    setValor: Function
}

export default function ListaSuspensa(Props: listaSuspensaProps) {

    function alterado(action: React.ChangeEvent<HTMLSelectElement>
    ) {
        Props.setValor(action.target.value)
    }

    return (
        <div className="lista-suspensa">
            <label>{Props.label}</label>
            <select value={Props.valor} onChange={alterado} >
                <option value=""></option>
                {Props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}