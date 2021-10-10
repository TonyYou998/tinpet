import React from 'react'
import Slider from "react-slick";
export default function DogsArr() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    return (
        
       
        <div className="Dog__Wrapper py-4 px-5"> 
            <h2 className="text-center ">Discovery what you likes</h2>
            <div className="pt-5 pb-4">
                <h5 className="text-center  ">Dogs</h5>
                <Slider {...settings}>
                    
                    <div className="arr__item">
                        <img src="./img/dog1.jpg"/>
                        <p className=" btn-primary text-center detail__btn">shiba inu</p>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog2.jpg"/>
                        <p className="btn-primary text-center detail__btn">alska</p>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog3.jpg"/>
                        <p className="btn-primary text-center detail__btn">corgy</p>    
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog4.jpg"/>
                        <p className="btn-primary text-center detail__btn">chihuahua</p>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog2.jpg"/>
                        <p className="btn-primary text-center detail__btn">alska</p>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog6.jpg"/>
                        <p className="btn-primary text-center detail__btn">poddle</p>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog7.jpg"/>
                        <p className="btn-primary text-center detail__btn">pug</p>
                    </div>
                </Slider>
            </div>
           <hr />

            <div className="pt-5 pb-4">
                <h5 className="text-center  ">Cats</h5>
                <Slider {...settings}>
                    
                    <div className="arr__item">
                        <img src="./img/dog1.jpg"/>
                        <p className="text-center btn-primary detail__btn">shiba inu</p>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog2.jpg"/>
                        <p className="text-center btn-primary detail__btn">alska</p>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog3.jpg"/>
                        <p className="text-center btn-primary detail__btn">corgy</p>    
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog4.jpg"/>
                        <p className="text-center btn-primary detail__btn">chihuahua</p>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog2.jpg"/>
                        <p className="text-center btn-primary detail__btn">alska</p>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog6.jpg"/>
                        <p className="text-center btn-primary detail__btn">poddle</p>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog7.jpg"/>
                        <p className="text-center btn-primary detail__btn">pug</p>
                    </div>
                </Slider>
            </div>
           
           

        </div>
    )
}
