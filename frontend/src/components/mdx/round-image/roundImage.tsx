import imageStyles from 'components/mdx/round-image/roundImage.module.scss';

import React from "react";

export type ImageSize = "small" | "medium" | "large";

export function RoundImage({ src, alt, size }: { src: string, alt: string, size?: ImageSize }) {
  const sizeStyleName: keyof typeof imageStyles = `square-${size ?? "medium"}` as const;

  return <img src={src} className={`${imageStyles["round"]} ${imageStyles[sizeStyleName]}`} alt={alt}/>
}
