import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardText } from 'reactstrap'

function Post({post={title:"Post Title",content:"post content"}}) {

    console.log("title ",post)
  return (
    <Card className='border-0 shadow-sm mt-3'>
        <CardBody>
            <h2 style={{fontFamily:'monospace'}}>{post.title}</h2>
            <CardText style={{fontFamily:'cursive'}} >
                {post.category.categoryDescription}
            </CardText>
            <div>
                <Link to={'/posts/'+post.postId} className='btn btn-outline-primary btn-sm'>
                    Read More
                </Link>
            </div>
            
        </CardBody>
    </Card>
  )
}

export default Post
