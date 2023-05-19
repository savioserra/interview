import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CartProvider from "./context/Cart";
import App from "./pages/App";
import "semantic-ui-css/semantic.min.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
  rootElement
);
