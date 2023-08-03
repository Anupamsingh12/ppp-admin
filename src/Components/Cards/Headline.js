import React, { useState } from "react";
import { NavItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {BASE_URL} from '../../config/config'
const Cards = ({card}) => {
//   const [image,setImage] = useState(`${BASE_URL}images/${card.image1}`);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const toggleComment = () => {
    setShow(!show);
  };
  const [count, setCount] = useState(0);
  const incCounter = () => {
    toast.warning("we will be there with this Feature soon  🙁 ")
    // setCount(count + 1);
  };
  const changeRoute = () => {
    // localStorage.setItem("current",JSON.stringify(card))
    window.location.href =card.url
  }

  function convertToShortFormat(number) {
    if(number===undefined || number===0 || typeof number !== "number"){
        return 0
    }
    if(number<1000){
      return number
  }
    const suffixes = ['', 'k', 'M', 'B', 'T']; // Customize suffixes as needed
    const suffixIndex = Math.floor(Math.log10(Math.abs(number)) / 3);
    const shortNumber = (number / Math.pow(10, suffixIndex * 3)).toFixed(1);
    return shortNumber + suffixes[suffixIndex];
  }

  function formatDateAgo(isoDate) {
    
    const date = new Date(isoDate);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000)-86400;
  
    if (diffInSeconds < 60) {
      return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 2592000) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else {
      const months = Math.floor(diffInSeconds / 2592000);
      return `${months} month${months !== 1 ? 's' : ''} ago`;
    }
  }



  return (
      <div className="col-md-4">
        <div className="card mb-3">
          <img
            src={card.urlToImage}
            className="card-img-top"
            alt="sdsds"
            height="220px"
            style={{ borderRadius: "12px" }}
          />
          <div className="card-body">
            <h5 className="card-title" >{card.title}</h5>
            <div style={{display:"flex",justifyContent:"space-between"}}>

            <p>{card.author ||"Unknown"}</p>
            <p>{formatDateAgo(card.publishedAt)}</p>
            </div>
            <div style={{display:"flex",justifyContent:"end"}}>

            
            {/* <button className="btn btn-danger btn-sm col" onClick={changeRoute}> Go To Source.</button> */}
            <button className="btn btn-danger btn-sm col"  onClick={toggleComment}> Read More.</button>
            </div>
            
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="row"
            >
              
             
              {show && (
                <div className="mt-2" id="collapseExample">
                  {card.description}
                   <button className="btn btn-danger btn-sm col" onClick={changeRoute}> Go To Source.</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      
    
  );
};

export default Cards;
