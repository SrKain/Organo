import './Lista.css'

const ListaSuspensa = (Props) => {

    const alterado = (action) => {
        Props.setValor(action.target.value)
    }

    return(
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

export default ListaSuspensa