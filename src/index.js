import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import "./styles/icons/icons.css";
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);