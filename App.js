const root = ReactDOM.createRoot(document.getElementById("root"));

const structure = React.createElement("div", { className: "parent" }, [
  React.createElement(
    "h1",
    { id: "child1", key: "1el" },
    "i am an h1 tag created by react "
  ),
  React.createElement(
    "h2",
    { id: "child2", key: "2el" },
    "i am an h2 tag created by react"
  ),
]);

const grandParent = React.createElement(
  "div",
  { className: "grandParent" },
  structure,
  structure
);

root.render(grandParent);
