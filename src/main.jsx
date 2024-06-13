import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Details from './Componenets/Details.jsx'
import Tweet from './Componenets/Tweet.jsx'
import Home from './Componenets/Home.jsx'
import { store } from './store/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([{

    path : "/",
    element : <App />,
    children : [
      {
        path : "",
        element : <Home />
      },
      
      {
        path : "Post",
        element : <Tweet />
      },
      {
        path : "Details",
        element : <Details />
      },
      
    ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
 <RouterProvider router={router} />
    </Provider>
   
  </React.StrictMode>,
)
