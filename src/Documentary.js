import React from 'react'
import Axios from 'axios'
import "./Movies.css"

const documentaryUrl ="https://api.themoviedb.org/3/discover/movie?api_key=edc8240911a40a9ee3d07b224809e6f9&language=en-US&page=1&with_genres=99"
const myImageUrl = "https://image.tmdb.org/t/p/original"


function Documentary() {
    const [allMovies,setallMovies] =React.useState([])
    React.useEffect(function(){
    async function fetchdata(){
    const output =await Axios.get(documentaryUrl)
    const result =output.data.results
    setallMovies(result)
    }
    fetchdata()
    },[])
  return (
    <div>
        <h1>DOCUMENTARY</h1>
        <div className="alldiv">{
            allMovies.map(function(i){
                const imageName =i.backdrop_path;
                return(
                    <div className="documentarydiv">
                        <img src={myImageUrl+imageName}className="documentaryimage"/>
                    </div>
                )
            })
        }</div>
    </div>
  )
}

export default Documentary