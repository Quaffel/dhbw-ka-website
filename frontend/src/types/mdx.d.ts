declare module '*.content.mdx' {
  function MdxElement(props: unknown): JSX.Element;

  export default MdxElement;
}

declare module '*.place.mdx' {
  export function MdxElement(props: unknown): JSX.Element;
  export const place: Place;

  export default MdxElement;
}

declare interface Place {
  name: string,
  imageUrl?: string
}
