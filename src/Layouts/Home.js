import React, { useState,useEffect } from "react";
import Cards from "../Components/Cards/Cards";
import Subheader from '../Components/Header/Subheader'
import Footer from "../Components/Footer/Footer";
import { BASE_URL } from "../config/config";
const Home = () => {
  const [data,setData] = useState([]);
  const [count,setCount] = useState(0);
  const [page,setPage] = useState(1);

  const fetchData = async(page)=>{
    if(page==1){
      setData([])
    }
    const start=1 *(page-1);
    const dd = await fetch(BASE_URL+'api/post?start='+start+"&limit="+10);
    const dd1 = await dd.json()
    // setData(data => data.concat(dd1.data));
    setData(dd1.data);
    setCount(dd1.count)

  }
  const fetchNext=()=>{
    setPage(page +1);
    fetchData(page)

  }
  useEffect(()=>{
    fetchData(1);
  },[])
  return (
    <>
    {/* <Subheader/> */}
    <div className="row" style={{ borderRadius: "12px" }}>
    {data.map((card, index) => (
            <Cards key={index} card={card} />
          ))}
          <div style={{display:"flex",justifyContent:"center"}}>
          <button type="button" onClick={fetchNext} className="btn btn-warning mb-2">load more</button>
          </div>
        </div>
        <Footer/>
    </>
  );
};

export default Home;
