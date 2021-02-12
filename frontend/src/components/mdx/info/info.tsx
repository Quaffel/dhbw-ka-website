import './info.scss';
import { Image } from 'components/mdx/image/image';
import { TextField } from 'components/mdx/textField/textField';

import React from "react";

export function Info({ src, propsImage, propsText, alt, text }: { src: string, propsImage: string, propsText: string, alt: string, text: string }) {
    return <div className="infoContainer">
        <Image src ={src} props = { propsImage }  alt = { alt} />
        <TextField text = {text} props = {propsText}/>
        </div>
  }