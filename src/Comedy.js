import React from 'react'
import Axios from 'axios'
import "./Movies.css"

const ComedyUrl ="https://api.themoviedb.org/3/discover/movie?api_key=edc8240911a40a9ee3d07b224809e6f9&language=en-US&page=1&with_genres=35"
const myImageUrl = "https://image.tmdb.org/t/p/original"


function Comedy() {
    const [allMovies, setallMovies] = React.useState([])
    React.useEffect(function () {
        async function fetchdata() {
            const output = await Axios.get(ComedyUrl)
            const result = output.data.results;
            setallMovies(result)
        }
        fetchdata();
    }, [])
  return (
    <div>
        <h1>COMEDY MOVIES</h1>
        <div className="alldiv">
           {allMovies.map(function (i) {
                const imageName = i.backdrop_path;
                return (<div className='comedydiv'>
                    <img src={myImageUrl + imageName} className="comedyimage"/>
                </div>)
            })}
            </div>
    </div>
  )
}

export default Comedy