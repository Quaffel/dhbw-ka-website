import navbarStyles from './navbar.module.scss';

import * as React from 'react';
import { buildClassNames } from 'components/style/styleHelper';
import { NonEmptyArray } from 'types/utilityTypes';

export interface NavbarSection {
  name: string,
  content?: React.ReactElement | null,
  items: Array<NavbarItem>,
  styleOptions?: {
    focussed?: boolean
  }
}

export interface NavbarItem {
  name: string,
  content?: React.ReactElement | null
  styleOptions?: {
    focussed?: boolean
  }
}

export default function Navbar(
  {
    brandElement,
    leftSections,
    rightSections,
    onSelection
  }: {
    brandElement: React.ReactElement | string,
    leftSections: NonEmptyArray<NavbarSection>,
    rightSections: NonEmptyArray<NavbarSection>,
    onSelection?: (section: string, item: string | null) => void
  }
): React.ReactElement {
  const [leftSectionElements, rightSectionElements] = React.useMemo(() => {
    function buildSelectableElement<E extends HTMLElement>(
      tagName: E["tagName"],
      customProps: React.HTMLAttributes<E> & React.Attributes,
      contentData: Pick<NavbarItem, "name" | "content">,
      selectionData: Parameters<NonNullable<typeof onSelection>>,
      styleOptions: { focussed: boolean | undefined }
    ): React.ReactElement {
      // Fast path: Element is supposed not to be visible
      if (contentData.content === null) {
        return <></>;
      }

      const combinedProps = Object.assign<React.HTMLAttributes<HTMLElement>, React.HTMLAttributes<E>>({
        onClick: () => onSelection && onSelection(...selectionData),
        className: buildClassNames(navbarStyles, [], [["focussed"]], [styleOptions.focussed ?? false])
      }, customProps);

      const content = contentData.content ?? contentData.name;

      return React.createElement<React.HTMLAttributes<E>, E>(tagName, combinedProps, [content]);
    }

    function buildSectionElement(section: NavbarSection): React.ReactElement {
      const buildSectionHeaderElement = (() => {
        return buildSelectableElement<HTMLHeadingElement>(
          "h1", {}, section, [section.name, null],
          { focussed: section.styleOptions?.focussed }
        );
      });
      const buildSectionItemElement = ((item: NavbarItem) => {
        return buildSelectableElement<HTMLLIElement>("li", {
          key: item.name
        }, item, [section.name, item.name], { focussed: item.styleOptions?.focussed ?? false });
      });

      return <div className={navbarStyles["section"]}>
        {buildSectionHeaderElement()}
        <ul>
          {section.items.map(buildSectionItemElement)}
        </ul>
      </div>;
    }

    return [
      leftSections.map(buildSectionElement),
      rightSections.map(buildSectionElement)
    ];
  }, [leftSections, rightSections]);

  const [collapsed, setCollapsed] = React.useState<boolean>(true);

  function toggleCollapsed() {
    setCollapsed(previous => !previous);
  }

  return <nav>
    <button onClick={toggleCollapsed} />
    <div className={buildClassNames(navbarStyles, ["section-group", "brand"], [["collapsed"]], [collapsed])}>
      {brandElement}
    </div>
    <div className={navbarStyles["ruler"]} />
    <div className={buildClassNames(navbarStyles, ["expansion-card"], [["collapsed"]], [collapsed])}>
      <div className={buildClassNames(navbarStyles, ["section-group", "section-group-primary"], [["collapsed"]], [collapsed])}>
        {leftSectionElements}
      </div>
      <div className={navbarStyles["ruler"]} />
      <div className={buildClassNames(navbarStyles, ["section-group", "section-group-secondary"], [["collapsed"]], [collapsed])}>
        {rightSectionElements}
      </div>
    </div>
  </nav>;
}
