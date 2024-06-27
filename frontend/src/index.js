import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Access the VITE_CLERK_PUBLISHABLE_KEY environment variable
const PUBLISHABLE_KEY = "pk_test_dXNhYmxlLWVsay01MC5jbGVyay5hY2NvdW50cy5kZXYk"; // Replace with your actual key

// Check if the key exists and throw an error if not
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter> {/* Wrap App with BrowserRouter */}
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);

