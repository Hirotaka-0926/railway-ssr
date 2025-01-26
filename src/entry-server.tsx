import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

/**
 * @param {string} _url
 */
interface RenderResult {
  html: string; 
}

export function render(): RenderResult {
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
  return { html };
}
