import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Login = props => {
    const authContext = useContext(AuthContext)
    const alertContext = useContext(AlertContext)

    const { setAlert } = alertContext;
    const { loginUser, error, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }
        if(error === 'Invalid credentials') {
            setAlert(error, 'danger');
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })
    
    const onSubmit = e => {
        e.preventDefault();
        if (email ===  '' || password === '') {
            setAlert('Please complete all fields', 'danger')
        } else {
            loginUser({
                email,
                password
            })
        }
    }

    return (
        <div className="form-container" onSubmit={onSubmit}>
            <h1>Account Login</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Login
