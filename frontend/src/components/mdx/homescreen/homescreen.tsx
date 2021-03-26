import './homescreen.scss';
import React from "react";

export function Homescreen({  text }: { src: string, props: string, alt: string, text: string }): React.ReactElement {
  return <div className="homeContainer">
    <div className="homeContainer-inside">
      {text}
    </div>
  </div>;
}
