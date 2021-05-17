import { MDXProvider, MDXProviderProps } from '@mdx-js/react';
import * as React from 'react';

import mdxWrapperStyles from './defaults.module.scss';

/* eslint-disable react/display-name */
export function MdxPlaceDescriptionFormatter(props: React.PropsWithChildren<unknown>): React.ReactElement {
  function buildWrapper<E extends keyof React.ReactHTML>(
    elementName: E
  ): (props: MDXProviderProps) => React.ReactElement {
    const className = (mdxWrapperStyles as any)?.[`${elementName}-wrapper`];

    return (props: MDXProviderProps) => (<div className={mdxWrapperStyles["global-wrapper"]}>
      {React.createElement<React.HTMLAttributes<E>>(
      elementName, { className, ...props }, props.children)}
    </div>
    );
  }

  function buildNotImplementedWrapper(
    elementName: keyof React.ReactHTML
  ): (props: MDXProviderProps) => React.ReactElement {
    return () => {
      throw new Error(`Unimplemented element "${elementName}"`);
    };
  }

  return <MDXProvider components={{
    // Primitive textual elements
    a: buildWrapper("a"),
    p: buildWrapper("p"),

    // Headline elements
    h1: buildWrapper("h1"),
    h2: buildWrapper("h2"),
    h3: buildWrapper("h3"),
    h4: buildWrapper("h4"),
    h5: buildWrapper("h5"),
    h6: buildWrapper("h6"),

    // Table elements
    table: buildWrapper("table"),
    td: buildWrapper("td"),
    th: buildWrapper("th"),
    tr: buildWrapper("tr"),

    // List elements
    ul: buildWrapper("ul"),
    ol: buildWrapper("ol"),
    li: buildWrapper("li"),

    // Unsupported elements
    code: buildNotImplementedWrapper("code")
  }}>{props.children}</MDXProvider>;
}
