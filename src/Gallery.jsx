import React from 'react';
import Card from './Card';
import gallery1 from './Images/illustration/gallery1.jpg';
import gallery4 from './Images/illustration/gallery4.jpg';
import gallery8 from './Images/illustration/gallery8.jpg';
import gallery9 from './Images/illustration/gallery9.jpg';
import gallery6 from './Images/illustration/gallery6.jpg'
import gallery7 from './Images/illustration/gallery7.jpg'
import gallery2 from './Images/illustration/gallery2.jpg';
import card3 from './Images/illustration/card3.jpg';
import card7 from './Images/illustration/card7.jpg';


const Gallery  = () =>  {
  return (
<>
    <section  class="container-fluid mt-5 pe-5 " id="Gallery">
    <div className='row '>
    <div class="col-12 col-md-6">
    <p class=" fs-1 text-light text-center"> OUR GALLERY</p>
          </div>
     </div>
   
    </section>

    <div className='Container p-5 mt-4'>

       <div className='row'>
       <h1 class=" tom fs-1  text-danger ">OUR GALLERY</h1>
        <div className='col-12 col-md-4 p-0'>
        <Card imagepath={gallery1}/>
        </div>
        <div className='col-12 col-md-4 p-0'>
        <Card imagepath={gallery2}/>
        </div>
        <div className='col-12 col-md-4 p-0'>
        <Card imagepath={card7}/>
        </div>
        </div>
        <div className='row'>
        <div className='col-12 col-md-4 p-0 '>
        <Card imagepath={gallery4}/>
        </div>
        <div className='col-12 col-md-4 p-0'>
        <Card imagepath={card3}/>
        </div>
        <div className='col-12 col-md-4 p-0 '>
        <Card imagepath={gallery6}/>
        </div>
        </div>
        <div className='row'>
        <div className='col-12 col-md-4 p-0 '>
        <Card imagepath={gallery7}/>
        </div>
        <div className='col-12 col-md-4 p-0'>
        <Card imagepath={gallery8}/>
        </div>
        <div className='col-12 col-md-4 p-0 '>
        <Card imagepath={gallery9}/>
        </div>
        </div>
        <h3 class="text-center p-4"> <span class="badge bg-danger ">Read More</span></h3>
       </div>
       </>
  )
}

export default Gallery
