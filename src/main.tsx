import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const theme = {
  colors: {
    primary: "#32a071",
    secondary: "#2DA771",
    background: "#C7F0DF",
    grey: "rgba(0, 0, 0, 0.5)",
    green: "#00502e",
    buttonBackground: "#c7f0df",
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
