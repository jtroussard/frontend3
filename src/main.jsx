import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthProvider.jsx';
import { AxiosProvider } from './context/AxiosContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { loadApiConfig, getAxiosInstance } from './api/axios.js';

loadApiConfig().then(() => {
  const axios = getAxiosInstance();

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <AxiosProvider value={axios}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </AxiosProvider>
    </StrictMode>
  );
});
