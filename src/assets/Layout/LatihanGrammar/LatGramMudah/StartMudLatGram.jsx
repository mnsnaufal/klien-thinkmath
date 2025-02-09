import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'
import { Link } from 'react-router-dom'

export default function StartMudLatGram() {
    return (
        <>
            <div className='bg-blue-100 h-[100vh] pt-20 font-main'>
                <div>
                    <NavbarHome />
                </div>
                <div className='bg-white my-36 mx-96 pt-10 pb-5 rounded-2xl'>
                    <div className='text-center'>
                        <h1 className='font-bold text-3xl mb-5'>Kerjakan soalnya dengan teliti!</h1>
                        <p className='font-semibold text-2xl'>Level Mudah</p>
                    </div>
                    <Link to="/LatihanGramMudah">
                        <div className='justify-center flex mt-16'>
                            <button className='py-2 px-4 rounded-xl bg-blue-500 text-lg hover:bg-blue-600 font-semibold'>Mulai</button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
