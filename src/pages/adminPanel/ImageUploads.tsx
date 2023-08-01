import {ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import { useState, useEffect } from "react"
import { storage } from "../../utils/firebase/firebase"
import { meetingChanges } from "../../utils/firebase/firestore"
import { query, orderBy , limit, collection, deleteDoc, getDocs, doc } from "firebase/firestore"
import { firestore } from "../../utils/firebase/firestore"

export default function ImageUploads(){
    const [ImageUploads, setImageUploads] = useState<File[]>([])
    const [ImageList, setImageList] = useState<string[]>([])
    const [accomplished, setAccomplished] = useState("")
    const [nextSteps, setNextSteps] = useState("")
    const [objective, setObjective] = useState("")
    const [date, setDate] = useState(Number)

    const ImageListRef = ref(storage, "images/")
    const uploadImage = () => {
        if (ImageUploads == null) return;
        ImageUploads.forEach(imageUpload => {
            const ImageRef = ref(storage, `images/${new Date().getDate()}/${imageUpload.name + Date.now()}`);
            uploadBytes(ImageRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageList((prev) => [...prev?? [], url]);
                    console.log(url);
                })
            })
        })
    };

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
        const q = query(collection(firestore, "newsletters"), orderBy("asc"), limit(1));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id + "=>" + doc.data());
        })
    }

    return(
        <div className="relative w-full h-screen">
            <div className="flex justify-center text-6xl text-text-light font-bold mb-8">Admin Controls</div>

            <div className="flex py-8 items-center">
                <input className="absolute border-2" type="file" multiple onChange={(handleChange)}/>

                <button className="absolute right-4 button-primary" onClick={(() => {uploadImage(); meetingChanges({
                    date: date,
                    images: ImageList,
                    accomplished: accomplished,
                    nextSteps: nextSteps,
                    objective: objective,
                });})}>Upload</button>

                <button className="absolute left-4 button-primary" onClick={deleteEntry}>Delete</button>
            </div>

            <div className="flex flex-col items-center w-full">
                <input className="text-box" type="date" onChange={e => {setDate(new Date(e.target.value).getTime())}}/>
                <input className="my-4 text-box" type="text" placeholder="Objective" onChange={e => {setObjective(e.target.value);}}/>
                <input className="mb-4 text-box" type="text" placeholder="Accomplished" onChange={e => {setAccomplished(e.target.value);}}/>
                <input className="text-box" type="text" placeholder="Next Steps" onChange={e => {setNextSteps(e.target.value);}}/>
            </div>

            <div className="flex">
                {ImageList?.map((url, index) => {
                    return <img key={index} className="w-max h-96 m-4 rounded-3xl border-2 p-2 border-primary/60 bg-primary/10" src={url}/>;
                })}
            </div>
        </div>
    )
}