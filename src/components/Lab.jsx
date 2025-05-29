import React from 'react'
import Card from './Card'

function Lab() {

    const cardsList = [
        {
            src: "https://versal-vala-project-git-main-tushar981146s-projects.vercel.app/",
            title: "UI/UX Review Check",
            text: `"Because it's about motivating the doers. Because I'm here to follow my
                        dreams and inspire others."`
        },
        {
            src: "https://celebrated-kheer-c9effa.netlify.app/",
            title: "UI/UX Review Check",
            text: `"Because it's about motivating the doers. Because I'm here to follow my
                        dreams and inspire others."`
        },
        {
            src: "https://pokidexer.netlify.app/",
            title: "UI/UX Review Check",
            text: `"Because it's about motivating the doers. Because I'm here to follow my
                        dreams and inspire others."`
        },
        {
            src: "https://freecodecam-calc.netlify.app/",
            title: "UI/UX Review Check",
            text: `"Because it's about motivating the doers. Because I'm here to follow my
                        dreams and inspire others."`
        },
        {
            src: "https://incandescent-sprinkles-c90d3b.netlify.app/",
            title: "UI/UX Review Check",
            text: `"Because it's about motivating the doers. Because I'm here to follow my
                        dreams and inspire others."`
        },
        {
            src: "https://drummachinetushar.netlify.app/",
            title: "UI/UX Review Check",
            text: `"Because it's about motivating the doers. Because I'm here to follow my
                        dreams and inspire others."`
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
