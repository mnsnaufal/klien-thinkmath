import React from 'react'
import NavbarHome from '../../Layout/Navbar/NavbarHome'
import { Link } from 'react-router-dom'

const MateriKls8 = () => {
  return (
    <div>
      <div>
        <div>
          <NavbarHome />
        </div>
        <div className='py-20'>
                    <div className='flex justify-center my-10'>
                        <h1 className='font-bold text-2xl'>Pilih Materi Kelas 8</h1>
                    </div>
                    <div className='mt-10 ml-20 mb-5'>
                        <Link to="/MateriMain" className="text-white bg-red-600 py-2 px-5 rounded-lg hover:bg-red-700 ">
                            Kembali
                        </Link>
                    </div>

                    {/* kelas 7 */}
                    {/* <div className="mx-20 pt-7 px-1 rounded-xl bg-blue-600 drop-shadow-2xl shadow-2xl">
                        <h1 className="mb-2 mx-2 font-semibold text-white">Materi Kelas 7 :</h1>
                        <div className="flex flex-wrap justify-center mt-4">
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full"> */}
                            {/* /MateriM1K10 */}
                                {/* <Link to="/SidebarK10/Bilangan Bulat">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="mbilanganbulat.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Bilangan Bulat</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full"> */}
                            {/* /MateriM2K10 */}
                                {/* <Link to="/SidebarK10/Pecahan">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="mpecahan.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Pecahan</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full"> */}
                            {/* /MateriM4K10 */}
                                {/* <Link to="/SidebarK10/Himpunan">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="mhimpunan.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Himpunan</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full"> */}
                            {/* /MateriM3K10 */}
                                {/* <Link to="/SidebarK10/Bentuk Aljabar">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="maljabar.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Bentuk Aljabar</h1>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="mb-20"></div>
                    </div> */}

                    {/* kelas 8 */}
                    <div className="mx-20 pt-7 px-1 rounded-xl bg-blue-600 drop-shadow-2xl shadow-2xl">
                        <h1 className="mb-2 mx-2 font-semibold text-white">Materi Kelas 8 :</h1>
                        <div className="flex flex-wrap justify-center mt-4">
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/SidebarK11/Bilangan Berpangkat">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="mbilanganberpangkat.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Bilangan Berpangkat</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/SidebarK11/Bentuk Akar">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="mbentukakar.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Bentuk Akar</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/SidebarK11/Teorema Pythagoras">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="mtp.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Teorema Phytagoras</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/SidebarK11/Persamaan Linier Satu Variabel">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="mplsv.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Persamaan Linier Satu Variabel</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/SidebarK11/Relasi dan Fungsi">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="mrelasi.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Relasi dan Fungsi</h1>
                                    </div>
                                </Link>
                            </div>
                            {/* <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM6K11">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM6K11.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Grammar Intermediate</h1>
                                    </div>
                                </Link>
                            </div> */}
                        </div>
                        <div className="mb-20"></div>
                    </div>

                    {/* kelas 9 */}
                    {/* <div className="mx-20 pt-7 px-1 rounded-xl bg-pink-400 drop-shadow-2xl shadow-2xl">
                        <h1 className="mb-2 mx-2 font-semibold text-white">Materi Kelas 12 :</h1>
                        <div className="flex flex-wrap justify-center mt-4">
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM1K12">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM1K12.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Common Expressions 3</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM2K12">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM2K12.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Conditional Sentences</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM3K12">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM3K12.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Indirect Speech</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM4K12">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM4K12.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Types of Sentences</h1>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="mb-20"></div>
                    </div> */}
                </div>
      </div>
    </div>
  )
}

export default MateriKls8