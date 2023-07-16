    import { useState } from "react"

    export default function NewsLetterEntry () {

        const imageCarousel = [
            {
                id: 1,
                image: "./IMG_2472.jpg"
            },
            {
                id: 2,
                image: "IMG_2473.jpg"
            },
            {
                id: 3,
                image: "IMG_2474.jpg"
            },
            {
                id: 4,
                image: "IMG_2475.jpg"
            },
            {
                id: 5,
                image: "IMG_2476.jpg"
            }
        ]
        return (
            <div className="flex flex-col items-center text-center w-full h-full my-break">
                <div className="text-text-light text-6xl font-bold">
                    Newsletter
                </div>

                <div className="flex justify-between mt-space text-primary text-2xl font-bold">7/16/2023</div>

                <div className="mt-space relative overflow-hidden rounded-lg h-[40vh] p-space flex justify-center items-center">
                    <div id="slider" className="w-full h-full overflow-auto scroll-smooth flex space-x-8">
                        {imageCarousel.map((item) => (
                            <img className="rounded-[35px] border-2 border-primary/60 p-2" src={item.image}></img>
                        ))}
                    </div>
                </div>
                <div className="md:w-full text-left flex flex-col text-primary text-2xl lg:w-2/3 mt-space">
                    <div>Objective</div>
                    <div className="mt-space text-text text-xl">{String("Filler text ").repeat(20)}</div>
                </div>
            </div>
        )
    }