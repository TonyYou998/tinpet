import React from 'react'


export default function Info() {
    return (
        <div className="Info">
            <div className="Info__Left">
                <img src="./img/dog4.jpg"/>
                <div className="Your__Choose">
                    <h4>Do you like it?</h4>
                    <button type="button" className="btn1">Buy Now</button>
                    <h6>Or</h6>
                    <button type="button" className="btn2">Add to Cart</button>
                    </div>
            </div>
            <div className="Info__Right">
                    <h3>Product Name</h3>
                    <span>Cost: </span>
                    <span>NULL</span>
                    <span>USD</span>
                    <br/>
                    <hr/>
                    <span>Status: </span>
                    <span >NULL</span>
                    <br/>
                    <span>Stack: </span>
                    <span >NULL</span>
                    <br/>
                    <hr/>
                    <h5>More Infomation</h5>
                    <span>Height: </span>
                    <span >NULL</span>
                    <span>Weight: </span>
                    <span >NULL</span>
                    <br/>
                    <span>Lenght: </span>
                    <span >NULL</span>
                    <span>Width: </span>
                    <span >NULL</span>
                    <br/>
                    <hr/>
                    <h5>Decription</h5>
                    <textarea placeholder="Type something ...">
                    </textarea>
            </div>        
        </div>
    )
}

