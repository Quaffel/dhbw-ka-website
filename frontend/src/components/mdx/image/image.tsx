import './image.scss';

import React from "react";

export function Image({ src, props, alt }: { src: string, props: string, alt: string }) {
  return <img src={src} className={props} alt={alt}/>
}
