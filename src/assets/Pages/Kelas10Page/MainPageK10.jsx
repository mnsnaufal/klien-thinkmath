import React from 'react';

export default function MainPageK10() {
    return (
        <div className="flex flex-col items-center mt-5 px-4 sm:px-8 lg:px-16 text-center">
            <div className="w-full max-w-4xl">
                <div className="bg-white py-10 px-6 mb-10 rounded-xl shadow-lg">
                    <h1 className="font-semibold text-xl sm:text-2xl">Tentang Materi Kelas 7</h1>
                </div>
                <div className="bg-white px-6 py-5 mb-8 rounded-xl shadow-lg">
                    <h1 className="font-semibold text-xl sm:text-2xl mb-5">
                        Pengenalan <span className="font-bold">Bilangan Bulat</span>
                    </h1>
                    <p className="text-base sm:text-lg font-medium mb-3">Apa itu Bilangan Bulat ?</p>
                    <p className="font-normal text-base sm:text-lg">
                        Bilangan bulat adalah himpunan bilangan yang terdiri dari bilangan negatif, nol, dan bilangan positif, seperti -3, 0, 4. Bilangan ini tidak memiliki komponen pecahan atau desimal.
                    </p>
                </div>

                <div className="bg-white px-6 py-5 mb-8 rounded-xl shadow-lg">
                    <h1 className="font-semibold text-xl sm:text-2xl mb-5">
                        Pengenalan <span className="font-bold">Pecahan</span>
                    </h1>
                    <p className="text-base sm:text-lg font-medium mb-3">Apa itu Pecahan ?</p>
                    <p className="font-normal text-base sm:text-lg">
                        Pecahan adalah bilangan yang dinyatakan dalam bentuk a/b, di mana a adalah pembilang dan b adalah penyebut (b ≠ 0). Pecahan digunakan untuk menunjukkan bagian dari keseluruhan.
                    </p>
                </div>

                <div className="bg-white px-6 py-5 mb-8 rounded-xl shadow-lg">
                    <h1 className="font-semibold text-xl sm:text-2xl mb-5">
                        Pengenalan <span className="font-bold">Himpunan</span>
                    </h1>
                    <p className="text-base sm:text-lg font-medium mb-3">Apa itu Himpunan ?</p>
                    <p className="font-normal text-base sm:text-lg">
                        Himpunan adalah kumpulan objek atau elemen yang didefinisikan secara jelas dan memiliki karakteristik tertentu, seperti himpunan bilangan ganjil {'{1, 3, 5, ...}'}.
                    </p>
                </div>

                <div className="bg-white px-6 py-5 mb-8 rounded-xl shadow-lg">
                    <h1 className="font-semibold text-xl sm:text-2xl mb-5">
                        Pengenalan <span className="font-bold">Aljabar</span>
                    </h1>
                    <p className="text-base sm:text-lg font-medium mb-3">Apa itu Aljabar ?</p>
                    <p className="font-normal text-base sm:text-lg">
                        Aljabar adalah cabang matematika yang menggunakan simbol (seperti x dan y) untuk mewakili bilangan dan operasi matematika. Aljabar mempelajari pola, hubungan, dan aturan dalam bentuk persamaan atau pertidaksamaan.
                    </p>
                </div>
            </div>
        </div>
    );
}
