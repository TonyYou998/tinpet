import React from 'react'
import Slider from "react-slick";
export default function FindMore() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    return (
        
       
        <div className="FindMore">
            <div className="FindMore__header">
                <h2>Find More</h2>
                <hr/>
            </div>
            
            <div className="Find__orther">
                <div className="slider">
                    <Slider {...settings}>
                    
                        <div className="item">
                            <img src="./img/dog1.jpg"/>
                            <p className="detail__btn">shiba inu</p>
                        </div>
                        <div className="item">
                            <img src="./img/dog2.jpg"/>
                            <p className="detail__btn">alska</p>
                        </div>
                        <div className="item">
                            <img src="./img/dog3.jpg"/>
                            <p className="detail__btn">corgy</p>    
                        </div>
                        <div className="item">
                            <img src="./img/dog4.jpg"/>
                            <p className="detail__btn">chihuahua</p>
                        </div>
                        <div className="item">
                            <img src="./img/dog1.jpg"/>
                            <p className="detail__btn">shiba inu</p>
                        </div>
                        <div className="item">
                            <img src="./img/dog2.jpg"/>
                            <p className="detail__btn">alska</p>
                        </div>
                        <div className="item">
                            <img src="./img/dog3.jpg"/>
                            <p className="detail__btn">corgy</p>    
                        </div>
                        <div className="item">
                            <img src="./img/dog4.jpg"/>
                            <p className="detail__btn">chihuahua</p>
                        </div>
                    </Slider>
                </div>
                
            </div>
           
           

        </div>
    )
}
