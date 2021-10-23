import React from 'react'

export default function SingleItem(props) {
    const {img,name}=props;
    
    return (
        <div className="item__wrapper col-3 pt-3">
            <img className="item__img w-100" src={img} alt=""/>
            <div className="item__content">
                <h6 className="py-2 btn btn-primary w-100" >{name}</h6>
                
            </div>
        </div>
    )
}
