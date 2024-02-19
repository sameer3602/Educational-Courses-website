import React from "react";
import './Spinner.css';
const Spinnner = ()=>{
    return(
        <div className="Loadingscreen">
            <div class="loader"></div>
            <p className="loadingtext">Loading....</p>
        </div>
    );
}
export default Spinnner;