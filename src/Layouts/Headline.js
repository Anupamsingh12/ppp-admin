import React, { useState,useEffect } from "react";
import Cards from "../Components/Cards/Headline";
import Subheader from '../Components/Header/Subheader'
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/config";
const Home = () => {
    const navigate = useNavigate();
  const [data,setData] = useState([]);
  const [count,setCount] = useState(0);
  const [page,setPage] = useState(1);

  const fetchData = async(page)=>{
    if(page==1){
      setData([])
    }
    const start=1 *(page-1);
    try{
    const dd = await fetch(BASE_URL+'api/headlines');
    const dd1 = await dd.json()
    // setData(data => data.concat(dd1.data));
    setData(dd1.articles);
    setCount(dd1.count)
    }catch(er){
        navigate('/lost')
    }

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
        </div>
        <Footer/>
    </>
  );
};

export default Home;
