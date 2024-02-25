import React from "react";

const Filter = (props)=>{
    let filterData =props.filterData;
    let category=props.category;
    let setcategory=props.setcategory;

    function filterhandler(title){
        setcategory(title);
    }
    return(
        <div className="filter">
            {
                filterData.map((data)=>(
                    <button key={data.id} 
                    onClick={()=>filterhandler(data.title)}  className="btn ">{data.title}</button>
                ))
            }
        </div>
    )
}


export default Filter;