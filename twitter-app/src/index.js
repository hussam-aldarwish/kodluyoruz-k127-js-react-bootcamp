import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ConnectedRouter } from "connected-react-router";
import { HashRouter } from "react-router-dom";
import { createHashHistory } from "history";
import createStore from "./redux/createStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const history = createHashHistory({ basename: baseUrl });

const { store, persistor } = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <HashRouter>
          <App />
        </HashRouter>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
