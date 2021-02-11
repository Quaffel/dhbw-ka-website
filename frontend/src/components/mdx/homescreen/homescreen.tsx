import './homescreen.scss';
import { Image } from 'components/mdx/image/image';

import React from "react";

export function Homescreen({ src, props, alt }: { src: string, props: string, alt: string }) {
    return <div className="container">
        <Image src ={src} props = { props }  alt = { alt} />
        <div className="centered"><b>Hier könnte ihre Werbunge stehen</b></div>
        </div>
  }