import React, { useEffect } from "react";
import "../../assests/styles/app.scss";
import { ErrorBoundary } from "../common";
import { SelectorContainer as Selector } from "../selector";
import { ConvertContainer as Convert } from "../convert";

const App = ({ fetchCurrencies }) => {
  useEffect(() => {
    fetchCurrencies();
  });
  return (
    <div className={"app"}>
      <h1 className={"title"}>Exchange Rates</h1>
      <ErrorBoundary>
        <Selector />
      </ErrorBoundary>
      <ErrorBoundary>
        <Convert />
      </ErrorBoundary>
    </div>
  );
};

export default App;
