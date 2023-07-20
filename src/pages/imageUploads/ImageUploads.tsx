import { getStorage, ref, uploadBytes } from "firebase/storage"
import { useState, useEffect } from "react"
import { storage } from "../../utils/firebase/firebase"

export default function ImageUploads(){
    const [ImageUpload, setImageUpload] = useState<File>()
    const uploadImage = () => {
        if (ImageUpload == null) return;
        const imageRef = ref(storage, `images/${ImageUpload.name + Date.now()}`)
        uploadBytes(imageRef, ImageUpload).then(() => {
            alert("Image Uploaded")
        })
        
    };

    useEffect(() => {
        
    })

    return(
        <div>
            <input className="button-primary" type="file" onChange={(event) => {setImageUpload(
                event.target.files === null? undefined : event.target.files[0]
                )}}/>
            <button className="button-primary" onClick={uploadImage}>Upload Image</button>
        </div>
    )
}