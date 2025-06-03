import React, { useEffect } from 'react'
import Arrow from '../assets/Arrow.svg'
import resuma from '../assets/Resuma.pdf'
import image from '../assets/image.svg'
import ProjectLogo from '../assets/ProjectLogo'
import ProjectPreview from './ProjectPreview'
import ProjectPreviews from "../assets/projectPreview.svg"
import pokemon from "../assets/video/pokemon.mp4"
import spriteSheet from '../assets/video/spriteSheet.mp4'

function Home() {

    return (


        <div className="w-full select-none h-[100%]">


            <div className=" relative flex  flex-row md:justify-center">

                <div className="ml-2  mt-10 h-56 w-56  p-0  md:20 md:h-96 md:w-96">
                    <img src={image} className='w-full h-full' />
                </div>

                <div className="w-40 z-25 mt-9 h-8 p-0 absolute top-4 left-14  flex flex-row justify-center md:left-80 md:w-96  md:h-16 ">
                    <img src={Arrow} alt="" />
                    <p className='text-white ml-0 mb-10 text-[9px] md:text-2xl font-preahvihear '>Hello! I am <span className='text-[9px] md:text-3xl font-preahvihear text-purple-900'>Tushar</span></p>
                </div>


                <div className=" mt-10  pt-14  font-preahvihear text-xl md:w-[45%]">
                    <span className='mb-9 text-xs md:text-3xl text-white'>Steve Jobs</span>
                    <p className='text-white pl-0 mb-2 md:text-5xl  text-sm md:mt-8'>Design is not just what it looks like and feels like,</p>
                    <p class="text-sm md:text-5xl font-bold text-white">
                        it's how it
                        <span class="group relative inline-block ml-10 text-fuchsia-700 text-xl pr-8 pl-8 rounded-full border-[4px] border-gray-400 overflow-hidden cursor-pointer md:mt-8">
                            <span class="relative z-10 md:text-6xl ">Work</span>
                            <span class="absolute inset-0 bg-gradient-to-r from-fuchsia-700 to-fuchsia-900 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 opacity-70"></span>
                        </span>
                        ...
                    </p>
                </div>
            </div>

            <h1 className='flex justify-center items-center font-preahvihear text-4xl text-center text-white mb-4 mt-40 '>I'm a Web Developer.| Tushar</h1>
            <h1 className='flex justify-center items-center font-preahvihear text-xs text-white'>Currently, I'm looking a Web Developer job at <span className='text-blue-700 ml-4'>startups</span>,</h1>


            <div className="text-white font-preahvihear p-0 text-xl mt-32 flex justify-center items-center flex-col">

                <p className='mb-10 text-sm md:text-xl text-center'>A self-taught full-stack developer, learning and building real-world projects with passion. </p>
                <p className='mb-10 text-sm md:text-xl text-center'> I craft responsive and dynamic web applications that not only look great</p>
                <p className='mb-10 text-sm md:text-xl text-center'>but also solve real problems by balancing user experience with performance.</p>


                <div className="w-full mt-32 p-0">
                    <ProjectLogo />
                </div>

                <div className="w-full h-[100%] bg-background  flex flex-col">
                    <div className="md:mt-96 mt-44 mb-36 md:mb-72 w-full relative  flex justify-center items-center">
                        <img src={ProjectPreviews} alt="" className='absolute left-40 md:left-[45%] md:h-[40rem] h-60' />
                        <ProjectPreview text='A web app for visualizing personalized Spotify data. View your
                                            top artists, top tracks, recently played tracks, and detailed audio
                                            information about each track. Create and save new playlists of
                                            recommended tracks based on your existing playlists and more' song={spriteSheet} />
                    </div>

                    <div className="scale-x-[-1] w-full h-[100%] relative bg-background flex justify-center md:mt-12 items-center">
                        <img src={ProjectPreviews} alt="" className='absolute left-40 md:left-[45%] md:h-[40rem] h-60' />
                        <ProjectPreview rotate='scale-x-[-1]' text='A web app for visualizing personalized Spotify data. View your
                                                                    top artists, top tracks, recently played tracks, and detailed audio
                                                                    information about each track. Create and save new playlists of
                                                                    recommended tracks based on your existing playlists and more' song={pokemon} />
                    </div>



                </div>

                <a href={resuma} target={'_blank'} className='text-white font-preahvihear bg-fuchsia-700 w-48 cursor-pointer text-xl mt-32 flex pt-2 pb-2 pr-4 pl-4 rounded-xl justify-center items-center select-all'>
                    Download C.V
                </a>


            </div>

        </div>
    )
}

export default Home
