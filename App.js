import React from "react";
import ReactDOM from "react-dom/client";


// const heading=React.createElement("h1",{id:"heading"},"Hello world using react js");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//Nested str in react

/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */

// const parent= React.createElement("div",{id:"parent"} ,
//               React.createElement("div",{id:"child"},
//               React.createElement("h1",{},"I am H1 Tag")
//               )
// );


///----------Sibings----------

/* <div id="parent">
    <div id="child">
        <h1>I am H1 tag</h1>
        <h2>I am H2 Tag</h2>
    </div>
</div> */

// const parent= React.createElement("div",{id:"parent"} ,
//               React.createElement("div",{id:"child"},
//               [React.createElement("h1",{},"I am H1 Tag"), React.createElement("h2",{},"I am H2 Tag") ]
//               )
// );

// -------two child-------
/* <div id="parent">
    <div id="child1">
        <h1>I am H1 tag</h1>
        <h2>I am H2 Tag</h2>
    </div>

    <div id="child2">
        <h1>I am H1 tag</h1>
        <h2>I am H2 Tag</h2>
    </div>

</div> */



// const parent= React.createElement("div",{id:"parent"} ,
//               [React.createElement("div",{id:"child1"},
//               [React.createElement("h1",{},"I am H1 Tag"), React.createElement("h2",{},"I am H2 Tag") ]
//               )] ,
//               [React.createElement("div",{id:"child2"},
//               [React.createElement("h1",{},"I am H1 Tag"), React.createElement("h2",{},"I am H2 Tag") ]
//               )]
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// JSX --> its HTML like syntax . It is not html in javascript 
// How to create h1 in JSX
//JSX ---> Transpiled before it reaches to JS engine --> by parcel --> parcel give resposibility to a pacakage Babel 
// JSX ---> Babel transpile it to React.createElement() ---> react element ---> JS object --> HTML element ( render browser understand)

const jsxHeading = <h1 className="head">Nameste React Js using JSX (react element)</h1>;

//MultiLine JSX 
const jsxHeading1 =(
   <h1 className="head">
    {jsxHeading}
    Nameste React Js using JSX Multiline (react element);
    </h1>
    );

//React functional component 

const HeadingComponent = ()=>{

    return <h1>React funactional component</h1>;
};

// Multiline React functional component 

const Title= ()=>( 
    <h1>Nupur Gupta react component</h1>
    );

const number =1000;

const HeadingComponent1 = ()=>( 
    <div id="container">
    {jsxHeading1}
    {Title()}
    <Title></Title>
   <Title> </Title>
   <h2>{number}</h2>
<h1 className="heading">React functional component</h1>
</div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1/>);






