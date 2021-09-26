import React from 'react'

export default function Logo() {
    return (
        <div className="container-fluid">
             <div className="row py-2">
                <div className="col-5"></div>
                 <div className=" col-7 pl-0"> 
                    <div className="d-flex justify-content-between">
                        <h1 class="logo">TINPETs</h1>
                        <div className="py-1 mr-5">
                            <i style={{fontSize:"30px"}} class="mr-3 fa fa-shopping-cart "></i>
                            <button  className="  py-1 ml-2 px-4 login__btn btn  btn-outline-primary">
                                    SIGN IN
                            </button>
                        </div>
                    </div>
                
                        
        
                </div>
             </div>
       </div>
    )
}
