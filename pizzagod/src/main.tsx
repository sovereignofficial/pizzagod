import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { App } from './app';
import { pizzaData } from './lib/data';


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <App pizzaData={pizzaData} />
    </React.StrictMode>
)