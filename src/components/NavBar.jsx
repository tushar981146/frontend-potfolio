import React from 'react'
import HomeLogo from "../assets/HomeLogo"
import ContactLogo from "../assets/ContactLogo"
import { NavLink } from 'react-router-dom'
import {Menu, X} from "lucide-react"
function NavBar() {
    const [logo, setLogo] = React.useState(<HomeLogo />)
    const [isOpen, setIsOpen] = React.useState(false)

    const gradientStyle = {
        background: 'linear-gradient(to right, #FFFFFF 48%, #A604F2 99%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    const handleNavClick = (path, logoComponent) => {
        setIsOpen(false)
        console.log(logoComponent)
        setLogo(logoComponent) // Change logo
        navigate(path) // Force navigation update
    }
    const toggleScreen = () => {
        setIsOpen(!isOpen)
    }


    return (
        
            <nav className="w-full  h-full bg-headerPurple flex justify-between item-center">
                <div className="flex flex-row justify-evenly items-center h-[100%] w-[40%] mr-14 cursor-pointer">
                    {logo}
                </div>
                <div className="hidden md:flex flex-row justify-evenly items-center h-[100%] w-[40%] mr-14">
                    <NavLink to={'/'} className={`font-jakarta font-semibold text-[20px] md:text-2xl p-2 pl-4 pr-4 rounded-full text-white cursor-pointer hover:bg-slate-800`}  onClick={() => setLogo(<HomeLogo />  )}> Home</NavLink>
                    <NavLink to={'/contect'} className="font-jakarta font-semibold text-[20px] md:text-2xl p-2 pl-4 pr-4 rounded-full text-white cursor-pointer hover:bg-slate-800" onClick={() => setLogo(<ContactLogo />)}>Contact</NavLink>
                    <NavLink to={'/lab'} className="font-jakarta font-semibold text-[20px] md:text-2xl p-2 pl-4 pr-4 rounded-full text-white cursor-pointer hover:bg-slate-800">Project</NavLink>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleScreen}>
                        {
                            isOpen ? <X className='text-white  mt-3 mr-6'/> : <Menu className='text-white mt-3 mr-6' />
                        }
                    </button>
                </div>

                {isOpen && (
                <div className="absolute top-[8vh] left-0 w-full bg-background text-white flex flex-col space-y-4 py-4 text-center md:hidden z-50">
                    <NavLink to="/" className="z-50 bg-red-600 text-lg font-semibold cursor-pointer hover:bg-purple-700 py-2"onClick={() => handleNavClick('/', <HomeLogo />)}>Home</NavLink>
                    <NavLink to="/contect" className=" bg-red-600 text-lg font-semibold cursor-pointer hover:bg-purple-700 py-2" onClick={() => handleNavClick('/contect', <ContactLogo />)}>Contact</NavLink>
                    <NavLink to="/lab" className="bg-red-600 text-lg font-semibold cursor-pointer hover:bg-purple-700 py-2" onClick={() => handleNavClick('/lab', <HomeLogo />)}>Project</NavLink>
                </div>
            )}
            </nav>
        
    )
}

export default NavBar
