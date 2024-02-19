import React from "react";

const Filter = (props)=>{
    let filterData =props.filterData;
    return(
        <div className="filter">
            {
                filterData.map((data)=>(
                    <button key={data.id} className="btn">{data.title}</button>
                ))
            }
        </div>
    )
}


export default Filter;