import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {BASE_URL} from '../../config/config'
import Footer from '../Footer/Footer';
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data,setData] = useState({});
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

    const fetchData = async()=>{
      const resp = await fetch(BASE_URL+"api/post/"+id);
      const resp1 = await resp.json();
      if(resp.status===400){
        navigate('/lost')
      }
      setData(resp1)
    }
    useEffect(()=>{
      fetchData();
    },[])
  return (
    
    <div className='row' >
      {/* <div className="col-md-2">
  <div className="card">
  <div className="card-header" style={{background:"red",color:"white"}}>
    Explore More Like This
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Sports</li>
    <li className="list-group-item">Politics</li>
    <li className="list-group-item">Others.</li>
  </ul>
</div>
  </div> */}

  <div className="card col-md-8" >
    <h4 className='mt-2 ' >{data.title}</h4>
    <div className='p-1' style={{display:"flex",justifyContent:"space-between"}}>
    <a href="#" className='mt-2 '>{data.createrName} </a>
    <p className='mt-2 '>{formatDateAgo(data.created_at)}</p>
    </div>
    

    <img
      className="card-img-top img-fluid"
      src={BASE_URL+"images/" + data.image1}
      alt="Card image cap"
    />
    <div className="card-body">
    <div className='ml-1' style={{display:"flex",justifyContent:"left"}}>
    <a ><i className="fa fa-thumbs-up ">{data.likes} Likes </i></a>
    <a style={{marginLeft:"12px"}}><i className="fa fa-comment ">{data.likes} comments</i></a>
    </div>
      <h4 className="card-text mt-2">
        <b>{data.title}</b>
      </h4>
     <div dangerouslySetInnerHTML={{ __html: data.description1 }} ></div>
    </div>
    <img
      className="card-img-top img-fluid"
      src={BASE_URL+"images/" + data.image2}
      alt="Card image cap"
    />

    <div className="card-body" dangerouslySetInnerHTML={{ __html: data.description2 }} ></div>
  </div>
  <div className="col-md-4">
  <div className="card">
  <div className="card-header" style={{background:"#f5aa42",color:"white"}}>
    Explore More Like This
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Sports</li>
    <li className="list-group-item">Politics</li>
    <li className="list-group-item">Others.</li>
  </ul>
</div>
  <div className="card-header mt-3" style={{background:"#f5aa42",color:"white"}}>
    Advertisements
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Sports</li>
    <li className="list-group-item">Politics</li>
    <li className="list-group-item">Others.</li>
  </ul>
</div>
<Footer/>
</div>

  )
}

export default Details