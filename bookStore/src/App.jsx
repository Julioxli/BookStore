import './App.css'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './contexts/Auth'


//components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
      <div>
      <AuthProvider>
      <Navbar />
      <Outlet />
      <Footer />
      </AuthProvider>
    </div>
  )
}

export default App
