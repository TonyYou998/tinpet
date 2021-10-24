import React from 'react'
import SingleItem from '../FindAPetPage/components/SingleItem'
function BreedPage() {
    return (
        <div className="findapet__wrapper ">
        <h3 className="text-center">All breeding available </h3>
      <div className="container">
        <div className="row">
          <SingleItem img={"/img/dog1.jpg"} name={"shiba inu"} />
          <SingleItem img={"/img/dog2.jpg"} name={"kato"}  />
          <SingleItem img={"/img/dog3.jpg"} name={"name3"} />
          <SingleItem  img={"/img/dog4.jpg"} name={"hello world"} />
          <SingleItem img={"/img/dog3.jpg"} name={"doger"} />
          <SingleItem img={"/img/dog6.jpg"} name={"yaiba"} />
          <SingleItem img={"/img/dog7.jpg"} name={"nana"} />
          <SingleItem img={"/img/dog2.jpg"} name={"coca"} />
          <SingleItem img={"/img/dog3.jpg"} name={"pepsi"} />
          <SingleItem img={"/img/dog4.jpg"} name={"bun"} />
          <SingleItem img={"/img/dog1.jpg"} name={"ken"} />
          <SingleItem img={"/img/dog6.jpg"} name={"doraemon"} />
          <SingleItem  img={"/img/dog7.jpg"} name={"putin"} />
          <SingleItem img={"/img/dog3.jpg"} name={" inu"} /> 
          
        </div>
      </div>
    </div>
    )
}

export default BreedPage

