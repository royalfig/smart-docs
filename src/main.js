import "./assets/scss/index.scss";
import App from "./App.svelte";
import "../node_modules/highlight.js/styles/monokai-sublime.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
