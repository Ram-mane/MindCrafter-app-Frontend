import React, { useEffect, useState } from 'react'
import Base from '../Base'
import AddPost from '../../components/AddPost'
import { Button, Container } from 'reactstrap'
import { useContext } from 'react'
import userContext from '../../context/userContext'
import { getCurrentUserDetails } from '../../authFunc'
import { deletePostByUser, getPostByUser } from '../../services/post-services'
import { toast } from 'react-toastify'
import Post from '../../components/Post'
import './UserDashbord.css'; // Import CSS file for styles


const UserDashbord=()=> {

  const currentUser = getCurrentUserDetails();
  const [posts, setPosts] = useState([]);
  const [displayedName, setDisplayedName] = useState('')


  const name = currentUser.name.split(' ')[0];
 
  


  useEffect(()=>{ 

    getPostByUser(currentUser.id).then((data)=>{
      setPosts([...data.content])
      console.log(posts)
    }).catch((error)=>{
      console.log(error)
      toast.error("Error loading posts !")
    })

  },[currentUser.id])
  console.log(displayedName)

  const deletePost = (postId) => {
    console.log("delete post id ", postId);

    deletePostByUser(postId).then(data => {
      toast.success("Post deleted successfully !")
      setPosts(posts.filter(post => post.postId !== postId))
    }).catch(error => {
      console.log(error)
      toast.error("Error deleting post !")
    })
  }

  
  return (
    <Base>

    <Container>

    <h1 style={{ fontFamily: 'cursive' }}>Welcome {name} !</h1>
      <AddPost/>
      <div >
      <h2 style={{ fontFamily: '-moz-initial' }}>Your Posts</h2>

      </div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.postId} style={{ position: 'relative', marginBottom:'10px' }}>
            <Post post={post} />
            <div style={{ position: 'absolute', top: '65%', right: '3%', zIndex: 99 }}>
              <Button outline className='mt-1' color="danger" onClick={() => deletePost(post.postId)}>Delete</Button>
            </div>
          </div>
        ))
      ) : (
        <h1 style={{ fontFamily: 'cursive' }}>Oops ! Not Single post yet ?</h1>
      )}
    </Container>
    </Base>
  )
}

export default UserDashbord
