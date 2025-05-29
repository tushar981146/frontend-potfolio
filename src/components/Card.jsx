import React from 'react'
import icon from '../assets/icons.svg'

export default function Card({title = "", text = "", link = ""}) {
    return (
        <div>
            <div class="relative flex max-w-[24rem] flex-col rounded-xl bg-richBlack  bg-clip-border text-gray-700 shadow-md">
                <div class="relative m-0  rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <iframe
                        src={link}
                        width="100%"
                        height="500px"
                        className="w-full h-[50%] rounded-xl"
                        style={{ border: "none", scrollbarWidth: "none", msOverflowStyle: "none"}}
                        title="Website Preview"
                    ></iframe>
                </div>
                <div class="p-6">
                    <h4 class="block  font-preahvihear text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
                        {title}
                    </h4>
                    <p class="mt-3 block  font-preahvihear text-xl font-normal leading-relaxed text-white antialiased">
                        {text}
                    </p>
                </div>
                <a href={link} className='cursor-default flex justify-end h-10 mb-3' target='_blank'>
                    <img src={icon} alt="" className='w-11 h-full mr-3 cursor-pointer' />
                </a>
                
            </div>
            

            
        </div>
    )
}
