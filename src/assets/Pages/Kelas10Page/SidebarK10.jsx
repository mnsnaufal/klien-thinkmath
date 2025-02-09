import React, { useState, useEffect } from 'react';
import KuisM1K10 from '../../Layout/Kuis/Kelas10/KuisM1K10';
import KuisM2K10 from '../../Layout/Kuis/Kelas10/KuisM2K10';
import KuisM3K10 from '../../Layout/Kuis/Kelas10/KuisM3K10';
import KuisM4K10 from '../../Layout/Kuis/Kelas10/KuisM4K10';
import MainPageK10 from './MainPageK10';
import "./SidebarK10.css";
import NavbarHome from '../../Layout/Navbar/NavbarHome';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function SidebarK10() {
    const { judul } = useParams(); // Ambil parameter judul dari URL
    const coba = [
        { judul: "Perkenalan", component: MainPageK10 },

        {
            judul: "Bilangan Bulat",
            url: "https://www.youtube.com/embed/cQAwIhfC6Dg?si=MhdqCYeQnVqWfzHd",
            description1: 'Bilangan Bulat',
            description2: ' Bilangan bulat terdiri dari bilangan bulat negatif (..., -4, -3, -2, -1), nol (0), dan bilangan bulat positif (1, 2, 3, 4, ...). Penggunaan bilangan bulat banyak kita jumpai dalam kehidupan sehari-hari. Sebagai contoh, skala pada sebuah termometer. Dalam matematika, bilangan bulat sering digambarkan pada garis bilangan (horizontal atau vertikal).Setiap bilangan bulat selalu lebih besar dari bilangan bulat yang terletak di sebelah kirinya. Sebagai contoh, -3 > -4, 0 > -1, 3 > -4, dan seterusnya. Klik vidio diatas untuk mempelajari lebih lengkap tentang bilangan bulat.',
            description3: 'Materi yang akan dipelajari di video adalah mengenai klasifikasi bilangan bulat, operasi pada bilangan bulat yang di mana akan membahas penjumlahan, pengurangan, perkalian, dan pembagian bilangan bulat beserta sifat-sifatnya, dan juga akan membahas beberapa contoh soal yang berkaitan dengan bilangan bulat.',
        },

        { judul: "Kuis Bilangan Bulat", component: KuisM1K10 },

        {
            judul: "Pecahan",
            url: "https://www.youtube.com/embed/TjVcMLdGX48?si=0L6bjakWdZOBPDs8",
            description1: 'Pecahan',
            description2: 'Pecahan merupakan cara menyatakan banyak bagian yang diperhutungkan dari total bagian yang sama. Selanjtnya, banyak bagian yang diperhitungkan dinamakan pembilang, sedangkan total bagian yang sama dinamakan penyebut. Pecahan yang pembilangnya lebih kecil dari penyebut dinamakan pecahan murni, sebaliknya dinamakan pecahan tak murni. \n\n Cara lain menuliskan pecahan adalah dengan bilangan desimal (pecahan dengan penyebut kelipatan 10). Penulisan bentuk pecahan ke bentuk desimal dapat dilakukan dengan cara membagi pembilang dengan penyebut. Pecahan yang mempunyai penyebut 100 disebut juga pecahan persen, pecahan yang mempunyai penyebut 1000 disebut juga permil, bilangan yang terdiri dari bilangan bulat dan pecahan dinamakan bilangan campuran. Klik vidio diatas untuk mempelajari lebih lengkap tentang pecahan.',
            description3: 'Materi yang akan dipelajari di video adalah mengenai pengertian dan bentuk pecahan, operasi pada pecahan yang di mana akan membahas penjumlahan, pengurangan, perkalian, dan pembagian pecahan, dan juga akan membahas beberapa contoh soal yang berkaitan dengan pecahan.'
        },

        { judul: "Kuis Pecahan", component: KuisM2K10 },

        {
            judul: "Himpunan",
            url: "https://www.youtube.com/embed/ghCGbuBT-D0?si=3VKq6JaGWpbsDOO_",
            description1: 'Himpunan',
            description2: 'Himpunan adalah kumpulan benda atau objek yang dapat didefinisikan dengan jelas sehingga dengan tepat dapat diketahui objek yang termasuk di dalamnya dan yang tidak termasuk di dalamnya. \n\n Contoh:\n a. Kumpulan nama hari dalam seminggu yang diawali huruf S, merupakan sebuah himpunan karena dapat ditentukan dengan jelas nama-nama hari yang termasuk di dalamnya dan yang tidak termasuk di dalamnya. \n b. Kumpulan wanita cantik, bukan sebuah himpunan karena tidak terdefinisi dengan jelas, apakah seorang wanita termasuk di dalamnya atau tidak. \n\n Klik vidio diatas untuk mempelajari lebih lengkap tentang himpunan.',
            description3: 'Materi yang akan dipelajari di video adalah mengenai pengertian himpunan, himpunan bagian, operasi pada himpunan, diagram venn, dan juga akan membahas beberapa contoh soal yang berkaitan dengan himpunan.'
        },

        { judul: "Kuis Himpunan", component: KuisM3K10 },

        {
            judul: "Bentuk Aljabar",
            url: "https://www.youtube.com/embed/WsQJAhCU7Q8?si=ssfvZM8X1HVSFm1R",
            description1: 'Bentuk Aljabar',
            description2: 'Perhatikan kalimat-kalimat berikut:\n 1. Harga sebuah buku dan dua pensil.\n2. Delapan lebihnya dari sebuah bilangan.\n3. Kurangkan emapt kali sebuah bilangan dari 7.\n\nPada kalimat 1, misalkan harga sebuah buku dilambangkan dengan x dan harga sebuah pensil dilambangkan dengan y maka model matematikanya dapat ditulis x + 2y.\n\nPada kalimat 2, 3, dan 4, misalkan sebuah bilangan itu diwakili oleh m maka dapat ditulis berturut-turut sebagai m + 8, 7 - 4m. Bentuk-bentuk x + 2y, m + 8, dan 7 - 4m selanjutnya dinamakan bentuk aljabar. Klik vidio diatas untuk mempelajari lebih lengkap tentang bentuk aljabar.',
            description3: 'Materi yang akan dipelajari di video adalah mengenai pengertian bentuk aljabar, apa itu variabel, suku, koefisien, dan konstanta. Juga mempelajari operasi pada bentuk aljabar dan akan membahas beberapa contoh soal yang berkaitan dengan himpunan.'
        },

        { judul: "Kuis Bentuk Aljabar", component: KuisM4K10 },
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
                        <Link to="/MateriKls7" className="text-white bg-red-600 py-2 px-5 rounded-lg hover:bg-red-700 ">
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