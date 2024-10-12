import {useEffect} from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/DashboardComponents/Navbar/Navbar';
import SubBar from '../../Components/DashboardComponents/SubBar/SubBar';
const DashboardPage = () => {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isLoggedIn)
    {
      navigate('/');
    }
  },[]);
  return (
    <>
      <Navbar/>
      <SubBar/>

    </>
  )
};
export default DashboardPage;
