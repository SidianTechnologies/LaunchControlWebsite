import Footer from "./components/Footer"
import Home from "./pages/home/Home"
import ImageUploads from "./pages/imageUploads/ImageUploads"
import Newsletter from "./pages/newsletter/Newsletter"
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newsletter" element={<Newsletter/>}/>
        <Route path="/imageUploads" element={<ImageUploads/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;