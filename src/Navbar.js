import React from 'react'
import "./Movies.css"
function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-black">
  <div class="container-fluid">
    <img src='https://i.pinimg.com/originals/08/68/dc/0868dcacc7c50ca2c7d35b27be81e5a9.png' id='myimage'></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" id="navbar">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="navbar">Tv Shows</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="navbar">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="navbar">News and Popular</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="navbar">My List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="navbar">Browse by languages</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

//Bootstarp