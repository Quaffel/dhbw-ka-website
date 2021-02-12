import React from 'react';
import ReactDOM from 'react-dom';
import TestMdxComponent from "../content/helloWorld.mdx";

function App() {
  return <div>
    {<TestMdxComponent/>}
  </div>;
}

ReactDOM.render(<App/>, document.querySelector("#app"));
