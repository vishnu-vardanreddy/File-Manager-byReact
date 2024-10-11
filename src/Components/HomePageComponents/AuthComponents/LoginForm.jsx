import React from 'react'
import { signInUser } from '../../../redux/actionCreators/authActionCreator';
import { useDispatch } from 'react-redux';
const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const disptach = useDispatch();

    const handleSubmit = (e) =>
    {
      e.preventDefault();
      if(!email || !password)
      {
        alert("Please fill the details");
        return ;
      }
      disptach(signInUser(email,password));
    }

  return (
    <form autoComplete='off' onSubmit={handleSubmit }> 
        <div className="form-group my-2" >
            <input type="Email" name="email" className="form-control" placeholder='Email' value={email}   
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group my-2">
            <input type="password" name="password" className="form-control" placeholder='Password' value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type='submit' className="btn btn-primary my-2 form-control"> Login</button>
    </form>
  )
}
export default LoginForm