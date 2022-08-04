import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoCard from './components/TodoCard';
import CardManager from './components/CardManager';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CardManager />);