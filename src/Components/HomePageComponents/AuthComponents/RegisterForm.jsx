import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpUser } from '../../../redux/actionCreators/authActionCreator';  // Uncomment when signUpUser is available
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        // Basic validation
        if (!name || !email || !password || !passwordConfirmation) {
            alert("Please fill all the details");
            return;
        }
        if (password.length < 6) {
            setError("Password should be at least 6 characters long");
            return;
        }
        if (password !== passwordConfirmation) {
            setError("Passwords do not match");
            return;
        }

        setIsLoading(true);
        // Uncomment when signUpUser is available
        dispatch(signUpUser(name, email, password, setSuccess))
            .catch((err) => {
                setError("An error occurred during registration");
                setIsLoading(false);
            });
    };

    // Navigate to dashboard if registration is successful
    React.useEffect(() => {
        if (success) {
            navigate("/dashboard");
        }
    }, [success, navigate]);

    return (
        <form autoComplete='off' onSubmit={handleSubmit}>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className="form-group my-2">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="User Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
                />
            </div>
            <button 
                type="submit" 
                className="btn btn-primary my-2 form-control"
                disabled={isLoading}
            >
                {isLoading ? 'Registering...' : 'Register'}
            </button>
        </form>
    );
};

export default RegisterForm;
