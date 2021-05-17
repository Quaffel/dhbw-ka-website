import { MdxPlaceDescriptionFormatter } from 'components/mdx/style-wrapper/defaults';
import { useManagedNavbar } from 'components/navbar/managedNavbar';
import { NavbarItem, NavbarSection } from 'components/navbar/navbar';
import { usePlacesSiteSections } from 'hooks/navbar/places';

import React from 'react';
import ReactDOM from 'react-dom';
import ContentProcrastination from './content/misc/procrastination.content.mdx';
import ContentContact from './content/contact.content.mdx'

export interface SiteNavbarItem extends NavbarItem {
  siteContent: React.ReactNode
}

export interface SiteNavbarSection extends NavbarSection {
  siteContent?: React.ReactNode,
  items: Array<SiteNavbarItem>
}

function App() {
  const placesSections = usePlacesSiteSections();
  const procrastinationSection = React.useMemo<SiteNavbarSection>(() => ({
    name: "guides",
    items: [
      {
        name: "how to deal with procrastination",
        siteContent: ContentProcrastination
      }
    ]
  }), []);
  const contactSection = React.useMemo<SiteNavbarSection>(() => ({
    name: "Contact information",
    items: [
      {
        name: "Contact us",
        siteContent: ContentContact
      }
    ]
  }), []);

  let [navbarEl, selection] = useManagedNavbar({
    brandElement: "DHBW Karlsruhe Infosite",
    leftSections: [...placesSections],
    rightSections: [contactSection]
  });

  const ContentSite = React.useMemo<any>(() => {
    const selectableSections = [...placesSections, contactSection];
    const selectedSection = selectableSections.find(it => it.name === selection?.section);

    let result = selectedSection?.siteContent;

    if (selectedSection) {
      const selectedItem = selectedSection.items.find(it => it.name === selection?.item);
      result = selectedItem?.siteContent || result;
    }

    return result;
  }, [selection, placesSections, contactSection]) ?? contactSection.items[0].siteContent;

  return <>
    {navbarEl}
    <MdxPlaceDescriptionFormatter>
      <ContentSite />
    </MdxPlaceDescriptionFormatter>
  </>;
}

ReactDOM.render(<App />, document.querySelector("#app"));
