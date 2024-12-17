import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement("h1", { id: "title" }, "My name Is Amresh kumar Gupta");
// const alement1 = React.createElement(
//   "h1",
//   { id: "title", key: "h1" },
//   "Heading 1"
// );
// console.log(alement1);
// const alement2 = React.createElement(
//   "h2",
//   { id: "title2", key: "h2" },
//   "Heading 2"
// );

// const container = React.createElement("div", { id: "div1" }, [
//   alement1,
//   alement2,
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);

const title = () => {
  return <h1>Namast Amresh </h1>;
};
const ale = <h1>This is react element</h1>;
const Header = () => {
  return (
    <>
      {" "}
      {title()}
      {ale}
      <h1>Component</h1>
      <h3>This is react component</h3>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
