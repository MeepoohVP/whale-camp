import { useState } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom"
import Refresh from "./components/Refresh";
import axios from "axios";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://10.4.53.25:4006/login',
            {
                email,
                password
            }
        )
        .then(response => {
            console.log(response.data);
            window.location.replace("/");
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    };
    const [eye, setEye] = useState(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
  <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
</svg>);
    const [type, setType] = useState('password');
    const showPassword = () => {
        if(type==='password'){
            setType('text');
            setEye(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>);
        } else{
            setType('password');
            setEye(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
              </svg>);
        }
    }
    return (
        <>
            <div className="w-full h-full absolute flex">
                <div className="relative w-[45%] flex items-center justify-center">
                    <form onSubmit={handleSubmit} method="post" className="relative w-[50%]">
                        <h1 className="font-semibold text-2xl">Sign in</h1>
                        <p className="mt-6 lg:text-sm">If you don’t have an account register</p>
                        <p className="lg:text-sm mb-4">You can <Link to="/signup" onClick={Refresh} className="text-[#0C21C1] font-semibold ml-2 mb-8 lg:text-sm">Register here !</Link></p>
                        <label htmlFor="email" className="text-[#999999] lg:text-sm">Email</label><br />
                        <div className="relative mt-2 mb-10 lg:text-sm">
                            <div className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                            </div>
                            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="email" placeholder="Enter your email address" className="border-b-[#999] w-full border-solid border-b-2 focus:border-x-none focus:border-t-none outline-none focus:border-b-black duration-300 pl-7 pb-1" />
                        </div>
                        <label htmlFor="password" className="text-[#999999] lg:text-sm">Password</label><br />
                        <div className="relative mt-2 lg:text-sm">
                            <div className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                                </svg>
                            </div>
                            <div className="absolute right-0 cursor-pointer" onClick={showPassword}>
                                {eye}
                            </div>
                            <input value={password} onChange={(e)=> setPassword(e.target.value)} type={type} placeholder="Enter your Password" id="password" className="border-b-[#999] w-full border-solid border-b-2 focus:border-x-none focus:border-t-none outline-none focus:border-b-black duration-300 pl-7 pb-1" />
                        </div>
                        <button type="submit" className="mt-12 btn rounded-full btn-block btn-primary shadow-lg">Login</button>
                    </form>
                </div>
                <figure className="img-login">
                </figure>
            </div>
        </>
    )
}
export default Login;