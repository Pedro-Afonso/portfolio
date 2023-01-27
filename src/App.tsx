import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppNavbar } from "./shared/components/AppBar";
import { Modal } from "./shared/components/Modal";
import { CssBaseline } from "@mui/material";

import { AppThemeProvider } from "./shared/context";
import { Provider } from "react-redux";
import { store } from "./shared/config/store";

export const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppThemeProvider>
        <Provider store={store}>
          <Modal />
          <AppNavbar />
          <AppRoutes />
        </Provider>
      </AppThemeProvider>
    </BrowserRouter>
  );
};
