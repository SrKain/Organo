import { ReactElement } from 'react';
import './Button.css'
interface ButtonProps {
    children: ReactElement | string
}
export default function Button(props: ButtonProps) {
    return (
        <div className="button">
            <button>
                {props.children}
            </button>
        </div>
    )
}