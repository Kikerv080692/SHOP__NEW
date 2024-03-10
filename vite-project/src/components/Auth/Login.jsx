import AuthContainer from "./AuthContainer.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";


const Login = () => {
    const navigate = useNavigate()
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    console.log('password', password)
    console.log('email', email)

    const user = {
        password,
        email
    }
    const signIn = () => {
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/')
    }


    return (

        <AuthContainer>
            <div className="login">
                <h1 className="login__title">Login</h1>
                <form className="login__form">
                    <div className="form__control">
                        <input
                            className="login__input"
                            type="email"
                            placeholder='E-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form__control">
                        <input
                            className="login__input"
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button onClick={signIn} >
                        Login
                    </button>
                </form>
                <p className="login__info">
                   <span> Have you account?</span>
                    <Link to='/register'>Sign up</Link>
                </p>
            </div>
        </AuthContainer>
    )
}
export default Login