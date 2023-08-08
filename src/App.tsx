import Home from "./pages/home/Home"
import ImageUploads from "./pages/adminPanel/ImageUploads"
import Newsletter from "./pages/newsletter/Newsletter"
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-[calc(100vh-theme(space.24))]">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/newsletter" element={<Newsletter/>}/>
          <Route path="/admin-panel" element={<ImageUploads/>}/>
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;