import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './Pages/HomePage/HomePage';

const App = () => {
  return (
  <BrowserRouter>
    <div className="App">
      <Routes>
         <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
