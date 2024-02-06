
import { cmapi } from "./cmapi";
import { serverurl } from "./svrUrl";


// upload video

export const uploadVideo=async(reqBody)=>{
    // Make POST  http request "http//localhost:4000/videos" to add videos to the j-son server return response to the add component

    return await cmapi("POST",`${serverurl}/videos`,reqBody)  // reqbody only for post


}


// get all videos from json 

export const getAllVideo = async()=>{

    // make GET http request to "http//localhost:4000/videos" to get all videos from j-son server return response to the view components

    return await cmapi("GET",`${serverurl}/videos`,)
}

// get a video

export const getAVideo = async(id)=>{

    // make GET http request to "http//localhost:4000/videos/id" to get all videos from j-son server return response to the video card components

    return await cmapi("GET",`${serverurl}/videos/${id}`,"")
}

// delete a video

export const deleteVideo = async(id)=>{

    // make DELETE http request to "http//localhost:4000/videos/id" to delete  videos from j-son server return response to the video card components

    return await cmapi("DELETE",`${serverurl}/videos/${id}`,{})
}

// store watching video history to json server

export const addToHistory = async(videoDetails)=>{

    // make post http request to "http//localhost:4000/history" to store  videos to the  j-son server return response to the video card components

    return await cmapi("POST",`${serverurl}/history`,videoDetails)
}

//GET watching video history to json server

export const getAllHistory = async()=>{

    // make GET http request to "http//localhost:4000/history" to GET  videos from the  j-son server return response to the watch components

    return await cmapi("GET",`${serverurl}/history`,)
}

//DELETE watching history

export const deleteHistory = async(id)=>{

    // make delete http request to "http//localhost:4000/history/id" to delete  videos from the  j-son server return response to the watch components

    return await cmapi("DELETE",`${serverurl}/history/${id}`,{})
}
// add  category to json server

export const addToCategory = async(reqBody)=>{

    // make POST http request to "http//localhost:4000/category" to GET    allvideos from the  j-son server return response to the category components

    return await cmapi("POST",`${serverurl}/categories`,reqBody)
}

// get  all category from json server 

export const getAllCategory = async()=>{

    // make POST http request to "http//localhost:4000/category" to GET    allvideos from the  j-son server return response to the category components

    return await cmapi("GET",`${serverurl}/categories`,"")
}

// delete  all category from json server 

export const deleteCategory = async(id)=>{

    // make delete http request to "http//localhost:4000/category" to GET    allvideos from the  j-son server return response to the category components

    return await cmapi("DELETE",`${serverurl}/categories/${id}`,{})
}


// update a category from json server 

export const updateCategory = async(id,body)=>{

    // make PUT http request to "http//localhost:4000/category" to UPDATE a videos from the  j-son server return response to the category components

    return await cmapi("PUT",`${serverurl}/categories/${id}`,body)
}


