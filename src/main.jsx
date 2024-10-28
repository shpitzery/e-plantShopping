import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux' // The Provider component enables all components in the application to access the Redux store.
import store from './store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 
    The App component is wrapped with the Provider component, with the Redux store passed as a prop. 
    This allows all components in the app to access and interact with the global state managed by Redux. 
    */}
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
)
