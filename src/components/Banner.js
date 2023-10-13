import React from 'react'

export default function Banner() {
  return (
    <div className='row'>
      <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/480/80/image/144527e0196e5a17.jpg?q=80" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/150/80/image/da5fb3e4cfe57be5.jpg?q=80" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}