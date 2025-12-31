import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage';
import Resources from './pages/Resources/Resources';
import Podcasts from './pages/Podcasts/Podcasts';
import News from './pages/News/News';
import NotFoundPage from './pages/Notfound/NotFound.tsx';
import './global.css'

function App() {
  return (
    <>   
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
