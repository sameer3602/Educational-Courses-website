import React from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card = (props)=>{
    let course=props.course;
    let likedcourses=props.likedcourses;
    let setlikedcourses=props.setlikedcourses;
    function clickHandler(){
        if (likedcourses.includes(course.id)){
            setlikedcourses((prev)=> prev.filter((cid)=>(cid !== course.id)));
            console.log(likedcourses);
            toast.error(`Hata Diya Like :(`,{autoClose:1000});
        }
        else{
            if(likedcourses.length === 0){
                setlikedcourses([course.id]);
            }
            else{
                setlikedcourses((prev) => [...prev,course.id]);
            }
            toast.success("Hogaya Like :)", {autoClose:1000
            });

        }
    }
    return(
        <div className="SingleCard">
            <div>
                <img className="image" src={course.image.url}/>
            </div>
            <div className="icon">
                <button onClick={clickHandler} className="likedbtn">
                    {
                        !likedcourses.includes(course.id) ? (<FcLikePlaceholder className="notliked" />):(<FcLike className="liked"/>)
                    }
                </button>
            </div>
            <div className="description">
                <p className="cardtitle">{course.title}</p>
                <p className="carddesc">
                    {
                        course.description.length>100 ?
                        (course.description.substr(0,100))+"...":(course.description)
                    }
                </p>
            </div>
        </div>
    )
}


export default Card;