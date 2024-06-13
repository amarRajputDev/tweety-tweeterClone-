
import Navbar from './Componenets/Navbar'
import Footer from './Componenets/Footer'
import Card from './Componenets/Card'
import Post from './Componenets/Post'
import { Outlet } from 'react-router-dom'


function App() {


  return (
   <>
  <Navbar />
 <Outlet />
  <Footer />
   </>
  )
}

export default App
