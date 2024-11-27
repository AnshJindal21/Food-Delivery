import React from 'react'
import burger from "../images/burger.jpg"
import fries from "../images/fries.jpg"
import pizza from "../images/pizza.jpg"

export default function Corousel() {
  return (
    /*object fit contain cause image fit rahe div mai and important ilsie taaki agar koi lagi hui toh important waali overrider kar jae*/
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{"objectFit":"contain !important"}}>
  <div className="carousel-inner" id="corousel">
  <div className="carousel-caption" style={{"zIndex":10}}>
  <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
  </div>
    <div className="carousel-item active">
      <img src={burger} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={fries} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pizza} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
