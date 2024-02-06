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



const parent= React.createElement("div",{id:"parent"} ,
              [React.createElement("div",{id:"child1"},
              [React.createElement("h1",{},"I am H1 Tag"), React.createElement("h2",{},"I am H2 Tag") ]
              )] ,
              [React.createElement("div",{id:"child2"},
              [React.createElement("h1",{},"I am H1 Tag"), React.createElement("h2",{},"I am H2 Tag") ]
              )]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);