import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import NotFoundPage from './components/NotFoundPage'
import Detail from './components/Detail'

function App() {
  

  return (
    <div>
      <Header />
      {/* <Home/> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/movies/detail/:movieId' element={<Detail/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </div>
  )
}

export default App
