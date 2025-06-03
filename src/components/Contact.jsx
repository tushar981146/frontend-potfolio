import React from 'react'
import submit from '../assets/submit.png'
import astorenote from '../assets/astorenote.png'
import { useState } from 'react';

function Contact() {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [discription, setDiscription] = React.useState('');

    const gradientStyle = {
        background: 'linear-gradient(to right, #FFFFFF 48%, #A604F2 99%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    const handleSubmit = async (e) => {
        

        try {
            const res = await fetch('https://potfolio-backend-je57.onrender.com/form', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, mail, phoneNumber, discription })
            })
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const item = await res.json();
           
        alert(item.message || "Data added successfully!");
        } catch (error) {
            console.error("Error while submitting form: ", error);
            alert("Error while submitting form");
        } finally {
            setFirstName('');
            setLastName('');
            setMail('');
            setPhoneNumber('');
            setDiscription('');
        }
    }









return (

    <div className="text-center">
        <div className=" h-40 mt-10 flex justify-center items-center flex-col" >
            <div style={gradientStyle}>
                <h1 className='font-inter font-extrabold text-7xl mb-7'>Get in touch</h1>
            </div>
            <p className='text-white font-preahvihear text-xl'>Reach out, and let's create a universe of possibilities together!</p>
        </div>


        <div className="w-full flex justify-center">
            <div className="flex flex-row   w-[80%] mb-28 mt-12 bg-richBlack rounded-3xl">
                <div className="ml-2 mr-2 text-center   mt-8 w-full md:w-[50%] md:ml-8 ">
                    <h1 className='mb-9 text-white font-preahvihear  font-extrabold text-xl md:text-3xl'>Let’s connect constellations</h1>
                    <p className=' text-white font-preahvihear font-extrabold text-xs md:text-xl'>Let's align our constellations! Reach out and let the </p>
                    <p className=' text-white font-preahvihear font-extrabold text-xs md:text-xl'>magic of collaboration illuminate our skies.</p>

                    <input name='firstName' className='text-white rounded-lg border border-white bg-gray-500   placeholder:text-white pl-3 font-semibold h-8  w-[100%] md:w-[48%]' type="text" required placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                    <input name='lastName' className='text-white rounded-lg md:ml-4 border border-white bg-gray-500 placeholder:text-white pl-3 font-semibold h-8 mt-6 md:mt-4  w-full md:w-[48%]' type="text" placeholder='Last Name (optional)' onChange={(e) => setLastName(e.target.value)} />

                    <input name='mail' type="email" required className='required mt-10 w-[100%] text-white rounded-lg border border-white font-semibold bg-gray-500 placeholder:text-white pl-3' placeholder='Email' onChange={(e) => setMail(e.target.value)} />
                    <input name='phoneNumber' type="number" className=' mt-10 w-[100%] text-white rounded-lg border border-white font-semibold bg-gray-500 placeholder:text-white pl-3' placeholder='Phone Number(optional)' onChange={(e) => setPhoneNumber(e.target.value)} />
                    <textarea required name="discription" className=' mt-10 h-20 w-[100%] text-white rounded-lg border border-white font-semibold bg-gray-500 placeholder:text-white pl-3' placeholder='Comment' id="" onChange={(e) => setDiscription(e.target.value)} ></textarea>
                    <button className='w-[100%] bg-fuchsia-800 text-white rounded-lg border mt-10 h-10 border-white font-semibold  flex justify-center items-center' onClick={handleSubmit}>
                        Submit
                        <img className='ml-2 object-cover mix-blend-screen' src={submit} alt="submit logo" />
                    </button>
                </div>
                <div className="w-[50%] h-[100%] z-50 hidden md:block md:mt-7 md:mr-2">
                    <img src={astorenote} alt="" >
                    </img>
                </div>
            </div>
        </div>
    </div>
)
    }

export default Contact
