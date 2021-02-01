import './rectImage.scss';

import React from "react";

export function RectImage({ src, alt }: { src: string, alt: string }) {
  return <img src={src} className={"image-rect image-full"} alt={alt}/>
}
