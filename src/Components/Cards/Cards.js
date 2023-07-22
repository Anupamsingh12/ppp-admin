import React, { useState } from "react";
import { NavItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Cards = ({card}) => {
  const [image,setImage] = useState(`http://127.0.0.1:4000/images/${card.image1}`);
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
    navigate("/post/"+card._id)
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
    const diffInSeconds = Math.floor((now - date) / 1000);
  
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
            src={image}
            className="card-img-top"
            alt="sdsds"
            height="220px"
            style={{ borderRadius: "12px" }}
          />
          <div className="card-body">
            <h5 className="card-title" >{card.title}</h5>
            <div style={{display:"flex",justifyContent:"space-between"}}>

            <p>{card.createrName}</p>
            <p>{formatDateAgo(card.created_at)}</p>
            </div>
            {/* <p className="card-text">{card.title}</p> */}
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="row"
            >
              <i
                className="fa fa-thumbs-up col"
                style={{ fontSize: "25px", color: "red" }} onClick={incCounter}
              >
                <a
                  style={{ fontSize: "12px", color: "black" }}
                  
                >
                  {convertToShortFormat(count)}
                </a>
              </i>

              <i
                className="fa fa-comment col"
                style={{ fontSize: "25px" }}
                type="button"
                onClick={toggleComment}
              >
                <a
                  style={{ fontSize: "12px", color: "black" }}
                  onClick={incCounter}
                >
                  0
                </a>
              </i>
              <a  className="btn btn-danger btn-sm col"><span onClick={changeRoute}>Read More..</span>
                
              </a>
              {show && (
                <div className="mt-2" id="collapseExample">
                  <div class="card card-body">
                    <textarea
                      type="text"
                      className="form-control mb-2"
                      placeholder="write a comment"
                    ></textarea>
                    <button className="btn btn-warning btn-sm" onClick={incCounter}>save</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      
    
  );
};

export default Cards;
