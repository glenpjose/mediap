import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideo } from '../Services/allAPI'

function View({uploadVideoServerResponse}) {
  const [allVideos,setAllVideos]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]= useState(false)
const getAllUploadedaVideos = async ()=>{
  const {data} = await getAllVideo()
  setAllVideos(data);
}
useEffect(()=>{
  getAllUploadedaVideos();
  setDeleteVideoStatus(false)
},[uploadVideoServerResponse,deleteVideoStatus])
console.log(allVideos);
  return (
    <>
    <Row>{
      allVideos.length>0?
      allVideos.map(video=>(
      <Col sm={2} md={6} lg={4} xl={3}>
        <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </Col>
      )):<p className='fw-bolder text-danger fs-5'>Nothing to display</p>
}
        
    </Row>
      
    </>
  )
}

export default View