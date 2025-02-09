import React from 'react'
import NavbarHome from '../../Layout/Navbar/NavbarHome'
import { Link } from 'react-router-dom'

export default function LatihanPage() {
    return (
        <div className='bg-blue-100 h-full'>
            <div className='font-main'>
                <div className='mb-5'>
                    <NavbarHome />
                </div>

                <div className='pt-28 pb-28'>
                    <h1 className='text-center font-bold text-4xl mb-10'>Pilih Ujian Berdasarkan Kelas</h1>

                    {/* Latihan Grammar atau kelas 7 */}
                    <div className="mx-20 pt-7 mb-14 px-5 rounded-xl bg-blue-300 drop-shadow-2xl shadow-2xl">
                        <h1 className="font-semibold text-center text-xl">
                            Ujian Kelas 7
                        </h1>
                        <div className="flex flex-nowrap justify-center mt-4 gap-x-4">
                            <div className="px-2 flex-shrink-0 basis-1/3">
                                <Link to="/StartMudLatGram">
                                    <div className="hover:bg-white-300 rounded-xl py-4 border-slate-300 hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className="justify-center flex">
                                            <img
                                                src="easy.jpeg"
                                                alt=""
                                                className="w-full rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="px-2 flex-shrink-0 basis-1/3">
                                <Link to="/StartMenLatGram">
                                    <div className="hover:bg-white-300 rounded-xl py-4 border-slate-300 hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className="justify-center flex">
                                            <img
                                                src="medium.jpeg"
                                                alt=""
                                                className="w-full rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="px-2 flex-shrink-0 basis-1/3">
                                <Link to="/StartSulLatGram">
                                    <div className="hover:bg-white-300 rounded-xl py-4 border-slate-300 hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className="justify-center flex">
                                            <img
                                                src="hard.jpeg"
                                                alt=""
                                                className="w-full rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Latihan Listening */}
                    {/* kelas 8 */}
                    <div className="mx-20 pt-7 mb-14 px-5 rounded-xl bg-pink-300 drop-shadow-2xl shadow-2xl">
                        <h1 className='font-semibold text-center text-xl'>Latihan Kelas 8</h1>
                        <div className="flex flex-nowrap justify-center mt-4 gap-x-4">
                            <div className="px-2 lg:w-1/2 xl:w-1/4">
                                <Link to="/latihanMudah1">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex'>
                                            <img src="easy.jpeg" alt="" width="full" className="rounded-xl" />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="px-2 lg:w-1/2 xl:w-1/4">
                                <Link to="/LatihanMenengah">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex '>
                                            <img src="medium.jpeg" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="px-2 lg:w-1/2 xl:w-1/4">
                                <Link to="/LatihanSulit">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex '>
                                            <img src="hard.jpeg" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="mb-20"></div>
                    </div >

                    {/* kelas 9 */}
                    <div className="mx-20 pt-7 mb-14 px-5 rounded-xl bg-blue-200 drop-shadow-2xl shadow-2xl">
                        <h1 className="font-semibold text-center text-xl">
                            Ujian Kelas 9
                        </h1>
                        <div className="flex flex-nowrap justify-center mt-4 gap-x-4">
                            <div className="px-2 flex-shrink-0 basis-1/3">
                                <Link to="/StartMudLatGram">
                                    <div className="hover:bg-white-300 rounded-xl py-4 border-slate-300 hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className="justify-center flex">
                                            <img
                                                src="easy.jpeg"
                                                alt=""
                                                className="w-full rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="px-2 flex-shrink-0 basis-1/3">
                                <Link to="/StartMenLatGram">
                                    <div className="hover:bg-white-300 rounded-xl py-4 border-slate-300 hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className="justify-center flex">
                                            <img
                                                src="medium.jpeg"
                                                alt=""
                                                className="w-full rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="px-2 flex-shrink-0 basis-1/3">
                                <Link to="/StartSulLatGram">
                                    <div className="hover:bg-white-300 rounded-xl py-4 border-slate-300 hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className="justify-center flex">
                                            <img
                                                src="hard.jpeg"
                                                alt=""
                                                className="w-full rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
