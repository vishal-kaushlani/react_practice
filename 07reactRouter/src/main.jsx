// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18+
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// // Create root
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Render the app wrapped with BrowserRouter
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// Import or define the Layout component
import Layout from './layout.jsx';
import Contact from './components/contact/contact.jsx';
import User from './components/user/user.jsx';
import Github, {githubInfoLoader} from './components/github/github.jsx';


//alternate method to define routes

// Create the router with proper structure
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />, // Wrap routes inside Layout
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ]);

//alternate method to define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={< Layout/>}>
      <Route path='' element={< Home/>} />
      <Route path='about' element={< About/>} />
      <Route path='contact' element={< Contact/>} />
      <Route path='user/:userid' element={< User/>} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);


