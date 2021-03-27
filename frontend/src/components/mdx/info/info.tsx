import infoStyles from './info.module.scss';
import { Image } from 'components/mdx/image/image';
import { TextField } from 'components/mdx/textField/textField';

import React from "react";

export type ImagePosition = "left" | "right";

export function Info({ src, text, addInfo, propsText, imagePosition, alt }: { src: string, text: string, addInfo: string, propsImage: string, propsText: string, imagePosition?: ImagePosition, alt: string }): React.ReactElement {
  const position: keyof typeof infoStyles = `infoContainer-${imagePosition ?? "left"}` as const;

  return <div className={`${infoStyles[position]} ${infoStyles["infoContainer"]}`}>
    <div className={`${infoStyles["additionalInfo"]}`}>{addInfo}</div>
    <div className={`${infoStyles["image"]}`}>
      <Image src={src} size="full" shape="rectangle" alt={alt} />
    </div>
    <div className={`${infoStyles["text"]}`}>
      <TextField text={text} props={propsText} />
    </div>
  </div>;
}
