import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Base from "./Base";
import { BASE_URL } from "../services/helper";
import {
  Button,
  Card,
  CardBody,
  CardText,
  Col,
  Container,
  Row,
} from "reactstrap";
import { loadPostById } from "../services/post-services";
import { toast } from "react-toastify";
import "./PostPage";
import Comments from "../components/Comments";

const PostPage = () => {
  const [post, setPost] = useState();
  const [showComments, setShowComments] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { postId } = useParams();

  useEffect(() => {
    //load post by post id
    loadPostById(postId)
      .then((response) => {
        console.log("response ", response);
        setPost(response);
      })
      .catch((error) => {
        console.log("error ", error);
        toast.error(error);
      });

    console.log("post ", post);
  }, []);

  const printDate = (date) => {
    console.log("date ", new Date(date).toString());
    return new Date(date).toDateString();
  };

  console.log("image " + BASE_URL + "/api/posts/image/" + post?.imageName);
  const toUpperCase = (text) => {
    return text?.toUpperCase();
  };

  const handleCommentClick = () => {
    setShowComments(!showComments); // Toggle the state to show/hide comments
  };

  return (
    <Base>
      <Container className="mt-4">
        <Link to="/" className="btn btn-outline-primary btn-sm">
          Home
        </Link>

        <Row>
          <Col
            md={{
              size: 12,
            }}
          >
            <Card className="mt-3 border-0 ">
              {post && (
                <CardBody className="ms-3 border-0 ">
                  <CardText>
                    Posted By <b>{post.user.name}</b> on{" "}
                    <b>{printDate(post.addedDate)}</b>
                  </CardText>
                  <CardText>
                    <span className="text-muted">
                      {post.category.categoryName}
                    </span>
                  </CardText>
                  <div
                    className="divider"
                    style={{
                      width: "100%",
                      height: "2px",
                      background: "#e2e2e2",
                    }}
                  ></div>
                  <CardText className="mt-3 ">
                    <h3>{toUpperCase(post.title)}</h3>
                  </CardText>
                  <div
                    className="image-container  mt-3 rounded-4 ms-3  "
                    style={{
                      width: "30%",
                      height: "auto",
                      boxShadow: "0 0.5rem 1rem rgba(176, 25, 25, 0.84)",
                    }}
                  >
                    <img
                      className="img-fluid hover-overlay rounded-4  "
                      src={BASE_URL + "/api/posts/image/" + post.imageName}
                      alt="default"
                    ></img>
                  </div>
                  <CardText
                    className="mt-4 ms-5"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></CardText>
                  <div
                    className="divider"
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "#e2e2e2",
                      marginBottom: "10px",
                    }}
                  ></div>
                  <button
                    outline
                    className="btn btn-outline-primary btn-sm"
                    onClick={handleCommentClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {isHovered ? "Comments" : "コメント"}
                  </button>
                  {showComments && <Comments post={post} />}
                </CardBody>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default PostPage;
