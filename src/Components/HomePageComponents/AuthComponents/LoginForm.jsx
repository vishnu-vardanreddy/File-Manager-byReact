import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../../../redux/actionCreators/authActionCreator';

const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [success, setSuccess] = React.useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Effect to handle navigation on success
    React.useEffect(() => {
        if (success) {
            navigate("/dashboard");  // Redirect to dashboard when login is successful
        }
    }, [success, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill all the details");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const result = await dispatch(signInUser(email, password));  // Dispatch the action
            if (result.success) {
                setSuccess(true);  // Set success after login success
            } else {
                setError(result.error);  // Set error if login fails
            }
        } catch (err) {
            setError("An unexpected error occurred");
            console.error("Login error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
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
            <button
                type="submit"
                className="btn btn-primary my-2 form-control"
                disabled={isLoading}
            >
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
};

export default LoginForm;
