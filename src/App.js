import React from "react";
import ReactDOM from "react-dom/client";
// import resList, { name } from "../data/restaurant";
import Header from "./components/Header";
import Body from "./components/Body";

// const StyleCard = {
//   backgroundColor: "#f0f0f0",
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
