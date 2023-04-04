
/* *

<div id="parent">
    <div id="child">
      <h1>I am a H1</h1>
      <h1> I am an h2 tage</h2>
    </div>
    <div id="child">
      <h1>I am a H1</h1>
      <h1> I am an h2 tage</h2>
    </div>
</div>

React Element that the browser understands

*/

const parent=React.createElement(
    "div",
    {id:"parent"},
   [ React.createElement(
        "div",
        {id:"child"},
        [ React.createElement( "h1", {},"I am an H1 tag"),
        React.createElement( "h2", {},"I am an H2 tag")]
     ),
     React.createElement(
        "div",
        {id:"child2"},
        [ React.createElement( "h1", {},"I am an H1 tag"),
        React.createElement( "h2", {},"I am an H2 tag")]
     )]
    
)

console.log(parent);

    const root= ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);

const hello = React.createElement(
    "h1",
    {id:"h1id"},
    "Hello World from React");

    console.log(hello);

    const helloworld= ReactDOM.createRoot(document.getElementById("hello"));

    helloworld.render(hello);