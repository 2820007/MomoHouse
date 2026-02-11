
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
 
   <BrowserRouter>
   <CartProvider>
     <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

        <Auth0Provider
      domain="dev-ls7gt7zfhd0al3ue.us.auth0.com"
      clientId="M92J1rzKSGQUZRaTlOU8BlMQWIeONDvW"
      authorizationParams={{
      redirect_uri: window.location.origin

      }}
    >
      <App />
    </Auth0Provider>

   </CartProvider>
    
   </BrowserRouter>
 
)
