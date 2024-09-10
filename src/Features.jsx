import React from 'react';
import About from './Images/illustration/About.jpg';
import Card from './Card';
import  './Hero.css'
import team1 from './Images/illustration/team1.jpg';
import team2 from './Images/illustration/team2.jpg';
import team3 from './Images/illustration/team3.jpg';

const Features  = () =>  {
  return (
   
    <>

<section  class="container-fluid mt-5 pe-5 " id="Features">
<div className='row '>
<div class="col-12 col-md-6">
<p class=" fs-1 text-light text-center">ABOUT US</p>
      </div>
 </div>
</section>

    <section  class="container-fluid mt-5 ">
       <div className='row '>
       </div>
      <section class="container-fluid py-5" id="aboutus">
     <section class="container py-5">
    <section class="row">
      <div class="col-md-2">
      
      </div>

        <div class="col-12 col-md-6 ">
            <p class=" tom fs-1 text-danger">READ ABOUT US</p>
            <h1 class=" tom fs-1 text-info">OUR PERSONAL TRAINERS</h1>
        <h1 class=" tom fs-1 text-info"> MAKE A DIFFERENCE</h1>
             <p class=" tom text-light"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada tristique ligula eu efficitur. Vivamus lorem dolor, mollis nec maximus in, rutrum vel tellus. Donec eu odio et diam elementum porttitor. Suspendisse tincidunt tincidunt porttitor. Duis pharetra euismod fringilla. Phasellus ac vestibulum quam.
        Vivamus lorem dolor, mollis nec maximus in, rutrum vel tellus. Donec eu odio et diam elementum porttitor. Suspendisse tincidunt tincidunt p orttitor. Duis pharetra euismod fringilla. Phasellus ac vestibulum quam.
              </p> 
             <h3 class="text-center"> <span class="badge bg-success ">Read More</span></h3>
        </div>
        
        <div class="col-md-4 p-5 mb-5 ms-0">
             <img src={About}  className="d-block w-100  img-fluid"  /> 
        </div>
        
    </section>
    </section>
</section>
</section>
    
    <section  class="container-fluid g-0 p-2">
    <div className='Container-fluid  p-5 mt-5'>

       <div className='row'>
        <div className='col-12 col-md-4 '>
        <Card imagepath={team1}/>
        </div>
        <div className='col-12 col-md-4 '>
        <Card imagepath={team2}/>
        </div>
        <div className='col-12 col-md-4 '>
        <Card imagepath={team3}/>
        </div>
        </div>
       </div>
       </section>
       </>
  )
}

export default Features
