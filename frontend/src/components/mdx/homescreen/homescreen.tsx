import './homescreen.scss';
import { Image } from 'components/mdx/image/image';
import { TextField } from 'components/mdx/textField/textField';

import React from "react";

export function Homescreen({ src, props, alt, text }: { src: string, props: string, alt: string, text: string }) {
    return <div className="homeContainer">
        <Image src ={src} props = { props }  alt = { alt} />
        <TextField text = {text} props = {"centered"}/>
        </div>
  }