import React, { useRef, useState, useEffect } from "react";
import { dataLatihanMudah } from "./dataLatihanMudah";
import { postQuiz } from "../../Kuis/quizcontroler/quizpost";
import { useNavigate } from 'react-router-dom';
import NavbarHome from "../../Navbar/NavbarHome";

//agar random
const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

export default function PilGanLatMudah() {
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(null)
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0)
    const [result, setResult] = useState(false)
    const [timeLeft, setTimeLeft] = useState(3600); // Timer dalam detik 3600
    const [isCompleted, setIsCompleted] = useState(false);

    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const option4 = useRef(null);

    const option_array = [option1, option2, option3, option4];

    const navigate = useNavigate();

    const data = {
        quizname: "Ujian Tingkat Mudah",
        score: score * 10,
        percobaan: 0,
        username: localStorage.getItem("username")
    }

    const checkAns = (e, ans) => {
        if (!lock && !isCompleted) {
            if (question.answer === ans) {
                e.target.classList.add("correct");
                setScore((prev) => prev + 1);
            } else {
                e.target.classList.add("wrong");
                option_array[question.answer].current.classList.add("correct");
            }
            setLock(true);
        }
    };

    const next = () => {
        if (lock && !isCompleted) {
            if (index === dataLatihanMudah.length - 1) {
                setResult(true);
                setIsCompleted(true);
            } else {
                setIndex((prev) => prev + 1);
                setQuestion(questions[index + 1]); // Ambil soal berikutnya yang sudah diacak
                setLock(false);
                setLock(false);
                option_array.forEach((option) => {
                    option.current.classList.remove("wrong");
                    option.current.classList.remove("correct");
                });
            }
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(dataLatihanMudah[0]);
        setScore(0);
        setLock(false);
        setResult(false);
        setTimeLeft(3600); // Reset timer
        setIsCompleted(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postQuiz(data)
        navigate('/LatihanPage');
    };

    //agar random
    useEffect(() => {
        const shuffledQuestions = shuffleArray([...dataLatihanMudah]); // Acak soal
        setQuestions(shuffledQuestions);
        setQuestion(shuffledQuestions[0]); // Set soal pertama
    }, []); // Hanya dijalankan sekali saat komponen dimuat

    useEffect(() => {
        if (timeLeft > 0 && !isCompleted) {
            const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && !result) {
            setIsCompleted(true);
            setResult(true); // Pindah ke hasil
        }
    }, [timeLeft, isCompleted, result]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="bg-blue-100 h-auto font-main">
            <NavbarHome />
            <div className="w-full flex items-center justify-center pt-24">
                <div className="bg-white rounded-xl py-10 px-5 mx-10 my-10 justify-center lg:w-1/3 md:w-1/4 drop-shadow-2xl shadow-2xl">
                    {!result ? (
                        <>
                            <div className="mb-5 w-full">
                                <h3 className="font-semibold text-base mb-5">{index + 1}. {question?.question}</h3>
                                {/* Render gambar jika tersedia */}
                                {question?.image && (
                                    <div className="flex justify-center mb-5 mx-1">
                                        <img src={question.image} alt={`Question ${index + 1}`} className="max-w-full h-auto" />
                                    </div>
                                )}
                                <ul>
                                    {question?.options?.map((option, idx) => (
                                        <li
                                            key={idx}
                                            ref={idx === 0 ? option1 : idx === 1 ? option2 : idx === 2 ? option3 : option4}
                                            onClick={(e) => checkAns(e, idx)}
                                            className={`border-2 px-2 py-3 mb-3 rounded-lg ${
                                                isCompleted ? "cursor-not-allowed opacity-50" : "hover:bg-indigo-300 transition duration-300 hover:drop-shadow-lg"
                                            }`}
                                        >
                                            {typeof option === "string" ? (
                                                option
                                            ) : (
                                                <img
                                                    src={option.image}
                                                    alt={`Option ${idx + 1}`}
                                                    className="max-w-full h-auto"
                                                />
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-center mb-5">
                                <p className="text-lg">Waktu Tersisa: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
                            </div>
                            <div className="justify-center text-center">
                                <button onClick={next} className={`px-5 py-2 bg-indigo-400 rounded-lg mb-3 hover:bg-indigo-500 ${isCompleted ? "cursor-not-allowed opacity-50" : ""}`}>
                                    Next
                                </button>
                                <div className="index text-sm">{index + 1} of {dataLatihanMudah.length} questions</div>
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <h1 className="font-bold text-8xl mb-10">{Math.round((score / dataLatihanMudah.length) * 100)}</h1>
                            <h1 className="mb-5 text-lg font-semibold">
                                You scored {score} out of {dataLatihanMudah.length} questions
                            </h1>
                            {/* <button onClick={reset} className="px-5 py-2 bg-indigo-400 rounded-lg mb-3 mr-2 hover:bg-indigo-500">
                                Reset
                            </button> */}
                            <button onClick={handleSubmit} className="px-5 py-2 bg-indigo-400 rounded-lg mb-3 ml-2 hover:bg-indigo-500">
                                Submit Result
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}