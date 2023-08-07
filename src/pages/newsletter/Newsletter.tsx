import { useEffect, useState } from "react"
import { getNewsletters } from "../../utils/firebase/firestore"
import NewsLetterEntry from "../../components/NewsLetterEntry";

export default function Newsletter(){
  const [loading, setLoading] = useState(true);
  const [newsletters, setNewsletters] = useState<NewsLetterEntryData[]>([]);

  useEffect(() => {
    getNewsletters().then((data) => {
      setNewsletters(data);
      setLoading(false);
    })
  }, []);

  if(loading)return(
    <div className="w-full h-screen flex justify-center items-center text-6xl font-bold text-text-light animate-pulse">Loading Entries</div>
  )

  return(
    <div className="w-full h-full flex flex-col justify-center items-center overflow-y-scroll overflow-x-clip text-text bg-background">
      {newsletters.map(newsletter => <NewsLetterEntry key={newsletter.date} data={newsletter}/>)}
      <div className="h-screen"/>
    </div>
  )
}