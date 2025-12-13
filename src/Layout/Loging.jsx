import React, { useState, useContext } from 'react'
import { UserContext } from '../UserContext'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Loging = () => {
    const { login } = useContext(UserContext);  // FIXED
    const navigate = useNavigate();

    const [input, setInput] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();  // FIXED

        const res = login(input.email, input.password);

        if (res.success) {
            Swal.fire({
                title: "Login Successful!",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
            });
            navigate("/");
        } else {
            setError(res.message);
            toast.error(res.message);
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 px-4'>
            <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
                <h1 className='text-3xl font-bold text-center mb-6 text-yellow-400'>Welcome Back</h1>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='text-[18px] font-semibold font-jalano'>Email</label>
                        <input
                            type="email"
                            className='w-full mt-1 p-3 border text-[15px] font-semibold font-jalano rounded-lg focus:outline-none focus:border-amber-400'
                            value={input.email}
                            onChange={e => setInput({ ...input, email: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label className='text-[18px] font-semibold font-jalano'>Password</label>
                        <input
                            type="password"
                            className='w-full mt-1 p-3 border rounded-lg text-[15px] font-semibold font-jalano focus:outline-none focus:border-amber-400'
                            value={input.password}
                            onChange={e => setInput({ ...input, password: e.target.value })}
                            required
                        />
                    </div>

                    {error && <p className='text-red-500'>{error}</p>}

                    <button className='w-full bg-yellow-400 text-white py-3 rounded-lg mt-2 hover:bg-yellow-500'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Loging;
