import './roundImage.scss';

import React from "react";

export function RoundImage({ src, alt }: { src: string, alt: string }) {
  return <img src={src} className={"image-round image-medium"} alt={alt}/>
}
