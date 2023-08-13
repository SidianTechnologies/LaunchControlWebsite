import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../../utils/firebase/firebase"

export const firestore = getFirestore(app);

export async function meetingChanges(entry: NewsLetterEntryData) {
    const docRef = doc(firestore, 'newsletters', String(entry.date));
    await setDoc(docRef, entry, { merge: true });
}

export async function getNewsletters(){
  const colRef = collection(firestore, 'newsletters');
  const docs = (await getDocs(colRef)).docs;
  const newsletters: NewsLetterEntryData[] = [];
  docs.forEach(doc => {
    const data = doc.data() as NewsLetterEntryData;
    newsletters.push(data);
  });
  return newsletters;
}