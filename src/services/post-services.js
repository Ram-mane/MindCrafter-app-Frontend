import {  myAxios, privateAxios } from "./helper"


// Add post function
export const addPost=(postData)=>{

   console.log("user data in post service",postData);
   return privateAxios.post(
    `/api/user/${postData.userId}/category/${postData.categoryId}/posts/`,postData
   ).then(response=>{
    return response.data
   })
}


// get all posts

export const loadAllPosts = (pageNumber,pageSize)=>{

   return myAxios.get(
      `/api/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=dsc`
   ).then(response=>{
      return response.data;
   }
)}

// get post by postId

export const loadPostById =(postId)=>{

   return myAxios.get(
      `/api/posts/${postId}`
   ).then(response=>{
      return response.data;
   })
}

// add comments

export const addComments =(postId, userId ,commentData)=>{
   return privateAxios.post(
      `/api/user/${userId}/posts/${postId}/comment`,commentData
   )
}