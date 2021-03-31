import { MdxPlaceDescriptionFormatter } from 'components/mdx/style-wrapper/defaults';
import { useManagedNavbar } from 'components/navbar/managedNavbar';
import { usePlacesSections } from 'hooks/navbar/places';
import React from 'react';
import ReactDOM from 'react-dom';
import TestMdxComponent from './content/helloWorld.content.mdx';

function App() {
  const placesSections = usePlacesSections();

  const [navbarEl, selection] = useManagedNavbar({
    brandElement: "DHBW Karlsruhe Infosite",
    leftSections: [...placesSections],
    rightSections: [
      {
        name: "Contact information",
        items: [
          { name: "Contact us" }
        ]
      }
    ]
  });

  return <>
    {navbarEl}
    <MdxPlaceDescriptionFormatter>
      {<TestMdxComponent />}
    </MdxPlaceDescriptionFormatter>
  </>;
}

ReactDOM.render(<App />, document.querySelector("#app"));
