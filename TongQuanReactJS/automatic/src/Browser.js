import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Browser = () => {
    return <h4>Browser's details: {navigator.userAgent}</h4>
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Browser />);

reportWebVitals();
