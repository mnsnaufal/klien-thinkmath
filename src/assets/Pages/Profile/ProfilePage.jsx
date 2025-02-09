import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [quiz, setQuiz] = useState([])
  const [notlp, setNotlp] = useState("")

  // reset password
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserByID();
  }, []);

  const getUserByID = async () => {
    const response = await axios.get(`http://localhost:4000/user/${id}/getUserByID`);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setNotlp(response.data.notlp)
    setQuiz(response.data.quiz)
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.patch(`http://localhost:4000/user/${id}/updateUser`, {
  //       username, notlp
  //     });
  //     alert('Username telah di ubah');
  //     localStorage.setItem("username", username);
  //     getUserByID();
  //     navigate('/HomePage');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validasi jika pengguna ingin mengganti password
      if (newPassword && newPassword !== confirmNewPassword) {
        alert("Password baru dan konfirmasi password tidak cocok!");
        return;
      }
  
      // Siapkan data untuk dikirim ke backend
      const updateData = {
        username,
        notlp,
        ...(newPassword && { oldPassword, newPassword }), // Tambahkan password jika ada
      };
  
      // Kirim permintaan ke backend
      await axios.patch(`http://localhost:4000/user/${id}/updateUser`, updateData);
      alert('Profile telah diupdate');
      
      // Perbarui username di localStorage
      localStorage.setItem("username", username);
  
      // Perbarui data pengguna setelah perubahan
      getUserByID();
  
      // Arahkan kembali ke halaman HomePage
      navigate('/HomePage');
    } catch (error) {
      alert(error.response?.data?.message || "Terjadi kesalahan");
      console.log(error);
    }
  };
  

  const handleLogout = () => {
    localStorage.removeItem("username")
    axios.get('http://localhost:4000/user/logout')
      .then(res => {
        if (res.data.status) {
          alert("Terimakasih")
          navigate('/')
        }
      }).catch(err => console.log(err))
  }

  return (
    <section className="w-full py-16 flex flex-col items-center h-screen overflow-y-scroll bg-blue-100">
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 mb-20 w-full z-50 bg-blue-500 border-b-4 border-white py-4 sm:py-0"
      >
        <div className="font-main">
          <div className="flex justify-center items-center ">
            <div className="py-9 flex">
              <Link to='/HomePage' className="fixed top-3 left-6 bg-pink-500 text-white px-2 py-2 rounded-lg font-semibold text-lg hover:bg-pink-600">Kembali</Link>
              <div onClick={handleLogout} className="fixed top-3 right-6 bg-pink-500 text-white px-2 py-2 rounded-lg font-semibold text-lg hover:bg-pink-600">Keluar</div>
            </div>
          </div>
        </div >
      </nav >


      <h1 className="font-bold font-main text-3xl text-black text-center mb-10 mt-10 md:text-5xl md:mb-16">PROFIL</h1>

      <form onSubmit={handleSubmit} className="p-4 w-5/6 md:p-8 md:w-3/4 lg:w-8/12 border-2 bg-white border-slate-800 rounded-2xl shadow-xl mb-20 font-main">
        <h1 className="font-bold text-3xl text-center mb-10">Edit Profil</h1>

        {/* Kolom Kiri */}
        <div className="flex justify-between items-center">
            <div className="w-1/2 pr-2">
                <label htmlFor="email" className="w-full font-bold text-lg md:text-xl lg:text-xl">Email</label>
                <input type="email" name="email" id="email" value={email} disabled onChange={(e) => setEmail(e.target.value)} className="border-2 rounded-xl border-slate-700 w-full px-3 bg-gray-300 font-normal py-2 md:px-7 md:py-4 lg:py-2 mb-4" />

                <label htmlFor="username" className="w-full font-bold text-lg md:text-xl lg:text-xl">Nama Pengguna</label>
                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="border-2 rounded-xl border-slate-700 w-full px-3 text-black focus:bg-slate-200 py-2 md:px-7 md:py-4 lg:py-2 mb-4" />

                <label htmlFor="notlp" className="w-full font-bold text-lg md:text-xl lg:text-xl">No. Telpon</label>
                <input type="number" name="notlp" id="notlp" value={notlp} onChange={(e) => setNotlp(e.target.value)} className="border-2 rounded-xl border-slate-700 w-full px-3 text-black py-2 md:px-7 md:py-4 focus:bg-slate-200 lg:py-2 mb-12" />
            </div>

            {/* Garis Vertikal */}
            <div className="w-1/2 border-l-2 border-slate-800"></div>

            {/* Kolom Kanan */}
            <div className="w-1/2 pl-2">
                <label htmlFor="oldPassword" className="w-full font-bold text-lg md:text-xl lg:text-xl">Kata Sandi Lama</label>
                <input
                    type="password"
                    name="oldPassword"
                    id="oldPassword"
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="border-2 rounded-xl border-slate-700 w-full px-3 text-black focus:bg-slate-200 py-2 md:px-7 md:py-4 lg:py-2 mb-4"
                />

                <label htmlFor="newPassword" className="w-full font-bold text-lg md:text-xl lg:text-xl">Kata Sandi Baru</label>
                <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border-2 rounded-xl border-slate-700 w-full px-3 text-black focus:bg-slate-200 py-2 md:px-7 md:py-4 lg:py-2 mb-4"
                />

                <label htmlFor="confirmNewPassword" className="w-full font-bold text-lg md:text-xl lg:text-xl">Konfirmasi Kata Sandi Baru</label>
                <input
                    type="password"
                    name="confirmNewPassword"
                    id="confirmNewPassword"
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="border-2 rounded-xl border-slate-700 w-full px-3 text-black focus:bg-slate-200 py-2 md:px-7 md:py-4 lg:py-2 mb-12"
                />
            </div>
        </div>

        <button type="submit" className="bg-pink-500 hover:bg-blue-500 text-white text-center w-full rounded-lg font-semibold py-2">Simpan Profil</button>
    </form>


      <h1 className="font-bold font-main text-3xl text-center mb-10 md:text-5xl md:mb-16">HASIL QUIZ</h1>
      <div className="w-5/6 p-4 bg-white border-2 border-slate-800 rounded-2xl shadow-xl md:grid md:grid-cols-2 md:gap-x-8">
        {quiz.length === 0 ? (
          <div className="p-4 w-5/6 md:p-8 md:w-3/4 text-center flex flex-col lg:w-1/2 items-center justify-center border-2 border-slate-800 rounded shadow-xl">
            <p className="text-center font-semibold mb-3 text-lg md:text-xl">Anda belum mengikuti Quiz Apapun</p>
          </div>
        ) : (
          quiz.map(data => (
            <div key={data._id} className="w-full bg-blue-100 border border-slate-600 p-4 shadow-lg flex flex-col items-center rounded-2xl mb-10 font-main">
              <h1 className=" font-semibold text-2xl mb-4">Skor Kamu</h1>
              <div className="border-2 p-3 rounded-3xl border-black bg-pink-500 mb-7 text-white">
                <p className="font-bold text-3xl">{data.score == 0 ? '0' : data.score}</p>
              </div>
              <p className="font-bold">{data.quizname}</p>
              <p className="font-semibold italic">percobaan ke: {data.percoobaan}</p>
            </div>
          ))
        )}


      </div>

    </section>
  );
};

export default ProfilePage;
