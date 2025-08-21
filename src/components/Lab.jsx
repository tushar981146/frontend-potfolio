import React from 'react'
import Card from './Card'

function Lab() {

    const cardsList = [
        {
            src: "https://versal-vala-project-git-main-tushar981146s-projects.vercel.app/",
            title: "TODO App",
            text: `"A todo app is a simple application that allows users to wirite data we used appwrite for backend"`
        },
        {
            src: "https://celebrated-kheer-c9effa.netlify.app/",
            title: "Random Quote Machine",
            text: `"Built a Random Quote Machine using React; displays random quotes, wiite new ones, and allows tweeting quotes with styled UI."`
        },
        {
            src: "https://pokidexer.netlify.app/",
            title: "POKIDEXER",
            text: `"it is an initiall projects that use api and fecth data and show that pokemon power and abilities with images and name."`
        },
        {
            src: "https://freecodecam-calc.netlify.app/",
            title: "Google Calculator",
            text: `"it a complex calculator that avoids some basics type of errors and gives the user a good experience with a simple UI."`
        },
        {
            src: "https://incandescent-sprinkles-c90d3b.netlify.app/",
            title: "Markdown Previewer",
            text: `"markdown previewer is a simple application that allows users to write markdown and see the preview of it in real time."`
        },
        {
            src: "https://drummachinetushar.netlify.app/",
            title: "Drum Machine",
            text: `"A drum machine is a simple application that allows users to play different sounds by clicking on buttons or pressing keys."`
        }
        
    
        

    ]

    return (
        <div className="h-full w-[100%]">
            <div className="w-full h-full flex flex-wrap gap-5 justify-center mt-40">
                {
                    cardsList.map((items) => {
                        console.log(items);
                        return <Card link={items.src} title={items.title} text={items.text} />
                    })
                }
            </div>
        </div>
    )
}


export default Lab
