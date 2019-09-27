import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "./components/common/error-boundary";
import { Provider } from "react-redux";
import {AppContainer as App} from "./components/app";
import {store} from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
