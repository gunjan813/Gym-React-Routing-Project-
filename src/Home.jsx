import React from 'react'
import Hero from './Hero'
import  './Hero.css'
import Card from './Card'
import card1 from './Images/illustration/card1.jpg'
import card2 from './Images/illustration/card2.jpg'
import c from './Images/illustration/c.jpg'
import card4 from './Images/illustration/card4.jpg'
import card5 from './Images/illustration/card5.jpg'
import card6 from './Images/illustration/card6.jpg'
import About from './Images/illustration/About.jpg'
import Badge from './Images/illustration/Badge.jpg'
import gallery8 from './Images/illustration/gallery8.jpg'
import p1 from './Images/illustration/p1.png'
import p2 from './Images/illustration/p2.png'
import p3 from './Images/illustration/p3.png'
import p4 from './Images/illustration/p4.png'
import blog1 from './Images/illustration/blog1.jpg'
import blog2 from './Images/illustration/blog2.jpg'
import blog3 from './Images/illustration/blog3.jpg'

const Home = () => {
  return (
   
       <div className=" text-dark">
       <Hero/>
       <section  class="container-fluid g-0">
      
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
            <img src={About}  className="d-block w-100"  />
        </div>
        
    </section>
</section>
</section>

<section  class="container-fluid ">
       <div className='Container-fluid  '>
       <div className='row'>
       {/* <div className='row p-3'>
       </div> */}
       <h2>OUR POPULAR COURSES</h2>
        <div className='col-12 col-md-4 p-0 '>
        <Card imagepath={card1}/>
        </div>
        <div className='col-12 col-md-4 p-0 '>
        <Card imagepath={card2}/>
        </div>
        <div className='col-12 col-md-4 p-0'>
        <Card imagepath={card4}/>
        </div>
        </div>
       </div>
       

    
       <div className='row'>
        <div className='col-12 col-md-4 p-0 '>
        <Card imagepath={c}/>
        </div>
        <div className='col-12 col-md-4 p-0 '>
        <Card imagepath={card5}/>
        </div>
        <div className='col-12 col-md-4 p-0 '>
        <Card imagepath={card6}/>
        </div>
        </div>
       </section>

       {/* <div className='Container-fluid'>
       <div className='row p-5'>
       </div>
       </div> */}
       </section>
    


       <section class="container-fluid py-5" id="fitness"> 
       <div className='row '>
       </div>
       <section class="row">
      <div class="col-md-2">
      
      </div>
      <section class="row">
      <div class="col-md-2">
      
      </div>

        <div class="col-12 col-md-6 ">
           
        <b>  <p class=" tom text-light"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada tristique ligula eu efficitur. Vivamus lorem dolor, mollis nec maximus in, rutrum vel tellus. Donec eu odio et diam elementum porttitor. Suspendisse tincidunt tincidunt porttitor. Duis pharetra euismod fringilla. Phasellus ac vestibulum quam.
        Vivamus lorem dolor, mollis nec maximus in, rutrum vel tellus. Donec eu odio et diam elementum porttitor. Suspendisse tincidunt tincidunt p orttitor. Duis pharetra euismod fringilla. Phasellus ac vestibulum quam.
              </p> </b> 
              <div class="col-6">
                    <img src={Badge}  class="img-fluid img-thumbnail w-75 h-25 rounded-circle"/>
                  </div>
                  <div class="col-6  text-primary fs-5 tom"> <b>BOB ROBERT</b>
                 </div>
                 <div class="col-6  text-primary fs-5 tom"> <b>Trainer</b>
                 </div>    
             </div>
        
        
        
        <div class="col-md-4 p-5 mb-5 ms-0">
            <img src={gallery8}  className="d-block w-100"  />
        </div>
        
    </section>
       </section>
       </section>

       <section>
        <div class="py-5 ">
            <h5 class="colo text-center text-danger ">OUR PRICING</h5>
            <h1 class="text-center mb-5 display-4">MEMBERSHIP PLANS</h1>
            <div class="d-flex flex-wrap">
                <div class="col-12 col-md-4">
                    <div class="col-11 mx-auto border border-dark  text-center mt-4 member">
                        <div>
                        <h4 class="d-flex justify-content-center align-items-center text-black heading">STARTER</h4>
                        </div>
                        <div class="">
                            <h5 class="py-4 border-bottom border-dark">$99/<span class="month">MONTH</span></h5>
                        </div>
                        <div class="border-bottom border-dark py-3">
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>Single day Access</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>24/7 Gym Access</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>Personal Trainer</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>Nutrition Plan</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>Diet Planning</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>Weekly Events</h6>
                        </div>
                        <div class="my-3">
                            <a href="#" class="mx-auto text-uppercase text-decoration-none text-white d-flex justify-content-center align-items-center but">buy now</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="col-11 mx-auto border border-dark  text-center mt-4 member">
                        <div>
                        <h4 class="d-flex justify-content-center align-items-center text-black heading">POPULAR</h4>
                        </div>
                        <div class="">
                            <h5 class="py-4 border-bottom border-dark">$145/<span class="month">MONTH</span></h5>
                        </div>
                        <div class="border-bottom border-dark py-3">
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>1 Month Access</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>24/7 Gym Access</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>Personal Trainer</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>Nutrition Plan</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>Diet Planning</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>Weekly Events</h6>
                        </div>
                        <div class="my-3">
                            <a href="#" class="mx-auto text-uppercase text-decoration-none text-white d-flex justify-content-center align-items-center but">buy now</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="col-11 mx-auto border border-dark  text-center mt-4 member">
                        <div>
                        <h4 class="d-flex justify-content-center align-items-center text-black heading">ADVANCE</h4>
                        </div>
                        <div class="">
                            <h5 class="py-4 border-bottom border-dark">$250/<span class="month">MONTH</span></h5>
                        </div>
                        <div class="border-bottom border-dark py-3">
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>3 Month Access</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>24/7 Gym Access</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>Personal Trainer</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>Nutrition Plan</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>Diet Planning</h6>
                            <h6 class="my-3"><i class="fa-regular fa-circle-check mx-2 colo"></i>Weekly Events</h6>
                        </div>
                        <div class="my-3">
                            <a href="#" class="mx-auto text-uppercase text-decoration-none text-white d-flex justify-content-center align-items-center but">buy now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




       <section  class="container-fluid g-0 p-2">
       <div className='Container-fluid  g-0 '>
       <div className='row'>
       <div className='row p-3 mt-5'>
       </div>
       <h4 className='text-danger mt-2'>-- LATEST NEWS - -</h4>
      <b> <h1 className='mt-3'>OUR BLOG POSTS</h1></b>
        <div className='col-12 col-md-4 mt-5 '>
        <Card imagepath={blog1}/>
        </div>
        <div className='col-12 col-md-4 mt-5'>
        <Card imagepath={blog2}/>
        </div>
        <div className='col-12 col-md-4 mt-5'>
        <Card imagepath={blog3}/>
        </div>
        </div>
       </div>
       </section>
       
<section  class="container-fluid g-0 p-2">
       <div className='Container-fluid  g-0 '>
       <div className='row'>
       <div className='row p-3 mt-5'>
       </div>
       <h4 className='text-danger'>- OUR PRODUCTS -</h4>
       <b><h1 className='mt-3'>FITNESS SHOP</h1></b>
        <div className='col-12 col-md-3  mt-2 '>
        <Card imagepath={p1}/>
        <h4 >BODY SUPPLEMENT</h4>
        </div>
        <div className='col-12 col-md-3 mt-2'>
        <Card imagepath={p2}/>
        <h4 >MULTI VITAMINS</h4>
        </div>
        <div className='col-12 col-md-3 mt-2'>
        <Card imagepath={p3}/>
        <h4>PROTIEN ATHLETIC</h4>
        </div>
        <div className='col-12 col-md-3 mt-2'>
        <Card imagepath={p4}/>
        <h4>SUPPLEMENT CAP</h4>
        </div>
        </div>
       </div>
       </section>

       </div>
       
 
  );
}
export default Home
