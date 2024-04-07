import { ReactElement } from 'react';
import React from 'react';
import './Button.css'
interface ButtonProps {
    children: ReactElement
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