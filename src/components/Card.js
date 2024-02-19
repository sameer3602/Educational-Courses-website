import React from "react";
import { FaGun } from "react-icons/fa6";
const Card = (props)=>{
    let course=props.course;
    return(
        <div className="SingleCard">
            <div>
                <img className="image" src={course.image.url}/>
            </div>
            <div className="icon">
                <button><FaGun/></button>
            </div>
            <div className="description">
                <p className="cardtitle">{course.title}</p>
                <p className="carddesc">{course.description}</p>
            </div>
        </div>
    )
}


export default Card;