import './textField.scss';

import React from "react";

export function TextField({text, props}:{text: string, props: string}){
    return <div className={props}>{text}</div>
}