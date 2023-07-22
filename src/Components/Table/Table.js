import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Filters from './Filter';
import AddUser from '../Modal/Modal';
import MyModal from '../Modal/Modal';
import Pagination from 'react-bootstrap/Pagination';
import {BASE_URL} from './../../config/config'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
const TableComponent = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();
  const searchText=async (e)=>{
    fetchData(1,e.target.value)
  }
  if(localStorage.getItem("user")==null){
    navigate('/')
  }
    const [show,setShow] = useState(false)
  const [data, setData] = useState([]);
  const [item, setItem] = useState({});
  const [total, setTotal] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleVisibility=(item)=>{
        setShow(!show)
        setItem(item)
  }
  const paginationClick = async (type)=>{
    if(type==="prev"){
      setCurrentPage(currentPage<=1?1:currentPage-1);
      await fetchData(currentPage)
    }
    else{
      setCurrentPage(currentPage<=1?1:currentPage+1);
      await fetchData(currentPage)
    }
  }

  const deleteItem = async (item) => {
   
    const userConfirmation = window.confirm("Are you sure you want to delete this item?");
    if (userConfirmation) {
      
       await fetch(`${BASE_URL}api/post/${item}`,{
        method: "DELETE",
        headers:{
          authorization:user.accessToken
        },
      })
      toast.success("deleted Successfully")
    } 
  };
  


  const fetchData = async (page,search) => {
    let url=''
    if(search){
       url+='search='+search+"&"
    }
    if(page){
      let start= 10 * (page-1)
      url+='start='+start+'&limit=10&'
    }
    try {
      const response = await fetch(
        BASE_URL+"api/post?"+url,
      );
      const data1 = await response.json();
      // console.log(data.users);
      setData(data1.data); // Update the state with the fetched data
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div>
      <div className="content-header mt-1" >
      
      <div className="row m-0">

        <ol
          className="breadcrumb"
          style={{ display: "flex", justifyContent: "space-between" }}
>
          
          <li>
          <input type="text" class="form-control" onChange={searchText} placeholder="search Title /"/>
          </li>
          <li>
            <button
              className="btn btn-warning"
              type="button"
              onClick={handleVisibility}
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <i className="fa fa-plus"></i> Add
            </button>
          </li>
        </ol>

      </div>
    
  </div>
      {/* <Filters/> */}
       {show && <MyModal show={show}  handleClose={handleVisibility} item={item}/>}
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>category</th>
            <th>creator</th>
            <th>likes</th>
            <th>title</th>
            <th>Action</th>
          
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.category}</td>
              <td>{item.createrName}</td>
              <td>{item.likes}</td>
              <td>{item.title}</td>
              <td style={{display:"flex"}}>
                    <Button variant="warning" size="sm"  onClick={() => {
                      handleVisibility(item);
                    }}>
                      <i className="fa fa-edit" />Update
                    </Button>
                    <Button variant="danger" size="sm" onClick={()=>{deleteItem(item._id)}}>
                      <i className="fa fa-remove" />delete
                    </Button>
                  </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination style={{display:"flex",justifyContent:"center"}}>
        
          <Pagination.Item
            key={1}
            active={false}
            onClick={()=>{paginationClick("prev")}}
          >
           Previous
          </Pagination.Item>
          <Pagination.Item
            key={1}
            active={true}
            onClick={()=>{paginationClick("next")}}
          >
           Next
          </Pagination.Item>
        {/* ))} */}
      </Pagination>
    </div>
  );
};

export default TableComponent;
