import React, { useState } from "react";
import Card from "./Card";
const Cards = (props)=>{
    let courses=props.courses;
    let category=props.category;
    const [likedcourses,setlikedcourses]= useState([]);
    function getcourses(){
        if (category==="All"){
            let allcourses=[];
            Object.values(courses).forEach(array=>{
                array.forEach(courseData=>{
                    allcourses.push(courseData);
                })
            })
            return allcourses;
        }
        else{
            return courses[category];
        }
    }

    return(
        <div className="Cards">
            {
                getcourses().map((course)=>(
                    <Card key={course.id} 
                     course={course}
                     likedcourses={likedcourses}
                     setlikedcourses={setlikedcourses}/>
                ))
            }
        </div>
    );
}


export default Cards;