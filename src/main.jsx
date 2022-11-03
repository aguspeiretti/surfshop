import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux"
import store from "./components/redux/reducer/store"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxTayNp90R7vf3ntnvIZVZBAQEk2Jp6y4",
  authDomain: "mdq-surf.firebaseapp.com",
  projectId: "mdq-surf",
  storageBucket: "mdq-surf.appspot.com",
  messagingSenderId: "986564549410",
  appId: "1:986564549410:web:fef2eb08d5f25c5334237b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} > 
    <App />
 </Provider>
)
