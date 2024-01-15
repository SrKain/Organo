import './Button.css'

const Button = (props) => {
    return(
        <div className="button">
            <button>
                {props.children}
            </button>
        </div>
    )
}

export default Button;