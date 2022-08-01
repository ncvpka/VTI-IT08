// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
// import HelloFunctionCom from './components/HelloFunctionComp';
// import FormFC from './components/FormFC';
// import HelloCC from './components/HelloCC';
// import AddComponent from './components/AddComponent';
// import Welcome from './components/Welcome';
import Browser from './components/Browser';
import SignInForm from './components/SignInForm';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SignInForm/>)