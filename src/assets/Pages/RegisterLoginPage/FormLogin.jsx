import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


export default function FormLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    axios.defaults.withCredentials = true

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://admin-thinkmath.vercel.app/user/login', { email, password, })
            .then(response => {
                const username = jwtDecode(response.data.token)
                localStorage.setItem("username", username.username)
                alert("Berhasil Login");
                navigate('/HomePage');
            }).catch(err => {
                if (err.response && err.response.data.message) {
                    alert(err.response.data.message);
                } else {
                    alert("Terjadi kesalahan saat login");
                }
                console.log(err)
            });
    }

    return (
        <div className="flex flex-wrap justify-center px-5 sm:px-10 md:px-20 bg-birumuda min-h-screen font-main">
            <div className="w-full sm:w-4/5 md:w-1/2 lg:w-2/5 border-2 rounded-3xl px-5 bg-white my-5">
                <div className="flex justify-center w-full my-10">
                    <img src="logonavitem.png" className="w-32 sm:w-40 md:w-52"></img>
                </div>
                <div className="mb-10 sm:mb-9">
                    <h1 className="text-center text-lg sm:text-xl md:text-2xl">SELAMAT DATANG KEMBALI</h1>
                </div>
                <form onSubmit={handleSubmit} className="mb-8 sm:mb-12">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2"> Email</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        placeholder="contoh123@gmail.com"
                        className="border-2 mb-3 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                        required
                    />
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Kata Sandi</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********"
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 mb-12 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                        required
                    />
                    {/* <Link to="/FormForgotPass">
                        <div className="flex justify-end -mt-8 sm:-mt-12 mb-8 sm:mb-12">
                            <h1 className="text-sm hover:underline hover:opacity-85 opacity-50">Lupa Password?</h1>
                        </div>
                    </Link> */}
                    <div className="flex justify-between -mt-8 sm:-mt-12 mb-5 sm:mb-10 px-1 pt-2">
                        <Link to='/LandingPage'>
                            <h1 className="text-sm hover:underline hover:opacity-85 opacity-50">Kembali</h1>
                        </Link>
                        <Link to="/FormForgotPass">
                            <h1 className="text-sm hover:underline hover:opacity-85 opacity-50">Lupa Kata Sandi?</h1>
                        </Link>
                    </div>
                    <div className="text-center mb-5">
                        <button type="submit" className="py-2 px-4 rounded-lg text-white hover:bg-birutua hover:scale-105 transition duration-200 drop-shadow-2xl bg-blue-500">MASUK</button>
                    </div>
                    {/* <div className="flex justify-center">
                        <Link to='/LandingPage'>
                            <h1 className="hover:underline">kembali</h1>
                        </Link>
                    </div> */}
                </form>
                <div className="text-center mb-2">
                    <h1 className="text-sm">Belum punya akun?
                        <Link to="/FormRegister">
                            <span className="font-medium text-birutua hover:text-indigo-600"> DAFTAR</span>
                        </Link>
                    </h1>
                </div>
            </div>
        </div>

    )
}
