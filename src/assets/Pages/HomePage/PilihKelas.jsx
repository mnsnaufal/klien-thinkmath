import React from "react";
import { Link } from "react-router-dom";


export default function PilihKelas() {
    return (
        <>
            <div className="mx-10 pt-7 rounded-xl bg-blue-300 drop-shadow-2xl shadow-2xl"
                style={{
                    backgroundImage: "url('/bawahkarosel.png')",
                    backgroundSize: "cover", // Atau gunakan "cover" jika ingin menutupi seluruh elemen
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat", // Mencegah pengulangan gambar
                }}>
                <h1 className="mb-2 mx-5 font-semibold">Pilih Kelas :</h1>
                <div className="flex flex-wrap">

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <Link to="/MateriKls7">
                            <div className="hover:bg-blue-600 rounded-xl py-4 px-4 border-slate-300 mb-10 text-md font-semibold bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                🐔 Kelas 7 | 1 SMP
                                <img src="" alt="" width="w-full" />
                            </div>
                        </Link>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <Link to="/MateriKls8">
                            <div className="hover:bg-blue-600 rounded-xl py-4 px-4 border-slate-300 mb-10 text-md font-semibold bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                🐻 Kelas 8 | 2 SMP
                                <img src="" alt="" width="w-full" />
                            </div>
                        </Link>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <Link to="/MateriKls9">
                            <div className="hover:bg-blue-600 rounded-xl py-4 px-4 border-slate-300 mb-10 text-md font-semibold bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                🦁 Kelas 9 | 3 SMP
                                <img src="" alt="" width="w-full" />
                            </div>
                        </Link>
                    </div>

                </div>
            </div >
        </>
    )
}