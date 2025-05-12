import { Buffer } from 'buffer';
if (!window.Buffer) window.Buffer = Buffer;   // ← imprescindible

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);