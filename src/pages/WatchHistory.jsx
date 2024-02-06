import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../Services/allAPI'



function WatchHistory() {
  const[history,setHistory]=useState([])
  const handleHistory = async ()=>{
    // make API call

    const {data} = await getAllHistory()
    setHistory(data);
  }

console.log(history);

useEffect(()=>{
  handleHistory()
},[])



const handleDeleteHistory=async (id)=>{
  // make api call
  await deleteHistory(id)
  // return REMAINING HISTORY
  handleHistory()
}


  
  return (<>

  <div className='contaier mt-5 mb-5 d-flex justify-content-between'>

    <h1>Watch History</h1>
    <Link to={'/Home'} style={{textDecoration:'none',fontSize:'20px',color:'black'}}><i class="fa-solid fa-circle-arrow-left fa-bounce"></i>Back To Home</Link>

  </div>
  
  
  <table className='table mt-5 mb-5 container'>

    <thead>
      <tr>
              <th>#</th>
              <th>Name</th>
              <th>URL</th>
              <th>Timestamp</th>
              <th>Action</th>
       </tr>   
    </thead>
    <tbody>
      {
        history.length>0?history?.map((item,index)=>(
      <tr key={item?.id}>

               <td>{index+1}</td>
               <td>{item?.caption}</td>
               <td><a href={item?.embedLink} target='_blank'>{item?.embedLink}</a></td>
               <td>{item?.timestamp}</td>
               <td><button onClick={()=>handleDeleteHistory(item?.id)} className="btn"><i class="fa-solid fa-trash text-danger"></i></button></td>
               </tr>
               )):<p className='fw-bolder text-danger fs-5'>Nothing to Dislay</p>
}
    </tbody>

  </table>
  </>
  
  )
}

export default WatchHistory