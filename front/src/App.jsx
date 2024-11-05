import './App.css'
import ContactCard from './components/Contacts';
import FoodGallery from './components/Hero';
import ResponsiveNavbar from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoCard from './components/Video';
function App() {

  return (
    <>
      <ResponsiveNavbar />
      <FoodGallery />
      <VideoCard />
      <ContactCard />
    </>
  )
}

export default App
