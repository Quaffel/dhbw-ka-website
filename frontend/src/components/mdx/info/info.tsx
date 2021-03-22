import './info.scss';
import { Image } from 'components/mdx/image/image';
import { TextField } from 'components/mdx/textField/textField';

import React from "react";

export function Info({ src, propsImage, propsText, alt, text, addInfo }: { src: string, propsImage: string, propsText: string, alt: string, text: string, addInfo:string }) {
        if(propsImage.includes("left") || window.innerWidth <= 450){
            return <div className="infoContainer">
                <div className="additionalInfo">{addInfo}</div>
                <div className="image">
                <Image src ={src} props = { propsImage }  alt = { alt} />
                </div>
                <div className="text">
                <TextField text = {text} props = {propsText}/>
                </div>
            </div>
        } else {
            return <div className="infoContainer">
                <div className="text">
                <TextField text = {text} props = {propsText}/>
                </div>
                <div className="image">
                <Image src ={src} props = { propsImage }  alt = { alt} />
                </div>
                <div className="additionalInfo">{addInfo}</div>
            </div>
        }
}