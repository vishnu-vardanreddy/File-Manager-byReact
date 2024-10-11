import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpUser } from '../../../redux/actionCreators/authActionCreator';  // Uncomment when signUpUser is available

const RegisterForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !passwordConfirmation) {
            alert("Please fill all the details");
            return;
        }
        if (password !== passwordConfirmation) {
            alert("Passwords do not match");
            return;
        }
         dispatch(signUpUser(name, email, password)); // Uncomment when signUpUser is available
    };

    return (
        <form autoComplete='off' onSubmit={handleSubmit}>
            <div className="form-group my-2">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="User Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group my-2">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group my-2">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group my-2">
                <input
                    type="password"
                    name="passwordConfirmation"
                    className="form-control"
                    placeholder="Re-type Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary my-2 form-control">
                Register
            </button>
        </form>
    );
};

export default RegisterForm;
