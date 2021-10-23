import React from 'react'
import { Link } from 'react-router-dom';
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
                        <Link to="/detail/id"> 
                            <p className=" btn-primary text-center detail__btn">shiba inu</p>
                        </Link>
                        
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog2.jpg"/>
                        <Link  to="/detail/id">
                            <p className="btn-primary text-center detail__btn">alska</p>  
                        </Link>
                      
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog3.jpg"/>
                        <Link  to="/detail/id">
                            <p className="btn-primary text-center detail__btn">corgy</p>  
                        </Link>  
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog4.jpg"/>
                        <Link  to="/detail/id">
                            <p className="btn-primary text-center detail__btn">chiahuahua</p>  
                        </Link>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog2.jpg"/>
                        <Link  to="/detail/id">
                            <p className="btn-primary text-center detail__btn">alska</p>  
                        </Link>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog6.jpg"/>
                        <Link  to="/detail/id">
                            <p className="btn-primary text-center detail__btn">podle</p>  
                        </Link>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog7.jpg"/>
                        <Link  to="/detail/id"> 
                            <p className="btn-primary text-center detail__btn">pub</p>  
                        </Link>
                    </div>
                </Slider>
            </div>
           <hr />

            <div className="pt-5 pb-4">
                <h5 className="text-center  ">Cats</h5>
                <Slider {...settings}>
                    
                    <div className="arr__item">
                        <img src="./img/dog1.jpg"/>
                        
                        <Link to="/detail/id">
                            <p className="btn-primary text-center detail__btn">alska</p>  
                        </Link>
                        
                       
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog2.jpg"/>
                        <Link to="/detail/id">
                            <p className="btn-primary text-center detail__btn">alska</p>  
                        </Link>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog3.jpg"/>
                        <Link to="/detail/id">
                            <p className="btn-primary text-center detail__btn">alska</p>  
                        </Link>   
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog4.jpg"/>
                        <Link to="/detail/id">
                            <p className="btn-primary text-center detail__btn">alska</p>  
                        </Link>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog2.jpg"/>
                        <Link to="/detail/id">
                            <p className="btn-primary text-center detail__btn">alska</p>  
                        </Link>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog6.jpg"/>
                        <Link to="/detail/id">
                            <p className="btn-primary text-center detail__btn">alska</p>  
                        </Link>
                    </div>
                    <div className="arr__item">
                        <img src="./img/dog7.jpg"/>
                        <Link to="/detail/id">
                            <p className="btn-primary text-center detail__btn">alska</p>  
                        </Link>
                    </div>
                </Slider>
            </div>
           
           

        </div>
    )
}
