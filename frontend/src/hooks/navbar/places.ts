import { NavbarItem, NavbarSection } from 'components/navbar/navbar';
import { places } from '../../content/index';

import * as React from 'react';
import { isNonEmptyArray, NonEmptyArray } from 'types/utilityTypes';
import { SiteNavbarItem, SiteNavbarSection } from 'index';

export function usePlacesSiteSections(): NonEmptyArray<SiteNavbarSection> {
  const sections = React.useMemo<Array<SiteNavbarSection>>(() => {
    return Object.entries(places)
      .map(([categoryName, categoryPlaces]) => {
        const placesItems: Array<SiteNavbarItem> = categoryPlaces.map(place => ({
          name: place.info.name,
          siteContent: place.content
        }));

        return {
          name: categoryName,
          items: placesItems
        };
      });
  }, [places]);

  if (!isNonEmptyArray(sections)) {
    throw new Error("No places found");
  }

  return sections;
}
