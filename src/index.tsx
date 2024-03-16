import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bitcoin from './pages/Bitcoin';
import Ethereum from './pages/Ethereum';
import Dogecoin from './pages/Dogecoin';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="btc" element={<Bitcoin />} />
        <Route path="eth" element={<Ethereum />} />
        <Route path="doge" element={<Dogecoin />} />
        {/* <Route path ="posts" element={<Posts />} /> */}
        <Route path="*" element={<h1>Route does not exist</h1>} />
      </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
