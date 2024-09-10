import React from "react";
import Logo from  './Images/illustration/Logo.png'
const Footer =  ()=> {

    return(
        <>
        

        <section class="container-fluid "  id="footer">
        <section class="container-fluid" >
            <section class="row mt-5 ">
                <div class="col-md-3 fs-5 pe-3 mt-3">
                <img src= {Logo} class="card-img-top img-fluid "/>
                <p class="tom">Subscribe our newsletter and get
                    discount 30% off</p>
                </div>
                <div class="col-md-3">
                    <p class="fs-1 text-warning">Quick Shop</p>
                <p class="text-light fs-3 tom">About Us</p>
                <p class="text-light fs-3 tom">+568 325 874</p>
                <p class="text-light fs-3 tom">Pagination</p>
                <p class="text-light fs-3 tom">Wholesale Policy</p>
                </div>
                <div class="col-md-3">
                    <p class="fs-1 text-warning tom">Customer Care</p> 
                    <ul class="text-light fs-4 tom">
                        <p> Accessories</p>
                        <p> Contact us</p>
                        <p> Our Services</p>
                        <p> Products Return</p>
                        <p>Terms & Conditions</p>
                    </ul>
                </div>
        
                <div class="col-md-3 tom">
                    <p class="fs-1 text-warning">Company</p>      
                    <p class="text-light fs-5">Suppliments</p>
                    <p class="text-light fs-5">Help Center</p>
                    <p class="text-light fs-5"> Address Store</p> 
                    <p class="text-light fs-5">HomePage</p> 
                    </div>
                
            </section>
        </section>
        </section>
        </>

        );


    }
       
export default Footer;