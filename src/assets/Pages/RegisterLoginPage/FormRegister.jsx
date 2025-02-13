import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function FormRegister() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notlp, setNotlp] = useState("")

    const handleRegister = () => {
        // Simpan username ke localStorage
        localStorage.setItem("username", username);

        // Arahkan ke homepage
        navigate("/homepage");
    };
    //http://localhost:4000
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://admin-thinkmath.vercel.app/user/register", { username, email, password, notlp })
            .then(response => {
                console.log(response);
                alert("Akun berhasil Ditambahkan")
                navigate("/FormLogin")
            }).catch(err => {
                if (err.response) {
                    const errorMessage = err.response.data.message;
                    if (err.response.status === 400) {
                        if (errorMessage === "Email already exists") {
                            alert("Email sudah digunakan");
                        } else if (errorMessage === "Username already exists") {
                            alert("Username sudah digunakan");
                        } else {
                            alert(errorMessage);
                        }
                    } else {
                        alert("Terjadi kesalahan saat mendaftar");
                    }
                } else {
                    alert("Terjadi kesalahan saat mendaftar");
                }
                navigate('/FormRegister');
            });
    }
    return (
        <div className="flex flex-wrap justify-center px-5 sm:px-10 md:px-20 bg-birumuda min-h-screen font-main">
            <div className="w-full sm:w-4/5 md:w-1/2 lg:w-2/5 border-2 rounded-3xl px-5 bg-white my-10">
                <div className="flex justify-center w-full my-10">
                    <img src="logonavitem.png" className="w-32 sm:w-40 md:w-52"></img>
                </div>
                <div className="mb-10 sm:mb-9">
                    <h1 className="text-center text-lg sm:text-xl md:text-2xl">SELAMAT DATANG</h1>
                </div>
                <form onSubmit={handleSubmit} className="mb-8 sm:mb-12">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Nama Pengguna</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder=""
                        onChange={(e) => setUsername(e.target.value)}
                        className="border-2 mb-3 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                        required
                    />
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2"> Email</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        placeholder=""
                        className="border-2 mb-3 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                        required
                    />
                    <label htmlFor="notlp" className="block text-gray-700 text-sm font-bold mb-2"> No. Telpon</label>
                    <input
                        type="tel"
                        name="notlp"
                        id="notlp"
                        placeholder=""
                        onChange={(e) => setNotlp(e.target.value)}
                        className="border-2 mb-3 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                        required
                    />
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Kata Sandi</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder=""
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 mb-12 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                        required
                    />
                    <div className="flex justify-between -mt-8 sm:-mt-12 mb-5 sm:mb-8 px-1 pt-2">
                        <Link to='/LandingPage'>
                            <h1 className="text-sm hover:underline hover:opacity-85 opacity-50">Kembali</h1>
                        </Link>
                    </div>
                    <div className="text-center mb-5">
                        <button type="submit" className="py-2 px-4 rounded-lg text-white hover:bg-birutua hover:scale-105 transition duration-200 drop-shadow-2xl bg-blue-500">DAFTAR</button>
                    </div>
                    {/* <div className="flex justify-center">
                        <Link to='/LandingPage'>
                            <h1 className="hover:underline">kembali</h1>
                        </Link>
                    </div> */}
                </form>
                <div className="text-center mb-2">
                    <h1 className="text-sm">Sudah punya akun?
                        <Link to="/FormLogin">
                            <span className="font-medium text-indigo-600 hover:text-blue-500"> MASUK</span>
                        </Link>
                    </h1>
                </div>
            </div>
        </div>

    )
}