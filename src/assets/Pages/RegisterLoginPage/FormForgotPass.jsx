import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

export default function FormForgotPass() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://admin-thinkmath.vercel.app/user/forgotpassword', { email })
            .then(response => {
                if (response.data.status) {
                    alert("Check your email to reset your password link");
                    setTimeout(() => {
                        navigate("/FormLogin");
                    }, 5000);
                } else {
                    alert(response.data.message || "Error sending email");
                }
            }).catch(err => {
                console.log(err);
                alert("Terjadi kesalahan, coba lagi nanti");
            });
    }
    return (
        <div className="flex flex-wrap justify-center px-5 sm:px-10 md:px-20 bg-birumuda min-h-screen font-main">
            <div className="w-full sm:w-4/5 md:w-1/2 lg:w-2/5 border-2 rounded-2xl px-6 bg-white my-20 sm:my-30 md:my-40 py-5">
                <div className="mb-5">
                    <h1 className="text-center text-lg sm:text-xl font-semibold">Masukan E-mail anda.</h1>
                    <h1 className="text-center text-sm sm:text-base">Dan kami akan mengirimkan Link agar anda bisa masuk kembali ke akun anda.</h1>
                </div>
                <form onSubmit={handleSubmit} className="mb-3">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"> Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder=""
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 mb-3 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                        required
                    />
                    <div className="justify-center flex mb-5">
                        <button type="submit" className="bg-blue-500 text-white text-base rounded-lg py-2 px-3 hover:bg-birutua hover:scale-105 transition duration-200">KIRIM LINK</button>
                    </div>
                </form>
                <div className="flex justify-center">
                    <Link to='/FormLogin'>
                        <h1 className="hover:underline">kembali</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}