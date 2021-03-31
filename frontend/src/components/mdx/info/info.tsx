import infoStyles from './info.module.scss';
import { Image } from 'components/mdx/image/image';

import React from "react";

export type ImagePosition = "left" | "right";

export function Info({ src, text, addInfo, imagePosition, alt }
  :{ src: string, text: string, addInfo: string, propsImage: string, imagePosition?: ImagePosition, alt: string })
  : React.ReactElement {
  const position: keyof typeof infoStyles = `infoContainer-${imagePosition ?? "left"}` as const;

  return <div className={`${infoStyles[position]} ${infoStyles["infoContainer"]}`}>
    <div className={`${infoStyles["additionalInfo"]}`}>{addInfo}</div>
    <div className={`${infoStyles["image"]}`}>
      <Image src={src} size="full" shape="rectangle" alt={alt} />
    </div>
    <div className={`${infoStyles["text"]}`}>
      {text}
    </div>
  </div>;
}
