import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Modal, Row} from 'react-bootstrap'
import { addToCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';


function Category() {
  // for get

 const[allCategories,setAllCategories]=useState([])

  const [categoryName, setCategoryName] = useState("") // to take values from input box
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false); 
    const handleShow = () => setShow(true);
    const handleAddCategory= async ()=>{      // for work button
    
    
      if(categoryName){            // in th cmapi the value will enered as body so set categoryname into body
        let body={
          categoryName,allVideos:[]
        }
      


        // make api call
        const response =await addToCategory(body)
        console.log(response);
        if(response.status>=200 && response.status<300){
          
          
          // hide modal
          handleClose()
          
          
          // reset state
          setCategoryName('')
        }else{
          toast.error('something went wrong')
        }
      }else{
            toast.warning("provide category name")
      }
    }
    const getCategories = async()=>{
    const {data}= await getAllCategory()
    setAllCategories(data);
  }

  console.log(allCategories);

  
  useEffect(()=>{
    getCategories() 
  },[])


  const handleDelete= async(id)=>{
    await deleteCategory(id)
    getCategories()
  }

  const dragOver =(e)=>{
    console.log("video drag over category");
    e.preventDefault()
  
  }



  const videoDrop =async (e,categoryId)=>{
    console.log("video drop inside category Id:"+categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    console.log("video card Id",videoId);

    // GET ONE VIDEO AND DETAILS TO DISPLAY

    const {data}=await getAVideo(videoId)
    console.log(data);

    // GET CATEGORY DETAILS

    const selectedCategory =  allCategories?.find(item=> item.id===categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);

    // MAKE API CALL TO GET UPDATE CATEGORY

    await updateCategory(categoryId,selectedCategory)
    getCategories( )

  }


  return (
    <>

    <div className='d-grid ms-3'>
      <button className='btn btn-info' onClick={handleShow}>Add to Category</button>
    </div>



    {
      allCategories?allCategories?.map(item=>(
        <div className='mt-5 mb-5 border rounded p-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className='d-flex justify-content-between align-items-center'>
           <h6>{item?.categoryName}</h6>
            <button className='btn' onClick={()=>handleDelete(item?.id)}><i class="fa-solid fa-trash text-danger"></i></button>
          </div>

              <Row>
                {
                  item?.allVideos &&
                  item?.allVideos.map(
                    card=>(
                      <Col sm={12}>
                      <VideoCard displayData={card} insideCategory={true}/>
                      </Col>
                    )
                  )
                }
              </Row>

          
          </div>
      )): <p className='fw-bolder text-danger fs-5'>Nothing to Display</p>

      

      
    }
    


    
  
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form>

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Label>Enter Video Name</Form.Label>
            
        <Form.Control type="text" placeholder="Enter Video Name"  onChange={(e)=>setCategoryName(e.target.value)}/>
      

 
        
        
        
      </Form.Group>

      
        </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>ADD</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
    </>
  )
}


export default Category