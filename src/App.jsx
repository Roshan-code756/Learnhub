import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Group from './pages/Group'
import Pricing from './pages/Pricing'
import Testmoials from './pages/Testmoials'
import Mentor from './pages/Mentor'
import Course from './pages/Course'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
return(
   <BrowserRouter>
   <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mentor" element={<Mentor />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Group" element={<Group />} />
        <Route path="/Testmoials" element={<Testmoials />} />
        <Route path="/Course" element={<Course />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
)
}

export default App
