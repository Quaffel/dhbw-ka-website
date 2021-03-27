import React from "react";
import textStyles from './textField.module.scss';


export function TextField({text, props}:{text: string, props: string}):React.ReactElement{
  return <div className={`${textStyles[props]}`}>{text}</div>;
}
