import React from 'react'
import Axios from 'axios'
import "./Movies.css"

const TrandingUrl =" https://api.themoviedb.org/3/trending/all/week?api_key=edc8240911a40a9ee3d07b224809e6f9&language=en-US"
const myImageUrl = "https://image.tmdb.org/t/p/original"
function Main() {
    const [allMovies, setallMovies] = React.useState([])


    React.useEffect(function () 
    {
        async function fetchdata() {

            const output = await Axios.get(TrandingUrl)
            const result = output.data.results;
            console.log(result); 
            // setallMovies(result)
            setallMovies(result[Math.floor(Math.random()*20)])
        }

           // 0 &  1 0.32,.54,0.87  -->0
        fetchdata();

    }, [])
  return (
    <div>
        <img src={myImageUrl+allMovies.backdrop_path} className="mylargeimage"/>
        <h2>{allMovies.title}</h2>
        <p>{allMovies.overview}</p>
       
    </div>
  )
}

export default Main

//Random image -->tarnding now comp
//all movies =[{},{},{}]