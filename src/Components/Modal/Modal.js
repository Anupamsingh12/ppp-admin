import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { XCircleFill } from 'react-bootstrap-icons';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify';
import {BASE_URL} from '../../config/config'
const MyModal = ({ show, handleClose, item }) => {
  const [category, setCategory] = useState(item.category);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [description2, setDescription2] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('category', category);
    formData.append('title', title);
    formData.append('description1', description);
    formData.append('description2', description2);
    if(document.getElementsByName('image1')!==''){}
    if (e.target[2].files.length > 0) {
      // Append image1 if it exists
      formData.append('image1', e.target[2].files[0], 'sample1.jpg');
    }
    
    if (e.target[3].files.length > 0) {
      // Append image2 if it exists
      formData.append('image2', e.target[3].files[0], 'sample2.jpg');
    }
    // console.log(formData)
    
    
    try {
      const response = await fetch(BASE_URL+'api/post', {
        method: 'POST',
        headers:{
          authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFjNjA4ZmY0YzlhMjU3MjZiM2IyMjUiLCJlbWFpbCI6InNhbUB5b3BtYWlsLmNvbSIsImlhdCI6MTY3OTU4MTc2MH0.7n-GqhOAKdUCTKqckJ6iw6OU1SvXFOkPgJpDFWrlWgU",
        },
        body: formData,
      });


      if (response.ok) {
        // Handle successful response
        toast.success("post created successfully")
        handleClose()
      } else if (response.status === 400) {
        const responseData = await response.json();
        toast.warning(responseData.error[0].message);
      } else {
        // Handle other error cases (e.g., network error, server error, etc.)
        toast.error("An error occurred");
        console.log('An error occurred');
      }
    } catch (error) {
      // Handle network error
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}  fullscreen>
      <Modal.Header>
        <Modal.Title>Add Item</Modal.Title>
        <Button variant="link" onClick={handleClose}>
          <XCircleFill size={24} />
        </Button>
      </Modal.Header>
      <Modal.Body>
      <form id="sample" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category">Category &#x2a;</label>
            <input
              type="text"
              className="form-control"
              id="category"
              defaultValue={item.category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title &#x2a;</label>
            <input
              type="text"
              className="form-control"
              id="title"
              
              defaultValue={item.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="d-flex">
            <input type="file" name ="image1" className="form-control-file mr-2" />
            <input type="file" name="image2" className="form-control-file" />
          </div>
          <div className="form-group">
            <label htmlFor="description1">Description1 &#x2a;</label>
            <CKEditor
              editor={ClassicEditor}
              data={item.description1}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description2">Description2</label>
            <CKEditor
              editor={ClassicEditor}
              data={item.description2}
              onChange={(event, editor) => {
                const data2 = editor.getData();
                setDescription2(data2);
              }}
            />
          </div>
          <button type="submit"   className="btn btn-danger">Save</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
