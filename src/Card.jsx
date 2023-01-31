import React from "react";

import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

export default function Card(props) {
  return (
    <div className="card-body">
      <Info name={props.name} />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
