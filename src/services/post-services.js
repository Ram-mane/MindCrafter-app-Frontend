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

// uplad image

export const uploadImage =(image, postId)=>{

   const formData = new FormData();

   formData.append("image", image);

   return privateAxios.post(
      `/api/posts/image/upload/${postId}`,formData
   ).then(response=>{
      return response.data;
   }
   )
}

// load post by Category

export function loadPostByCategory(categoryId){

   return myAxios.get(
      `/api/category/${categoryId}/posts`
   ).then(response=>{
      return response.data;
   })
}

// load post by User

export function getPostByUser(userId){

   return myAxios.get(
      `/api/user/${userId}/posts`
   ).then(response=>{
      return response.data;
   })
}

// delete post by user

export function deletePostByUser(postId){

   return privateAxios.delete(
      `/api/posts/${postId}`
   ).then(response=>{
      return response.data;
   })
}