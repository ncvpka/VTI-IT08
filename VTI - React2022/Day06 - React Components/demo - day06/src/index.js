import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';
import HelloFunctionCom from './components/HelloFunctionComp';
import FormFC from './components/FormFC';
import HelloCC from './components/HelloCC';
import AddComponent from './components/AddComponent';
import Welcome from './components/Welcome';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Welcome/>)

