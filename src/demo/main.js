import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(React.createElement(React.StrictMode, null,
        React.createElement(App, null)));
}
