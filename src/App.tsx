import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage';
import Resources from './pages/Resources/Resources';
import Podcasts from './pages/Podcasts/Podcasts';
import News from './pages/News/News';
import NotFoundPage from './pages/Notefound/NoteFound';
import Header from './components/Header/header';
import './global.css'

function App() {
  return (
    <>   
      <Header />
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/podcasts' element={<Podcasts/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </>
  )
}

export default App
