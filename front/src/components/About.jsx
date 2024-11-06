import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function FluidExample() {
  return (
    <>
     <Container style={{ height: '140px' }}  className="bg-body-tertiary">
      <h1 style={{ paddingTop: '20px' }} className="w-100 mt-5 text-center" >Food is my Passion!</h1>
     <p className="w-100 mt-5 text-center">CATERING & IVENTS PROFESSIONAL PRIVAT CHEF</p>
     </Container>
<Container >
    <Image className="w-100 mb-2" src="/vegetable-pan-8027678_640.jpg" fluid />
</Container>
    </>
  )
}

export default FluidExample;