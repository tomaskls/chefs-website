import './App.css'
import ContactCard from './components/Contacts';
import FoodGallery from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoCard from './components/Video';
import ResponsiveNavbar from './components/Nav';
import { MyGallery } from './components/Gallery';
import FluidExample from './components/About';
import { Footer } from './components/Footer';
function App() {

  return (
    <>
      <ResponsiveNavbar />
      <FluidExample />
      <FoodGallery />
      <VideoCard />
      <MyGallery />
      <ContactCard />
      <Footer />
    </>
  )
}

export default App
