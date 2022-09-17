import React from 'react'
import Axios from 'axios'
import "./Movies.css"
import Youtube from "react-youtube"
import MovieTrailer from "movie-trailer"

const NetflixOriginals = "https://api.themoviedb.org/3/discover/tv?api_key=edc8240911a40a9ee3d07b224809e6f9&with_networks=213"
const myImageUrl = "https://image.tmdb.org/t/p/original"

function Netflixoriginals() {
    const [allMovies, setallMovies] = React.useState([])
     const [id,setId] = React.useState("")


    React.useEffect(function () {
        async function fetchdata() {
            const output = await Axios.get(NetflixOriginals)
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
        // console.log(data);

         }
         const myoption={
            height:"400px",
            width:"80%"
        }

    return (
        <div>
            <h1>NETFLIX ORIGINALS</h1>
           <div className="alldiv">
           {allMovies.map(function (i) {
                const imageName = i.backdrop_path;
                return (<div className='netflixoriginaldiv'>
                    <img src={myImageUrl + imageName} className="netflixoriginalimage" onClick={function(){
                        playTheTrailor(i)
                    }}/>
                </div>)
            })}


           </div>
         { id && <Youtube videoId={id}opts={myoption}/> }
        </div>
    )
}

export default Netflixoriginals
//https://image.tmdb.org/t/p/original