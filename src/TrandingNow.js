import React from 'react'
import Axios from 'axios'
import "./Movies.css"
import Youtube from "react-youtube"
import MovieTrailer from "movie-trailer"

const TrandingUrl ="https://api.themoviedb.org/3/trending/all/day?with_networks=213&api_key=edc8240911a40a9ee3d07b224809e6f9"
const myImageUrl = "https://image.tmdb.org/t/p/original"
function TrandingNow() {
  
  const [allMovies, setallMovies] = React.useState([])
  const [id,setId] = React.useState("")

  React.useEffect(function () {
      async function fetchdata() {
          const output = await Axios.get(TrandingUrl)
          const result = output.data.results;
          setallMovies(result)
      }
      fetchdata();
  }, [])
  function playTheTrailor(data)
  {
  MovieTrailer(data.name||"")
  .then(function(output)
  {
     const search =new URLSearchParams(new URL(output).search)
     setId(search.get("v"))
  })
  .catch(function()
  {

  })
//  console.log(data);

  }
  const myoption={
     height:"400px",
     width:"80%"
 }


  return (
    <div>
      <h1>TRANDING NOW</h1>
      <div className="alldiv">
           {allMovies.map(function (i) {
                const imageName = i.backdrop_path;
                return (<div className='trandingnowdiv'>
                    <img src={myImageUrl + imageName} className="trandingnowimage"onClick={function(){
                        playTheTrailor(i)
                    }}/>
                </div>)
            })}
            </div>
         { id && <Youtube videoId={id}opts={myoption}/> }
        </div>
  )
          }

export default TrandingNow;
  //rfce