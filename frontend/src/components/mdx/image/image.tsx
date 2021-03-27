import imageStyles from './image.module.scss';

import React from "react";

export type ImageSize = "small" | "medium" | "large" | "full";
export type ImageShape = "round" | "rectangle";

export function Image({ src, alt, size, shape }: { src: string, alt: string, size?: ImageSize, shape?: ImageShape}): React.ReactElement {
  const sizeStyleName: keyof typeof imageStyles = `square-${size ?? "medium"}` as const;
  const shapeStyleName: keyof typeof imageStyles = shape ?? "rectangle" as const;

  return <img src={src} className={`${imageStyles[shapeStyleName]} ${imageStyles[sizeStyleName]}`} alt={alt} />;
}
