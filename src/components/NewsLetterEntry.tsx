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

                <div className="relative h-[40vh] overflow- whitespace-nowrap">
                    <div className="absolute z-30 w-full h-full flex animate-sliding space-x-8">
                        {imageCarousel.map((item) => (
                            <img className="rounded-[35px] border-2 border-primary/60 p-2" src={item.image}></img>
                        ))}
                    </div>
                    <div className=" z-10 w-full h-full flex space-x-8 animate-delay">
                        {imageCarousel.map((item) => (
                            <img className="rounded-[35px] border-2 border-primary/60 p-2" src={item.image}></img>
                        ))}
                    </div>
                </div>
                <div className=" px-4 md:w-full text-left flex flex-col lg:w-2/3">
                    <div className="text-2xl text-text-light font-bold">Objective</div>
                    <div className="mt-2 text-text text-lg">{String("Filler text ").repeat(20)}</div>
                </div>
            </div>
        )
    }