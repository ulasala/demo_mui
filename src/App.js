import Home from './Screens/Home';
import { Header } from './Components/Header';
import Tailwind from './Screens/Tailwind';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tailwind" element={<Tailwind />} />
      </Routes>
    </div>
  );
}

export default App;
