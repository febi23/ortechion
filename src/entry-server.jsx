// Used only at build time by scripts/prerender.js to turn the app into static HTML,
// so search engines and link previews see the full page text without running JavaScript.
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export function render() {
  return renderToString(<App />);
}
