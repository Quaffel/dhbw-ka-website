import navbarStyles from './navbar.module.scss';

import React from 'react';
import { buildClassNames } from 'components/style/styleHelper';

interface NavbarSection {
  name?: string,
  items: Array<string | React.ReactElement>;
}

export default function Navbar(
  {
    brandElement,
    leftSections,
    rightSections
  }: {
    brandElement: React.ReactElement | string,
    leftSections: Array<NavbarSection>,
    rightSections: Array<NavbarSection>
  }
): React.ReactElement {
  function buildSectionElement(section: NavbarSection): React.ReactElement {
    return <div className={navbarStyles["section"]}>
      <h1>{section.name}</h1>
      <ul>
        {section.items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>;
  }

  const [collapsed, setCollapsed] = React.useState<boolean>(true);

  function toogleCollapsed() {
    setCollapsed(previous => !previous);
  }

  return <nav>
    <div className={buildClassNames(navbarStyles, ["section-group", "brand"], [["collapsed"]], [collapsed])} onClick={toogleCollapsed}>
      {brandElement}
    </div>
    <div className={navbarStyles["ruler"]} />
    <div className={buildClassNames(navbarStyles, ["expansion-card"], [["collapsed"]], [collapsed])}>
      <div className={buildClassNames(navbarStyles, ["section-group", "section-group-primary"], [["collapsed"]], [collapsed])}>
        {leftSections.map(section => buildSectionElement(section))}
      </div>
      <div className={navbarStyles["ruler"]} />
      <div className={buildClassNames(navbarStyles, ["section-group", "section-group-secondary"], [["collapsed"]], [collapsed])}>
        {rightSections.map(section => buildSectionElement(section))}
      </div>
    </div>
  </nav>;
}
