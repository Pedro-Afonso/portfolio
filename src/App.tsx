import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppNavbar } from "./shared/components/AppBar";
import { CssBaseline } from "@mui/material";

import { AppThemeProvider } from "./shared/context";

export const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppThemeProvider>
        <AppNavbar />
        <AppRoutes />
      </AppThemeProvider>
    </BrowserRouter>
  );
};
