import React from 'react'
import { Button, Card, CardBody, CardText } from 'reactstrap'

function Post({post={title:"Post Title",content:"post content"}}) {

    console.log("title ",post.title)
  return (
    <Card className='border-0 shadow-sm mt-3'>
        <CardBody>
            <h1>{post.title}</h1>
            <CardText>
                {post.content.substring(0,40)}...
            </CardText>
            <div>
                <Button color='primary' outline>
                    Read More
                </Button>
            </div>
            
        </CardBody>
    </Card>
  )
}

export default Post
