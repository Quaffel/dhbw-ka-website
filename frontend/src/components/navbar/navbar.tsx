import navbarStyles from './navbar.module.scss';

import React from 'react';
import { buildClassNames } from 'components/style/styleHelper';
import { NonEmptyArray } from 'types/utilityTypes';

export interface NavbarSection {
  name: string,
  content?: React.ReactElement | null,
  items: Array<NavbarItem>
}

export interface NavbarItem {
  name: string,
  content?: React.ReactElement | null
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
    onSelection?: (section: NavbarSection, item: NavbarItem | null) => void
  }
): React.ReactElement {
  const [leftSectionElements, rightSectionElements] = React.useMemo(() => {
    function buildSectionElement(section: NavbarSection): React.ReactElement {
      const buildSectionHeaderElement = (() => {
        if (section.content === null) {
          console.log("NULL");
          return <></>;
        } else if (section.content === undefined) {
          return <h1 onClick={() => onSelection && onSelection(section, null)}>{section.name}</h1>;
        } else {
          return <div onClick={() => onSelection && onSelection(section, null)}>{section.content}</div>;
        }
      });
      const buildSectionItemElement = ((item: NavbarItem) => {
        if (item.content === null) {
          return <></>;
        }
        return <li key={item.name} onClick={() => onSelection && onSelection(section, item)}>
          {item.content ?? item.name}
        </li>;
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
