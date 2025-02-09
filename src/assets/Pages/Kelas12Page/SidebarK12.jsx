import React, { useState, useEffect } from 'react';
import KuisM1K12 from '../../Layout/Kuis/Kelas12/KuisM1K12';
import KuisM2K12 from '../../Layout/Kuis/Kelas12/KuisM2K12';
import KuisM3K12 from '../../Layout/Kuis/Kelas12/KuisM3K12';
import KuisM4K12 from '../../Layout/Kuis/Kelas12/KuisM4K12';
import MainPageK12 from './MainPageK12';
import "./SidebarK12.css";
import NavbarHome from '../../Layout/Navbar/NavbarHome';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function SidebarK11() {
    const { judul } = useParams(); // Ambil parameter judul dari URL
    const coba = [
        { judul: "Perkenalan", component: MainPageK12 },

        {
            judul: "Sistem Persamaan Linear Dua Variable",
            url: "https://www.youtube.com/embed/4DPidz3KdEI?si=Vhjxy1tvupSWEQE7",
            description1: "Sistem Persamaan Linear Dua Variable",
            description2: (
                <div>
                    <img src="/public/spldv.jpeg" alt="spldv" /><br />
                    <p>
                    Klik vidio diatas untuk mempelajari lebih lengkap tentang System Persamaan Linear Dua Variable.
                    </p>
                </div>
            ),
            description3: 'Materi yang akan dipelajari di video adalah mengenai pengertian SPLDV, mengenali bentuk umun SPLDV, mengenali himpunan penyelesaian SPLDV, dan juga akan membahas beberapa contoh soal yang berkaitan dengan SPLDV.'
        },

        { judul: "Kuis Sistem Persamaan Linear Dua Variable", component: KuisM1K12 },

        {
            judul: "Bangun Ruang Sisi Datar",
            url: "https://www.youtube.com/embed/fxR74VrdviY?si=hx2N0y0erqD4Gdgx",
            description1: "Bangun Ruang Sisi Datar",
            description2: (
                <div>
                    <img src="/public/bangunruang.jpeg" alt="spldv" /><br />
                    <p>
                    Klik vidio diatas untuk mempelajari lebih lengkap tentang Bangun Ruang Sisi Datar.
                    </p>
                </div>
            ),
            description3: 'Materi yang akan dipelajari di video adalah mengenai pengertian Bangun Ruang Sisi Datar, mengenali unsur-unsur Bangun Ruang Sisi Datar, dan juga akan membahas beberapa contoh soal yang berkaitan dengan bangun ruang sisi datar.'
        },

        { judul: "Kuis Bangun Ruang Sisi Datar", component: KuisM2K12 },

        {
            judul: "Peluang",
            url: "https://www.youtube.com/embed/Nn3jqpVvKhY?si=dPAujt5wOvXkXFoB",
            description1: "Peluang",
            description2: (
                <div>
                    <img src="/public/peluang.jpeg" alt="peluang" /><br />
                    <p>
                    Klik vidio diatas untuk mempelajari lebih lengkap tentang Peluang.
                    </p>
                </div>
            ),
            description3: 'Materi yang akan dipelajari di video adalah mengenai pengertian peluang, mengenali ruang sampel, titik sampel, kejadian, dan juga akan membahas beberapa contoh soal yang berkaitan dengan peluang.'
        },

        { judul: "Kuis Peluang", component: KuisM3K12 },

        {
            judul: "Persamaan Kuadrat",
            url: "https://www.youtube.com/embed/bBOK3XLpcOU?si=JRD83KNkswsjZEAG",
            description1: "Persamaan Kuadrat",
            description2: (
                <div>
                    <img src="/public/pk.jpeg" alt="Persamaan Kuadrat" /><br />
                    <p>
                    Klik vidio diatas untuk mempelajari lebih lengkap tentang Persamaan Kuadrat.
                    </p>
                </div>
            ),
            description3: 'Materi yang akan dipelajari di video adalah mengenai pengertian persamaan kuadrat, mengenali himpunan penyelesaian persamaan kuadrat, dan juga akan membahas beberapa contoh soal yang berkaitan dengan persamaan kuadrat.'
        },

        { judul: "Kuis Persamaan Kuadrat", component: KuisM4K12 },
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState('Perkenalan');

    const handlePageChange = (judul) => {
        setSelectedPage(judul);
        setIsSidebarOpen(false);  // Tutup sidebar saat opsi dipilih
    };

    // Perbarui selectedPage ketika judul di URL berubah
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
                        {/* <div className='py-2 px-3 mb-5 bg-white text-black rounded-xl'>
                            <h1 className='font-semibold text-sm md:text-lg'>{selectedData.description2}</h1>
                        </div>
                        <div className='py-2 px-3 bg-white text-black rounded-xl'>
                            <h1 className='font-semibold text-sm md:text-lg'>{selectedData.description3}</h1>
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
            <div className="mt-20 relative flex flex-col md:flex-row bg-blue-100 ">
                {/* Sidebar untuk Desktop dan Mobile */}
                <div
                    className={`fixed inset-y-0 left-0 top-1/4 md:static md:w-1/4 bg-blue-100 text-white md:bg-transparent md:h-auto transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 z-30'}`}
                >
                    <div className='mt-10 ml-10 mb-5'>
                        <Link to="/MateriKls9" className="text-white bg-red-600 py-2 px-5 rounded-lg hover:bg-red-700 ">
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