import navbarStyles from './navbar.module.scss';

import React from 'react';
import { buildClassNames } from 'components/style/styleHelper';
import { NonEmptyArray } from 'types/utilityTypes';

export interface NavbarSection {
  name: string,
  content?: React.ReactElement | null,
  items: Array<string | React.ReactElement>;
}

export default function Navbar(
  {
    brandElement,
    leftSections,
    rightSections
  }: {
    brandElement: React.ReactElement | string,
    leftSections: NonEmptyArray<NavbarSection>,
    rightSections: NonEmptyArray<NavbarSection>
  }
): React.ReactElement {
  const [leftSectionElements, rightSectionElements] = React.useMemo(() => {
    function buildSectionElement(section: NavbarSection): React.ReactElement {
      return <div className={navbarStyles["section"]}>
        {section.content ?? (section.content !== null ? <h1>{section.name}</h1> : <></>)}
        <ul>
          {section.items.map((item, index) => <li key={index}>{item}</li>)}
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
