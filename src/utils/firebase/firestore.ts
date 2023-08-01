import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../../utils/firebase/firebase"

export const firestore = getFirestore(app);

export async function meetingChanges(entry: NewsLetterEntryData) {
    const docRef = doc(firestore, 'newsletters', String(entry.date));
    await setDoc(docRef, entry, { merge: true });
}