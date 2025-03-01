import './App.css';
import { Route, Routes } from 'react-router-dom';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import Register from './Components/Register';
import Services from './Components/Services';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Home showServices />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/login/register" element={<Register />} />
      <Route path="/*" element={<h1>404 Error</h1>} />
    </Routes>
  );
};

export default App;
