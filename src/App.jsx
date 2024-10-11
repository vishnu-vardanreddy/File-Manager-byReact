import {useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { Login ,HomePage ,Register, DashboardPage} from './Pages';
import { checkIsLoggedIn } from './redux/actionCreators/authActionCreator';
const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkIsLoggedIn());
  },[]);
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
