import './homescreen.scss';
import { Image } from 'components/mdx/image/image';

import React from "react";

export function Homescreen({ src, props, alt, text }: { src: string, props: string, alt: string, text: string }) {
    return <div className="container">
        <Image src ={src} props = { props }  alt = { alt} />
        <div className="centered"><b>{text}</b></div>
        </div>
  }