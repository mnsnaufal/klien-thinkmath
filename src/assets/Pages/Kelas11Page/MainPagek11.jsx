import React from 'react';

export default function MainPageK11() {
    return (
        <div className="flex flex-col items-center mt-5 px-4 sm:px-8 lg:px-16 text-center">
            <div className="w-full max-w-4xl">
                <div className="bg-white py-10 px-6 mb-10 rounded-xl shadow-lg">
                    <h1 className="font-semibold text-xl sm:text-2xl">Tentang Materi Kelas 8</h1>
                </div>
                <div className="bg-white px-6 py-5 mb-8 rounded-xl shadow-lg">
                    <h1 className="font-semibold text-xl sm:text-2xl mb-5">
                        Pengenalan <span className="font-bold"> Bilangan Berpangkat</span>
                    </h1>
                    <p className="text-base sm:text-lg font-medium mb-3">Apa itu Bilangan Berpangkat ?</p>
                    <p className="font-normal text-base sm:text-lg">
                        Bilangan berpangkat adalah operasi matematika yang melibatkan pengulangan perkalian suatu bilangan sebanyak pangkatnya. Misalnya, a^n berarti a x a x ... (sebanyak n kali).
                    </p>
                </div>

                <div className="bg-white px-6 py-5 mb-8 rounded-xl shadow-lg">
                    <h1 className="font-semibold text-xl sm:text-2xl mb-5">
                        Pengenalan <span className="font-bold">Bentuk Akar</span>
                    </h1>
                    <p className="text-base sm:text-lg font-medium mb-3">Apa itu Bentuk Akar ?</p>
                    <p className="font-normal text-base sm:text-lg">
                        Bentuk akar merupakan kebalikan dari operasi perpangkatan, digunakan untuk mencari bilangan yang jika dipangkatkan menghasilkan nilai tertentu, seperti akar kuadrat atau akar pangkat 3.
                    </p>
                </div>

                <div className="bg-white px-6 py-5 mb-8 rounded-xl shadow-lg">
                    <h1 className="font-semibold text-xl sm:text-2xl mb-5">
                        Pengenalan <span className="font-bold">Teorema Phytagoras</span>
                    </h1>
                    <p className="text-base sm:text-lg font-medium mb-3">Apa itu Teorema Phytagoras ?</p>
                    <p className="font-normal text-base sm:text-lg">
                    Teorema Phytagoras adalah prinsip dalam segitiga siku-siku yang menyatakan bahwa kuadrat panjang sisi miring (hipotenusa) sama dengan jumlah kuadrat panjang kedua sisi lainnya: a² + b² = c².
                    </p>
                </div>

                <div className="bg-white px-6 py-5 mb-8 rounded-xl shadow-lg">
                    <h1 className="font-semibold text-xl sm:text-2xl mb-5">
                        Pengenalan <span className="font-bold">Persamaan Linier Satu Variabel</span>
                    </h1>
                    <p className="text-base sm:text-lg font-medium mb-3">Apa itu Persamaan Linier Satu Variabel ?</p>
                    <p className="font-normal text-base sm:text-lg">
                    Persamaan Linier Satu Variabel adalah persamaan matematika yang melibatkan satu variabel dengan derajat satu, berbentuk ax + b = 0, di mana x adalah variabel dan a, b adalah konstanta.
                    </p>
                </div>

                <div className="bg-white px-6 py-5 mb-8 rounded-xl shadow-lg">
                    <h1 className="font-semibold text-xl sm:text-2xl mb-5">
                        Pengenalan <span className="font-bold">Relasi dan Fungsi</span>
                    </h1>
                    <p className="text-base sm:text-lg font-medium mb-3">Apa itu Relasi dan Fungsi ?</p>
                    <p className="font-normal text-base sm:text-lg">
                    Relasi dan fungsi adalah konsep dalam matematika yang berkaitan dengan hubungan antara dua himpunan.
                    </p>
                </div>

                {/* <div className="bg-white px-6 py-5 mb-8 rounded-xl shadow-lg">
                    <h1 className="font-semibold text-xl sm:text-2xl mb-5">
                        Pengenalan <span className="font-bold">Grammar Intermediate</span>
                    </h1>
                    <p className="text-base sm:text-lg font-medium mb-3">Apa itu Grammar Intermediate?</p>
                    <p className="font-normal text-base sm:text-lg">
                        Materi yang akan dipelajari pada video kali ini adalah contoh-contoh grammar intermediate yang digunakan pada Tense, Conditional Text, Passive Voice, Modals, Relatives Clauses, Gerunds and Infinitives dan terakhir pada Comparatives and Superlatives.
                    </p>
                </div> */}
            </div>
        </div>
    );
}
