import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import {apiUrl,filterData } from "./data";
import { useEffect } from "react";
import Spinnner from "./components/Spinnner";
import { toast } from "react-toastify";
const App = () => {
  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setcategory]=useState(filterData[0].title)
  async function fetchdata(){
    setLoading(true);
    try{
      let res=await fetch(apiUrl);
      let output= await res.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Nahi chalra kya!!!");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchdata();
  },[])


  return (
  <div>
    <div>
      <Navbar/>
    </div>
    <div>
      <Filter filterData={filterData}
        category={category}
        setcategory={setcategory}/>
    </div>
    <div className="cardrender">
      {
        loading ? (<Spinnner/>):(<Cards courses={courses} category={category}/>)
      }
    </div>
  </div>);
};

export default App;
