import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import  HomePage  from './Pages/HomePage/HomePage';
// import Login from './Pages/AuthPages/Login/Login';
// import Register from './Pages/AuthPages/Register/Register';
// import DashboardPage from './Pages/DashboardPage/DashboardPage';
import { Login ,HomePage ,Register, DashboardPage} from './Pages';
const App = () => {
  return (
  // <BrowserRouter>
    <div className="App">
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path ="/Login" element = {<Login/>}/>
        <Route path = "/Register" element = {<Register/>}/>
        <Route path='/Dashboard' element={<DashboardPage/>}/>
      </Routes>
    </div>
    // </BrowserRouter>
  );
};

export default App;
