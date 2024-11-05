import './App.css'
import ContactCard from './components/Contacts';
import FoodGallery from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoCard from './components/Video';
import ColorSchemesExample from './components/bajeris';
import ResponsiveNavbar from './components/Nav';
function App() {

  return (
    <>
      <ResponsiveNavbar />
      <ColorSchemesExample />
      <FoodGallery />
      <VideoCard />
      <ContactCard />
    </>
  )
}

export default App
