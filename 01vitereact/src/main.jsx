import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherLink = 'Click me to visit Google!'
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  anotherLink
  // 'click me to visit google'

)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  reactElement
)


