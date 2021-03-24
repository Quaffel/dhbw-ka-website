import Navbar from 'components/navbar/navbar';
import React from 'react';
import ReactDOM from 'react-dom';
import TestMdxComponent from "../content/helloWorld.mdx";

function App() {
  return <>
    <Navbar
      brandElement="Test brand"
      leftSections={[
        {
          name: "Section #1",
          items: [
            { name: "Category 1.1" },
            { name: "Category 1.2" }
          ]
        },
        {
          name: "Section #2",
          items: [
            {name: "Category 2.1" },
            {name: "Category 2.2" }
          ]
        }
      ]}
      rightSections={[
        {
          name: "Contact information",
          //content: null,
          items: [
            { name: "Contact us" }
          ]
        }
      ]}
    ></Navbar>
    <h1>Hello world from jsx!</h1>
    {<TestMdxComponent />}
  </>;
}

ReactDOM.render(<App />, document.querySelector("#app"));
