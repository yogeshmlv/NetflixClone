import React from 'react'
import Axios from 'axios'
import "./Movies.css"

const romanceUrl ="https://api.themoviedb.org/3/discover/movie?api_key=edc8240911a40a9ee3d07b224809e6f9&language=en-US&page=1&with_genres=10749"
const myImageUrl = "https://image.tmdb.org/t/p/original"


function RomanceMovies() {
    const[allMovies,setallMovies] =React.useState([])
    React.useEffect(function(){
        async function fetchdata(){
            const output = await Axios.get(romanceUrl)
            const result =output.data.results;
            setallMovies(result)
        }
        fetchdata()
    })
  return (
    <div>
        <h1>ROMANCE MOVIES</h1>
        <div className="alldiv">
        {allMovies.map(function (i) {
                const imageName = i.backdrop_path;
                return (<div className='romancediv'>
                    <img src={myImageUrl + imageName} className="romanceimage"/>
                </div>)
            })}
        </div>
    </div>
  )
}

export default RomanceMovies;