import React, { Suspense } from "react";
import ReactDOM from "react-dom";

// Instead of using the  --- Import Header from "home/Header" --
// we are going to use the following
// to allow the app for async call
const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    {/* By Wrapping our Header into Suspense we are allowing the lazy load */}
    <SafeComponent>
      <Suspense fallback={<div>Loading</div>}>
        <Header />
      </Suspense>
    </SafeComponent>
    <div className="my-10">PDP Page Content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
