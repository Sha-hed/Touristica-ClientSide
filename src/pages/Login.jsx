import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Route/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { logIn, Google, Github } = useContext(AuthContext);
    const onSubmit = () => {
        const email = getValues('Email');
        const password = getValues('Password');
        console.log(email, password);
        logIn(email, password)
        .then(()=> {
                toast.success('Logged in Successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(()=>{
                    navigate('/');
                  },2100)
            })
            .catch(error => setError(error.message))
    }
    const Googles = () => {
        Google()
            .then(() => {
                toast.success('Logged in Successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(()=>{
                    navigate('/');
                  },2100)
            })
            .catch(error => setError(error.message))
    }
    const Githubs = () => {
        Github()
            .then(() => {
                toast.success('Logged in Successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(()=>{
                    navigate('/');
                  },2100)
            })
            .catch(error => setError(error.message));
    }
    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-5">Login now!</h1>
            <div className='w-full md:w-1/2 lg:w-1/3 mx-auto border-2 p-5 rounded-xl bg-gray-200 my-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Email</span>
                        </label>
                        <input className='p-3 rounded-xl' type="email" placeholder="Email"
                            {...register("Email",
                                {
                                    required: {
                                        value: 'true',
                                        message: 'Please provide a Email.'
                                    }
                                })} />
                    </div>
                    {errors.Email && <p className=' text-red-600 font-bold'>{errors.Email.message}</p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input className='p-3 rounded-xl' type="password" placeholder="Password"
                            {...register("Password",
                                {
                                    required: {
                                        value: 'true',
                                        message: 'Please provide Password.'
                                    }
                                })} />
                        {errors.Password && <p className=' text-red-600 font-bold'>{errors.Password.message}</p>}
                    </div>
                    <div className="form-control my-6">
                        <button className="btn btn-primary">Login</button>
                        {
                            error && <p className="text-red-600 font-bold mt-5 text-lg text-center">{error}</p>
                        }
                    </div>

                </form>
                <div>
                    <button onClick={Googles} className='block w-full mb-6 btn btn-secondary'>Login with Google</button>
                    <button onClick={Githubs} className='block w-full btn btn-secondary'>Login with GitHub</button>
                </div>
                <p className='text-center'>New to this website? Please<Link to='/register'><button className='btn btn-link text-lg'>Register</button></Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;