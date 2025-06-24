import React from 'react'
import github from '../assets/github.png'
import icom8 from "../assets/icons8-linkedin.svg"

function Footer() {
    return (
        <div className='pl-8 select-none'>
            <h1 className='text-3xl mt-32 mb-10 font-preahvihear text-white'>Contact</h1>
            <p className='text-xl mb-10 text-white font-preahvihear'>I am currently looking for full stack web developer job? let's connect</p>
            <p className='text-xl mb-10 text-white font-preahvihear'>tushar21522@gmail.com</p>
            <div className="flex flex-row  mb-44">
            <a href="https://www.linkedin.com/in/tushar-readnal-855265367/" target='_blank'>
                <img className='rounded-full'  src={icom8} alt="" />
            </a>
            <a href="https://github.com/tushar981146" target='_blank'>
                <img className='h-12 w-12 ml-8' src={github} alt="" />
            </a>
            </div>
        </div>
    )
}

export default Footer
