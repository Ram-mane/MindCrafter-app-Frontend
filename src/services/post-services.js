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
      `/api/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`
   ).then(response=>{
      return response.data;
   }
)}