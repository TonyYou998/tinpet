import React from 'react';

export default function PetCard() {
    return (
      <div className="card__wrapper container d-flex">
          
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="/img/dog1.jpg" alt="Card image cap" />
          <div className="card-body mt-3  ">
            <h5 className="text-center  text-white">Shiba inu</h5>
           
            
                <button  className="w-100 adopt__btn  btn btn-primary">
                    Adopt
                </button>
              

            

     
            
          </div>
        </div>
        <div className="card__info w-80 mx-5 px-5   ">
            <h5 className="pt-4 pb-2">Shiba inu</h5>
            <h5 className="py-2">Race:<span style={{fontWeight:"normal"}}>dog</span></h5>
            <h5 className="py-2" >Age:<span style={{fontWeight:"normal"}}>3</span></h5>
            <h5 className="py-2" >Weight:<span style={{fontWeight:"normal"}}>3Kg</span></h5>
            <h5 className="py-2" >Sex:<span style={{fontWeight:"normal"}}>Male</span></h5>
            <h5 className="py-2" >Color:<span style={{fontWeight:"normal"}}>yellow</span></h5>
            <h5 className="py-2" >Owner:<span style={{fontWeight:"normal"}}>Tony You</span></h5>
            <h5 className="py-2" >Location:<span style={{fontWeight:"normal"}}>Arizona</span></h5>
            <hr className="w-100"/>
            
        </div>
       
<div>
  
  
</div>

      </div>
    );
}
