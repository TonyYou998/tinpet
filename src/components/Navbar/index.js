import React from "react";
import $ from 'jquery';
import { Link } from "react-router-dom";
export default function Navbar() {
  $(window).scroll(()=>{
    if($(window).scrollTop()>100){
        $(".navbar").addClass("navbar__change");
    }
    else{
        $(".navbar__change").removeClass("navbar__change");
    }
})
  return (
    
    <nav className="navbar w-100 px-4 navbar__fix navbar-expand-lg navbar-light ">
      <Link to="/" style={{color:"black",textDecoration:"none"}}>
      <h1 className="logo" >
        TINPETS
      </h1>
      </Link>
      

      <div className=" navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
        <li className="nav-item mx-4">
            About us
          </li>
          <Link to="/pet-all" style={{color:"black",textDecoration:"none"}}>
              <li className="nav-item mx-4">
                Find a pet
              </li>
          </Link>
          
          <Link to="/breed" style={{textDecoration:"none",color:"black"}}>
            <li className="nav-item mx-4">
              Breeds
            </li>
          </Link>
          <Link to="/give" style={{textDecoration:"none",color:"black"}} >
          <li className="nav-item mx-4">
            Give your pet
          </li>
          </Link>
         
                   
         
        </ul>

        <i style={{ fontSize: "30px" }} class="mr-3  fa fa-shopping-cart "></i>
        
        <Link to="/sign-in" style={{marginLeft:"20px"}} className="  ml-2 ml-2 px-4 login__btn btn  btn-outline-primary">
          SIGN IN
        </Link>
      </div>
    </nav>
  );
}
