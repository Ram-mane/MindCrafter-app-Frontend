import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardText } from 'reactstrap'

function Post({post={title:"Post Title",content:"post content"}}) {

    console.log("title ",post.title)
  return (
    <Card className='border-0 shadow-sm mt-3'>
        <CardBody>
            <h1>{post.title}</h1>
            <CardText dangerouslySetInnerHTML={{__html:post.content.substring(0,90)+"..."}}>
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
