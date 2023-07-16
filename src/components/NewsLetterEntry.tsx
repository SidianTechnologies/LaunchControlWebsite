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

                <div className="w-full overflow-hidden mt-space rounded-lg h-[40vh] p-space flex justify-center items-center">
                    <div className="w-full h-full flex space-x-8 animate-sliding">
                        {imageCarousel.map((item) => (
                            <img className="rounded-[35px] border-2 border-primary/60 p-2" src={item.image}></img>
                        ))}

                        {imageCarousel.map((item) => (
                            <img className="rounded-[35px] border-2 border-primary/60 p-2" src={item.image}></img>
                        ))}
                    </div>
                </div>
                <div className=" px-4 md:w-full flex text-left flex-col lg:w-2/3 mt-space">

                    <div className="text-2xl text-text-light font-bold">Goal</div>
                    <div className="text-lg mt-0.5">In this meeting, we oboxed the engine we recently purchased, and made a list of parts to buy.</div>
                    <div className="mt h-0.5 w-2/3 bg-gradient-to-r from-primary/60 rounded-full"/>

                    <div className="text-2xl text-text-light font-bold mt-8">Accomplished</div>
                    <div className="text-lg mt-0.5">We got together a list of stuff to order including all the metal for the chassis, electronics, engine parts, turning hardware, wheels, and more.</div>
                    <div className="mt h-0.5 w-2/3 bg-gradient-to-r from-primary/60 rounded-full"/>

                    <div className="text-2xl text-text-light font-bold mt-8">Next Steps</div>
                    <div className="text-lg mt-0.5">In this meeting, we oboxed the engine we recently purchased, and made a list of parts to buy.</div>
                    <div className="mt h-0.5 w-2/3 bg-gradient-to-r from-primary/60 rounded-full"/>
                </div>
            </div>
        )
    }