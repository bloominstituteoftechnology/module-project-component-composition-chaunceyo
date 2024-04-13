import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'


const URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`




function App() {
  const [myData, setMyData] = useState()
  useEffect(() => {
    function getPhoto(){  //call getPhoto when ready to send requests
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setMyData(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    
    setMyData(
        {
            "date": "2024-04-12",
            "explanation": "Baily's beads often appear at the boundaries of the total phase of an eclipse of the Sun. Pearls of sunlight still beaming through gaps in the rugged terrain along the lunar limb silhouette, their appearance is recorded in this dramatic timelapse composite. The series of images follows the Moon's edge from beginning through the end of totality during April 8's solar eclipse from Durango, Mexico. They also capture pinkish prominences of plasma arcing high above the edge of the active Sun. One of ...",
            "hdurl": "https://apod.nasa.gov/apod/image/2404/image0tseKorona.jpg",
            "media_type": "image",
            "service_version": "v1",
            "title": "Total Totality",
            "url": "https://apod.nasa.gov/apod/image/2404/image0tseKorona_1100.jpg"
          },     
    )
  }, [])

  if(!myData) return "Loading";

  return (
   <section>
      <Card 
        title={myData.title} 
        text={myData.explanation} 
        imageURL={myData.hdurl} 
        date={myData.date}
      />
   </section>
  )
}

export default App
