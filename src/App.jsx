// App.js
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import OurLeadership from './pages/OurLeadership.jsx';
import Recruitment from './pages/Recruitment.jsx';
import ProductSection from './pages/ProductSection.jsx';
// import LifeAtDotsito from './pages/LifeAtDotsito.jsx';
import "./App.css";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/about" element={<About />} />  
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product" element={<ProductSection />} />  
            <Route path="/contact" element={<Contact />} />  
            <Route path="/careers" element={<Careers />} />  
            <Route path="/recruitment" element={<Recruitment />} />  
            <Route path="/about/ourleadership" element={<OurLeadership />} />
            {/* <Route path="/about/life" element={<LifeAtDotsito />} /> */}
          </Routes>
        </main>
      </Layout>
    </Router>
  );
}

export default App;
