import React from "react";
import Nav from "./Nav";
import "./Nav.css";
import Body from "./Body";
import "./Body.css";
import Body2 from "./Body2";
import "./Body2.css";
import Contact from "./Contact";
import "./Contact.css";

function App() {
  return (
    <div>
      <Nav classname="navbar" />

      <Body classname="body1" />

      <Body2 classname="body2" />

      <Contact classname="contact" />
    </div>
  );
}

export default App;
