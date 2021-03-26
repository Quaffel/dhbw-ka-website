import './info.scss';
import { Image } from 'components/mdx/image/image';
import { TextField } from 'components/mdx/textField/textField';

import React from "react";

export function Info({ src, propsImage, propsText, alt, text, addInfo }: { src: string, propsImage: string, propsText: string, alt: string, text: string, addInfo: string }): React.ReactElement {
  if (propsImage.includes("left")) {
    return <div className="infoContainer-left">
      <div className="additionalInfo">{addInfo}</div>
      <div className="image">
        <Image src={src} props={propsImage} alt={alt} />
      </div>
      <div className="text">
        <TextField text={text} props={propsText} />
      </div>
    </div>;
  } else {
    return <div className="infoContainer-right">
      <div className="additionalInfo">{addInfo}</div>
      <div className="image">
        <Image src={src} props={propsImage} alt={alt} />
      </div>
      <div className="text">
        <TextField text={text} props={propsText} />
      </div>
    </div>;
  }
}
