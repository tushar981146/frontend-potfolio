import React from 'react'
import ProjectText from "../assets/ProjectText.svg"
import image from "../assets/image.png"
import github from "../assets/github.png"
// import song from "../assets/video/song.mp4"
import projectPreviews from "../assets/projectPreview.svg"
import { useState, useEffect } from "react";




function ProjectPreview({ rotate = "", text = "", song}) {

    const texts = ["Hello, World!", "Welcome to React!", "Tailwind is awesome!", "Enjoy coding!"];

    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100; // Typing speed (ms per character)
    const deletingSpeed = 50; // Deleting speed (ms per character)
    const delayBeforeDelete = 1000; // Delay before starting delete
    const delayBetweenTexts = 500; // Delay before starting next text

    useEffect(() => {
        const currentText = texts[textIndex];

        if (!isDeleting && displayText.length < currentText.length) {
            // Typing effect
            setTimeout(() => {
                setDisplayText(currentText.slice(0, displayText.length + 1));
            }, typingSpeed);
        } else if (isDeleting && displayText.length > 0) {
            // Deleting effect
            setTimeout(() => {
                setDisplayText(currentText.slice(0, displayText.length - 1));
            }, deletingSpeed);
        } else if (!isDeleting && displayText.length === currentText.length) {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), delayBeforeDelete);
        } else if (isDeleting && displayText.length === 0) {
            // Move to next text after deleting
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
            setTimeout(() => { }, delayBetweenTexts);
        }
    }, [displayText, isDeleting, textIndex]);

    return (
        <div className="w-screen flex justify-center items-center bg-red-90 h-100">

            <div className=' flex flex-row w-[90%] h-36 md:h-72 '>
                {/* First Child - Text & Background */}
                <div className="relative w-[80%] flex flex-col space-y-4">
                    <h5 className={`text-fuchsia-700 font-bold ml-7 mt-2 md:ml-16 text-sm md:text-xl ${rotate}`}>Featured Projects</h5>
                    <h1 className={`text-white ml-7 font-bold md:ml-16  md:text-5xl ${rotate}`}>Example Project</h1>

                    {/* Background Image Box */}
                    <div
                        className="absolute z-50  left-9 top-16 w-[95%] h-14 bg-blend-overlay bg-gradient-to-r 
                    from-[rgba(105,59,147,0.2)] via-[rgba(110,191,244,0.0448)] to-[rgba(70,144,213,0)] 
                    backdrop-blur-[40px] rounded-[14px] bg-cover text-center text-[5px] md:text-xl md:p-0 pt-3 leading-normal bg-center md:top-32 text-white md:left-16 md:h-28 ${rotate}"
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        <p className={`w-full h-full ${rotate} opacity-0 animate-[fadeIn_1.5s_ease-in-out_forwards]`}>
                        {displayText}
                        <span className="animate-blink border-r-2 border-black">&nbsp;</span>
                        </p>
                    </div>
                </div>

                {/* Second Child - GitHub Image */}
                <div className="h-full z-40 w-[40%] bg-background flex-shrink-0 flex justify-center items-center overflow-hidden rounded-xl">
                    <video
                        autoPlay
                        muted
                        src={song}
                        loop
                        className={`h-full w-full object-cover mt-7 ml-7 rounded-3xl ${rotate}`}>
                    </video>
                </div>

            </div>
        </div>
    )
}

export default ProjectPreview;
