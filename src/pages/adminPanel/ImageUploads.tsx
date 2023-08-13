import {ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import { useState, useEffect } from "react"
import { storage } from "../../utils/firebase/firebase"
import { meetingChanges } from "../../utils/firebase/firestore"
import { query, orderBy , limit, collection, deleteDoc, getDocs, doc } from "firebase/firestore"
import { firestore } from "../../utils/firebase/firestore"
import { ArrowClockwise } from "react-bootstrap-icons"

export default function ImageUploads(){
    const [ImageUploads, setImageUploads] = useState<File[]>([])
    const [ImageList, setImageList] = useState<string[]>([])
    const [accomplished, setAccomplished] = useState("")
    const [nextSteps, setNextSteps] = useState("")
    const [objective, setObjective] = useState("")
    const [date, setDate] = useState(Date.now())
    const [disablePress, setDisablePress] = useState(false)

    const ImageListRef = ref(storage, "images/")

    const uploadImage = async () => {
        if (ImageUploads == null) return;

        const arr: string[] = [];

        for(const imageUpload of ImageUploads){
            const ImageRef = ref(storage, `images/${new Date().getDate()}/${imageUpload.name + Date.now()}`);
            const snapshot = await uploadBytes(ImageRef, imageUpload);
            const url = await getDownloadURL(snapshot.ref);
            arr.push(url);
        }

        setImageList(arr);

        return arr;
    };

    const disableMultiUpload = () => {
        setDisablePress(true)

    }

    useEffect(() => {
        listAll(ImageListRef).then ((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev?? [], url]);
                })
            });
        })
    }, [])

    const handleChange = (e: any) => {
        for(let i = 0; i <= e.target.files.length; i++){
            setImageUploads(e.target.files === null? [] : [...e.target.files]); 
        }}

    async function deleteEntry() {
        const q = query(collection(firestore, "newsletters"), orderBy("date", "desc"), limit(1));
        const querySnapshot = await getDocs(q);
        if(querySnapshot.docs.length == 0) return;
        await deleteDoc(doc(firestore, "newsletters", querySnapshot.docs[0].id));
    }

    return(
        <div className="relative w-full h-full p-4">
            <h1 className="flex justify-center text-6xl text-text-light font-bold">Admin Controls</h1>

            <h2 className="flex justify-center text-lg text-text mb-8">(WARNING: Works best with 3 to 5 pictures)</h2>

            <div className="flex flex-col items-center">
                <input className="text-box outline-none" type="date" onChange={e => {setDate(new Date(e.target.value).getTime())}}/>
                <input className="my-4 text-box outline-none" type="text" placeholder="Objective" onChange={e => {setObjective(e.target.value);}}/>
                <input className="mb-4 text-box outline-none" type="text" placeholder="Accomplished" onChange={e => {setAccomplished(e.target.value);}}/>
                <input className="text-box outline-none" type="text" placeholder="Next Steps" onChange={e => {setNextSteps(e.target.value);}}/>
            </div>

            <div className="flex h-fit w-full mt-4 space-x-4 justify-evenly">
                <input className="absolute w-48 file:w-48 file:border-primary-dark file:bg-primary file:text-primary-dark file:font-bold file:py-2 file:px-4 file:rounded" type="file" multiple onChange={(handleChange)}/>

                <button disabled={disablePress} className="button-primary disabled:bg-white" onClick={(() => {disableMultiUpload();
                    uploadImage().then((imageURLs) => {
                        meetingChanges({
                            date: date,
                            images: imageURLs?? [],
                            accomplished: accomplished,
                            nextSteps: nextSteps,
                            objective: objective,
                        }); 
                        setDisablePress(false)
                    })

                })}>Upload</button>

                <button className=" button-primary" onClick={deleteEntry}>Delete</button>
            </div>

            <div className={`absolute w-full flex flex-col justify-center h-1/3 items-center mt-8 ${disablePress == false? "invisible" : "visible"}`}>
                <div className="text-text-light/75 text-4xl font-bold p-2">Loading Entry</div>
                <div className="text-9xl text-primary/70 animate-spin"><ArrowClockwise/></div>
            </div>

            <div className="flex overflow-auto mt-8">
                {ImageList?.map((url, index) => {
                    return <img key={index} className="w-max h-96 m-4 rounded-3xl border-2 p-2 border-primary/60 bg-primary/10" src={url}/>;
                })}
            </div>
        </div>
    )
}