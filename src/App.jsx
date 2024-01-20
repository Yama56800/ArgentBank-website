import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Sign_in from './pages/Sign-in/Sign-in';
import Sign_up from './pages/Sign-up/Sign-up';
import User from './pages/User/User';
import Error from './pages/Error/Error';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
	        <Route path="/Sign-In" element={<Sign_in />} />
	        <Route path="/Sign-up" element={<Sign_up />} />
	        <Route path="/User" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;