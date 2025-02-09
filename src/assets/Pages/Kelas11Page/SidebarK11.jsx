import React, { useState, useEffect } from 'react';
import KuisM1K11 from '../../Layout/Kuis/Kelas11/KuisM1K11';
import KuisM2K11 from '../../Layout/Kuis/Kelas11/KuisM2K11';
import KuisM3K11 from '../../Layout/Kuis/Kelas11/KuisM3K11';
import KuisM4K11 from '../../Layout/Kuis/Kelas11/KuisM4K11';
import KuisM5K11 from '../../Layout/Kuis/Kelas11/KuisM5K11';
import KuisM6K11 from '../../Layout/Kuis/Kelas11/KuisM6K11';
import MainPageK11 from './MainPagek11'
import "./SidebarK11.css";
import NavbarHome from '../../Layout/Navbar/NavbarHome';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function SidebarK11() {
    const { judul } = useParams(); // Ambil parameter judul dari URL
    const coba = [
        { judul: "Perkenalan", component: MainPageK11 },

        {
            judul: "Bilangan Berpangkat",
            url: "https://www.youtube.com/embed/OWKpJHCKOsU?si=n7vjqCSfdFsGQWNz",
            description1: 'Bilangan Berpangkat',
            description2: (
                <div>
                    <img src="/public/bilanganberpangkat1.png" alt="Bilangan Berpangkat" /><br />
                    <p>
                    Klik vidio diatas untuk mempelajari lebih lengkap tentang bilangan berpangkat.
                    </p>
                </div>
            ),
            description3: 'Materi yang akan dipelajari di video adalah mengenai pengertian bilangan berpangkat, mengenali sifat-sifat operasi bilangan berpangkat, dan juga akan membahas beberapa contoh soal yang berkaitan dengan bilangan berpangkat.'
        },

        { judul: "Kuis Bilangan Berpangkat", component: KuisM1K11 },

        {
            judul: "Bentuk Akar",
            url: "https://www.youtube.com/embed/jRkc_OELXxA?si=ZyJcG-NCX9OdLpno",
            description1: 'Bentuk Akar',
            description2: (
                <div>
                    <img src="/public/bentukakar1.png" alt="bentuk akar" /><br />
                    <p>
                    Klik vidio diatas untuk mempelajari lebih lengkap tentang bilangan berpangkat.
                    </p>
                </div>
            ),
            description3: 'Materi yang akan dipelajari di video adalah mengenai pengertian bentuk akar, mengenali sifat-sifat operasi bentuk akar, dan juga akan membahas beberapa contoh soal yang berkaitan dengan bentuk akar.'
        },

        { judul: "Kuis Bentuk Akar", component: KuisM2K11 },

        {
            judul: "Teorema Pythagoras",
            url: "https://www.youtube.com/embed/9YdFM0y12Po?si=5mNuqg89jLz2uCYN",
            description1: "Teorema Phytagoras",
            description2: (
                <div>
                    <img src="/public/tp1.png" alt="Teorema Phytagoras" /><br />
                    <p>
                    Klik vidio diatas untuk mempelajari lebih lengkap tentang Teorema Phytagoras.
                    </p>
                </div>
            ),
            description3: 'Materi yang akan dipelajari pada video kali ini adalah mengenai pengertian teorema phythagoras, perbandingan sisi-sisi segitiga siku-siku dengan sudut istimewa,  dan juga akan membahas beberapa contoh soal yang berkaitan dengan bentuk akar.'
        },

        { judul: "Kuis Teorema Phytagoras", component: KuisM3K11 },

        {
            judul: "Persamaan Linier Satu Variabel",
            url: "https://www.youtube.com/embed/5ykuESdSgy4?si=k5xkPaYItq82aeEf",
            description1: "Persamaan Linier Satu Variabel",
            description2: (
                <div>
                    <img src="/public/defplsv.png" alt="plsv" /><br />
                    <p>
                    Klik vidio diatas untuk mempelajari lebih lengkap tentang Persamaan Linier Satu Variabel.
                    </p>
                </div>
            ),
            description3: 'Materi yang akan dipelajari pada video kali ini adalah mengenai pengertian Persamaan Linier Satu Variabel, himpunan penyelesaian Persamaan Linier Satu Variabel,  dan juga akan membahas beberapa contoh soal yang berkaitan dengan Persamaan Linier Satu Variabel.'
        },

        { judul: "Kuis Persamaan Linier Satu Variabel", component: KuisM4K11 },

        // {
        //     judul: "Pertidaksamaan Linear Satu Variabel",
        //     url: "https://www.youtube.com/embed/cjZpogBK7gM?si=6wo3Q87-fyFIYhl4",
        //     description1: "Pertidaksamaan Linear Satu Variabel",
        //     description2: 'Exposition Text adalah jenis teks yang digunakan untuk mengemukakan argumen atau pendapat dan memberikan alasan serta bukti untuk mendukungnya. Teks ini bertujuan untuk meyakinkan pembaca atau pendengar mengenai suatu topik atau posisi tertentu. Exposition text sering ditemukan dalam esai argumentatif, artikel opini, dan pidato persuasif.',
        //     description3: 'Materi yang akan dipelajari pada video kali ini adalah struktur dari exposition text dan contoh dari exposition text.'
        // },

        // { judul: "Quiz Pertidaksamaan Linear Satu Variabel", component: KuisM5K11 },

        {
            judul: "Relasi dan Fungsi",
            url: "https://www.youtube.com/embed/-AA7svxZZv0?si=PUhFJE9XXZ4DGhCA",
            description1: "Relasi dan Fungsi",
            description2: (
                <div>
                    <img src="/public/defrelasi.png" alt="plsv" /><br />
                    <p>
                    Klik vidio diatas untuk mempelajari lebih lengkap tentang Relasi dan Fungsi.
                    </p>
                </div>
            ),
            description3: 'Materi yang akan dipelajari pada video kali ini adalah mengenai pengertian Relasi dan Fungsi, mempelajari grafik fungsi pada bidang kartesius,  dan juga akan membahas beberapa contoh soal yang berkaitan dengan Relasi dan Fungsi.'
        },

        { judul: "Kuis Relasi dan Fungsi", component: KuisM6K11 },
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState('Perkenalan');

    const handlePageChange = (judul) => {
        setSelectedPage(judul);
        setIsSidebarOpen(false);  // Tutup sidebar saat opsi dipilih
    };

    useEffect(() => {
        if (judul) {
            setSelectedPage(judul);
        }
    }, [judul]);

    const renderContent = () => {
        const selectedData = coba.find(data => data.judul === selectedPage);
        if (selectedData?.url) {
            return (
                <div className="flex flex-col items-center md:px-12 mt-5">
                    <div className='my-2 flex justify-center items-center w-full'>
                        <div className='w-full max-w-screen-lg flex justify-center'>
                            <div className='relative w-full' style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                                <iframe
                                    src={selectedData.url}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-full rounded-2xl"
                                    style={{ position: 'absolute', top: 0, left: 0 }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white py-4 px-4 md:px-8 rounded-2xl text-center'>
                        <div className='py-2 px-3 mb-5 bg-white text-black rounded-xl'>
                            <h1 className='font-bold text-lg md:text-2xl'>{selectedData.description1}</h1>
                        </div>
                        {/* <div className='py-2 px-3 mb-5 bg-white text-black rounded-xl whitespace-pre-line'>
                            <p className='font-semibold text-sm md:text-lg'>{selectedData.description2}</p>
                        </div>
                        <div className='py-2 px-3 bg-white text-black rounded-xl'>
                            <h className='font-semibold text-sm md:text-lg'>{selectedData.description3}</h>
                        </div> */}
                        <div className="py-2 px-3 mb-5 bg-white text-black rounded-xl whitespace-pre-line" style={{ textIndent: '2em' }}>
                            <p className="font-normal text-sm md:text-lg text-justify leading-6">{selectedData.description2}</p>
                        </div>
                        <div className="py-2 px-3 bg-white text-black rounded-xl">
                            <p className="font-normal text-sm md:text-lg text-justify leading-6">{selectedData.description3}</p>
                        </div>
                    </div>
                </div>
            );
        } else if (selectedData?.component) {
            const Component = selectedData.component;
            return <Component />;
        }
        return null;
    };

    return (
        <div> <NavbarHome />
            <div className="mt-20 relative flex flex-col md:flex-row bg-blue-100">
                {/* Sidebar untuk Desktop dan Mobile */}
                <div
                    className={`fixed inset-y-0 left-0 top-1/4 md:static md:w-1/4 bg-blue-100 text-white md:bg-transparent md:h-auto transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 z-30'}`}
                >
                    <div className='mt-10 ml-10 mb-5'>
                        <Link to="/MateriKls8" className="text-white bg-red-600 py-2 px-5 rounded-lg hover:bg-red-700 ">
                            Kembali
                        </Link>
                    </div>
                    <div className="text-lg relative h-[70vh] overflow-y-scroll scrollbar-thin px-10 py-2 pb-14 md:py-10 sm:py-14">
                        {coba.map((data, index) => (
                            <a
                                key={index}
                                onClick={() => handlePageChange(data.judul)}
                                className={`block bg-blue-300 py-2 px-5 mb-2 border-b-2 rounded-lg hover:scale-105 transition duration-500 hover:bg-blue-600 hover:drop-shadow-xl ${selectedPage === data.judul ? 'bg-blue-600' : 'text-white'}`}
                            >
                                {data.judul}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Konten */}
                <div
                    className={`flex-1 max-h-[84vh] pb-10 pt-2 mt-5 relative overflow-y-auto transition-transform duration-300 ${isSidebarOpen ? 'transform translate-x-full' : 'transform translate-x-0'}`}
                >
                    <button
                        className="md:hidden text-2xl -mt-2 fixed top-1 left-4 z-50 text-white rounded"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? '✕' : '<-- Materi'}
                    </button>
                    <div className={`page ${selectedPage}`}>
                        {renderContent()}
                    </div>
                </div>

                {/* Overlay background pada desktop saat sidebar terbuka */}
                {isSidebarOpen && (
                    <div className="fixed inset-0 bg-black opacity-50 z-40 md:block hidden"></div>
                )}
            </div>
        </div>
    );
}