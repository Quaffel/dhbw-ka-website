import React from 'react';
import { isNonEmptyArray, NonEmptyArray } from 'types/utilityTypes';
import Navbar, { NavbarItem, NavbarSection } from './navbar';

export function useManagedNavbar({
  brandElement,
  leftSections,
  rightSections,
  onSelectionChanged
}: {
  brandElement: React.ReactElement | string,
  leftSections: NonEmptyArray<Omit<NavbarSection, 'styleOptions'>>,
  rightSections: NonEmptyArray<Omit<NavbarSection, 'styleOptions'>>,
  onSelectionChanged?: (selection: { section: string, item: string | null } | null) => void
}): [element: React.ReactElement, selection: { section: string, item: string | null } | null] {
  const [selected, setSelected] = React.useState<{ section: string, item: string | null } | null>(null);

  function onSelection(section: string, item: string | null) {
    setSelected({ section, item });

    if (onSelectionChanged) {
      onSelectionChanged(selected);
    }
  }

  const [styledLeftSections, styledRightSections] = React.useMemo(() => {
    function buildFocussed<T extends NavbarSection | NavbarItem>(target: T): T & { styleOptions: { focussed: boolean } } {
      console.log("Selected: ", target);
      return { ...target, styleOptions: { focussed: true } };
    }

    function buildFocussedSection(section: NavbarSection): NavbarSection {
      const focussedSection = buildFocussed(section);

      // Fast path: No item is selected, so leave items as-is.
      const selectedItem = selected?.item;
      if (selectedItem === null) {
        return focussedSection;
      }

      return {
        ...focussedSection,
        items: focussedSection.items.map(it => it.name === selectedItem ? buildFocussed(it) : it)
      };
    }

    const selectedSection = selected?.section;
    // Fast path: Nothing is selected, so leave sections as-is.
    if (selectedSection === null) {
      return [leftSections, rightSections];
    }

    return [
      leftSections.map(it => it.name === selectedSection ? buildFocussedSection(it) : it),
      rightSections.map(it => it.name === selectedSection ? buildFocussedSection(it) : it)
    ];
  }, [leftSections, rightSections, selected]);

  if (!isNonEmptyArray(styledLeftSections) || !isNonEmptyArray(styledRightSections)) {
    throw new Error("Sections must not be empty");
  }

  const el = <Navbar brandElement={brandElement}
    leftSections={styledLeftSections} rightSections={styledRightSections}
    onSelection={onSelection}
  />;

  return [el, selected];
}
