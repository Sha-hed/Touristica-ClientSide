import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Route/AuthProvider";
import auth from "../firebase/firebase.config";
const Register = () => {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const [eye, setEye] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    console.log(createUser);
    const onSubmit = () => {
        const name = getValues('Name');
        const email = getValues('Email');
        const photo = getValues('PhotoURL');
        const password = getValues('Password');
        setError('');
        createUser(email, password)
            .then(result => {
                console.log('User Created Successfully ', result.user)
                updateProfile(auth.currentUser, {
                    displayName: `${name}`,
                    photoURL: `${photo}`
                })
                toast.success('Registered Successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    navigate('/');
                }, 2500)
            })
            .catch(error => { setError(error.message) })
    }
    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-5">Register now!</h1>
            <div className='w-full md:w-1/2 lg:w-1/3 mx-auto border-2 p-5 rounded-xl bg-gray-200 my-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Your Name</span>
                        </label>
                        <input className='p-3 rounded-xl' type="text" placeholder="Name"
                            {...register("Name",
                                {
                                    required: {
                                        value: 'true',
                                        message: 'Please provide a name.'
                                    }
                                })} />
                    </div>
                    <div>
                        {
                            errors.Name && <p className=' text-red-600 font-bold'>{errors.Name.message}</p>
                        }
                    </div>
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
                    <div>
                        {
                            errors.Email && <p className=' text-red-600 font-bold'>{errors.Email.message}</p>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">PhotoURL</span>
                        </label>
                        <input className='p-3 rounded-xl' type="text" placeholder="PhotoURL"
                            {...register("PhotoURL",
                                {
                                    required: {
                                        value: 'true',
                                        message: 'Please provide a PhotoURL.'
                                    }
                                })} />
                    </div>
                    <div>
                        {
                            errors.PhotoURL && <p className=' text-red-600 font-bold'>{errors.PhotoURL.message}</p>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Password</span>
                        </label>
                        <div className="flex items-center justify-between gap-1 bg-white rounded-xl">
                            <input type={eye ? 'password' : 'text'}
                                className='p-3 rounded-xl w-full outline-none'
                                placeholder="Password"
                                {...register("Password", {
                                    minLength: {
                                        value: 6,
                                        message: "The password length must be at least 6 characters."
                                    },
                                    pattern: {
                                        value: /(?=.*[A-Z])(?=.*[a-z])/,
                                        message: 'Password must have at least one UpperCase and one LowerCase letter'
                                    }
                                })} />
                            {
                                eye ? <IoMdEye onClick={() => setEye(!eye)}
                                    className="text-2xl mr-1" /> : <IoMdEyeOff onClick={() => setEye(!eye)}
                                        className="text-2xl" />
                            }
                        </div>
                    </div>
                    <div>
                        {
                            errors.Password && <p className='text-red-600 font-bold'>{errors.Password.message}</p>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        {
                            error && <p className="text-red-600 font-bold mt-5 text-lg text-center">{error}</p>
                        }
                    </div>
                    <p className="text-center">Already Have an account?Please<Link to='/login'><button className='btn btn-link text-lg'>Login</button></Link></p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;