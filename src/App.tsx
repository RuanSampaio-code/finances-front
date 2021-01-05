import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import "~/config/ReactotronConfig";

import Routes from "./routes";
// import history from "~/services/history";

import { store, persistor } from "./store";

import GlobalStyles from "~/styles/global";
import defaultTheme from "~/styles/themes/default";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <Router>
            <Routes />
            <GlobalStyles />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
