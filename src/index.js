import React from "react";
import ReactDOM from "react-dom/client";

// look at the extension below , all three works it treats all three as JS
import Header from "./Header.jsx";
import Body from "./Body.js";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<AppLayout />);
