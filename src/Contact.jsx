import React from 'react';
import Card from './Card';
import team1 from './Images/illustration/team1.jpg';
import team2 from './Images/illustration/team2.jpg';
import team3 from './Images/illustration/team3.jpg';
import team4 from './Images/illustration/team4.jpg';

const Contact  = () =>  {
  return (

    <>
    <section  class="container-fluid mt-5 pe-5 " id="Features">
    <div className='row '>
    <div class="col-12 col-md-6">
    <p class=" fs-1 text-light text-center">CONTACT US</p>
          </div>
     </div>
    </section>
    
       
    <div className='Container-fluid'>

       <div className='row'>
       <h1 class=" tom fs-1 mt-5 text-danger ">OUR PERSONAL TRAINERS</h1>
        <div className='col-12 col-md-3 '>
        <Card imagepath={team1}/>
        </div>
        <div className='col-12 col-md-3 '>
        <Card imagepath={team2}/>
        </div>
        <div className='col-12 col-md-3 '>
        <Card imagepath={team3}/>
        </div>
        <div className='col-12 col-md-3 '>
        <Card imagepath={team4}/>
       
        </div>

        </div>
       </div>
       <div className='Container-fluid'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30256.011079314074!2d73.9793678!3d18.573976299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3819fdef877%3A0xd4193e985f354be0!2z4KS14KS-4KSY4KWL4KSy4KWALCDgpKrgpYHgpKPgpYcsIOCkruCkueCkvuCksOCkvuCkt-CljeCkn-CljeCksCA0MTIyMDc!5e0!3m2!1shi!2sin!4v1712912074573!5m2!1shi!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
       </>
       
  )
}

export default Contact
