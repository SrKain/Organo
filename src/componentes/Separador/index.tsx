import React from 'react'
import './Separador.css'

interface SeparadorProps {
    children: string
}

const Separador = ({ children }: SeparadorProps) => {
    return (
        <div className='separador'>
            <p><strong>{children}</strong></p>
        </div>
    )
}

export default Separador