import React from 'react'
import NavbarHome from '../../Layout/Navbar/NavbarHome'
import PilihKelas from "../HomePage/PilihKelas";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";



export default function MateriMain() {
    const [username, setUsername] = useState("");

    // Ambil username dari localStorage ketika halaman dimuat
    useEffect(() => {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            setUsername(savedUsername);
        }
    }, []);

    return (
        <div className=' bg-blue-100 font-main h-screen'>
            <div>
                <div>
                    <NavbarHome />
                </div>
                <div className="text-center pt-28">
                    <h1 className="font-bold text-3xl mb-10 pt-5">
                        Hai {username && ` ${username} `}, Selamat Datang di Halaman materi!
                    </h1>
                    <p className="font-semibold text-2xl mb-10">
                        Silahkan pilih sesuai kelas kamu {username && ` ${username} `} 😉
                    </p>
                </div>
                <PilihKelas />
            </div>
        </div>
    )
}
