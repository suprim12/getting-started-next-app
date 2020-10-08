import { SuprimThemeProvider, theme } from "suprim-ui";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SuprimThemeProvider theme={theme.default}>
      <Component {...pageProps} />
    </SuprimThemeProvider>
  );
}

export default MyApp;
