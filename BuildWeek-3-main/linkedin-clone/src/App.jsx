import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyNavbar from './components/MyNavbar';
import Homepage from './pages/Homepage';
import ProfilePage from './pages/ProfilePage';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';




function App() {

  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/profilepage/' element={<ProfilePage />} />
          <Route path='/profilepage/:profileId' element={<ProfilePage />} />
          <Route path='/jobpage' element={<JobPage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/jobpage' element={<JobPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
