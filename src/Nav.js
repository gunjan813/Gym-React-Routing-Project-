import React from "react";
import { Link } from "react-router-dom";
import Log1 from './Images/illustration/log1.png';
const Nav =  ()=> {
return (

<>
 <section class="container-fluid">
<section class="row">
    <div class="col-12">
<nav class="navbar navbar-expand-md ">
  <div class="container-fluid fixed-top nav p-3 ">
    
  
    
   
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
    <img src={Log1} alt={Log1} className="a me-5  img-fluid"/>
    <div class="collapse navbar-collapse mb-5 justify-content-between " id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0 ">
       
      <li class="nav-item">
      <b> <Link to="/" class="nav-link text-warning ms-4 " >HOME</Link> </b>
        </li>
        <li class="nav-item">
        <b> <Link to="/features" class="nav-link text-warning  ms-4" >ABOUTUS</Link> </b>
        </li>
        <li class="nav-item">
        <b>   <Link to="/Blog" class="nav-link  text-warning ms-4" >BLOG</Link> </b>
        </li>
        <li class="nav-item">
        <b>  <Link to="/Gallery" class="nav-link  text-warning ms-4" >GALLERY</Link></b>
        </li>
       
        <li class="nav-item">
        <b>  <Link to="/Contact" class="nav-link  text-warning ms-4" >CONTACT</Link></b>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
 

 </div>
 </nav>
 </div>
 </section>
 </section>
</>


)
 }
export default Nav;