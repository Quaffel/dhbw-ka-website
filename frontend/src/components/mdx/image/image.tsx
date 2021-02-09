import './image.scss';

import React from "react";

export function Image({ src, shape, alt }: { src: string, shape: string, alt: string }) {
  return <img src={src} className={shape} alt={alt}/>
}
