import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/global.css';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
        <Route path="/terms-conditions" element={<MainLayout><TermsConditions /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="*" element={
          <MainLayout>
            <div className="d-flex flex-column align-items-center justify-content-center text-center py-5" style={{minHeight: '60vh'}}>
              <div style={{fontSize: '5rem'}}>✈</div>
              <h2 className="fw-800 mt-3 mb-2">Page Not Found</h2>
              <p style={{color: 'var(--text-muted)'}}>This destination doesn't exist yet.</p>
              <a href="/" className="btn btn-submit mt-3">Back to Home</a>
            </div>
          </MainLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
