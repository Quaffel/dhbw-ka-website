import React from 'react';
import ReactDOM from 'react-dom';
import TestMdxComponent from "../content/helloWorld.mdx";

function App() {
  return <div>
    <h1>Hello world from jsx!</h1>
    {<TestMdxComponent/>}
  </div>;
}

ReactDOM.render(<App/>, document.querySelector("#app"));
