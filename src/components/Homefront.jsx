import React from 'react'

export default function Homefront() {
    return (
        <div className="h-auto w-full  flex flex-col">
            <div className="relative top-20 ml-44 h-20 p-0 flex flex-row  justify-center items-center">
                <Arrow />
                <p className='text-white  text-[19px] font-preahvihear '>Hello! I am <span className='text-[19px] font-preahvihear text-purple-900'>Tushar</span></p>
            </div>
            <div className=" ml-12 h-72 w-72 p-0 ">
                <img src={image} className='w-full h-full' />
            </div>

            {/* <div className=" z-50  w-full">
        <div className="h-[100%] w-[70%] ml-40 flex flex-row justify-center items-center ">
            <Arrow />
            <p className='text-white mb-10  text-[19px] font-preahvihear '>Hello! I am <span className='text-[19px] font-preahvihear text-purple-900'>Tushar</span></p>
        </div>

    </div> */}

            <div className=" mt-36 relative font-preahvihear text-4xl md:left-[47%] md:bottom-60 flex flex-col w-full">
                <span className=' mb-9 text-xl text-white'>Steve Jobs</span>
                <p className='text-white mb-9'>Design is not just what it looks like and feels like,</p>
                <p class="text-5xl font-bold text-white">
                    it's how it
                    <span class="group relative inline-block ml-10 text-fuchsia-700 text-7xl pr-8 pl-8 rounded-full border-[4px] border-gray-400 overflow-hidden cursor-pointer">
                        <span class="relative z-10">Work</span>
                        <span class="absolute inset-0 bg-gradient-to-r from-fuchsia-700 to-fuchsia-700 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 opacity-70"></span>
                    </span>
                    ...
                </p>
            </div>
        </div>

    )
}
