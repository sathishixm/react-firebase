import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './index.scss';
const root = createRoot(document.getElementById('root'));

root.render(<div>
    <React.StrictMode>
        <BrowserRouter>
        <App></App>
        </BrowserRouter>
    </React.StrictMode>
</div>)

