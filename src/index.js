import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { PersistGate } from "redux-persist/integration/react";
import history from "./utils/history";
import { store, persistor } from "./redux/store";
import App from "./App";
import theme from "./theme/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <Router history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
