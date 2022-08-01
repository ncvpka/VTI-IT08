import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import Alert from './components/Alert';
import StudentInfoComponent from './components/StudentInfoComponent';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<StudentInfoComponent />);
