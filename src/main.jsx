import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";

import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from './store.js';
import { ToastProvider } from './utils/toast.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
<ToastProvider>

      <App />
      </ToastProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>

  
)
