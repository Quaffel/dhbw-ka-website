import React from 'react';
import type { NonEmptyArray } from 'types/utilityTypes';
import Navbar, { NavbarItem, NavbarSection } from './navbar';

export function useManagedNavbar({
  brandElement,
  leftSections,
  rightSections,
  onSelectionChanged
}: {
  brandElement: React.ReactElement | string,
  leftSections: NonEmptyArray<NavbarSection>,
  rightSections: NonEmptyArray<NavbarSection>,
  onSelectionChanged?: (selection: { section: string, item: string | null } | null) => void
}): [element: React.ReactElement, selection: { section: string, item: string | null } | null] {
  const [selected, setSelected] = React.useState<{ section: string, item: string | null } | null>(null);

  function onSelection(section: string, item: string | null) {
    setSelected({ section, item });

    if (onSelectionChanged) {
      onSelectionChanged(selected);
    }
  }

  function setFocussed(target: NavbarSection | NavbarItem | null | undefined, value: boolean) {
    if (!target) {
      return;
    }

    if (target.styleOptions) {
      target.styleOptions.focussed = value;
    } else {
      target.styleOptions = { focussed: value };
    }
  }

  if (selected) {
    const selectedSection = [...leftSections, ...rightSections].find(it => it.name === selected?.section);
    const selectedItem = selected?.item ? selectedSection?.items.find(it => it.name === selected?.item) : null;

    setFocussed(selectedSection, true);
    setFocussed(selectedItem, true);
  }


  const el = <Navbar brandElement={brandElement}
    leftSections={leftSections} rightSections={rightSections}
    onSelection={onSelection}
  />;

  return [el, selected];
}
