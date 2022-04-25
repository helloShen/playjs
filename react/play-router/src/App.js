import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Item from './Item';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Item />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;