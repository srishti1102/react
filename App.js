 const parent =React.createElement("div",{id:"parent"},[
       React.createElement("div",{id:"child"},[
              React.createElement("h1",{},"I am an h1 tag"),
              React.createElement("h2",{},"i am an h2 tag"),
       ]),
       React.createElement("div",{id:"child"},[
              React.createElement("h1",{},"I am an h1 tag"),
              React.createElement("h2",{},"i am an h2 tag"),
       ]),
 ]);
 const heading= React.createElement("h1",{id:"heading"},"hello");
 const root= ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);
       