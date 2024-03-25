import React, { useEffect, useState } from "react";
import CategorySideMenu from "../components/CategorySideMenu";
import Base from "./Base";
import { useParams } from "react-router-dom";
import { loadPostByCategory } from "../services/post-services";
import Post from "../components/Post";
import { Col, Container, Row } from "reactstrap";
import { toast } from "react-toastify";


function Categories() {
  const { categoryId } = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPostByCategory(categoryId)
      .then((data) => {
        setPosts(data.content);
      })
      .catch((error) => {
        toast.error("error loading posts !");
        console.log(error);
      });
  }, [categoryId]);

  useEffect(() => {
    console.log(categoryId);
  }, [categoryId]);

  return (
    <div>
      <Base>
        <Container className="mt-3">
          <Row>
            <Col md={3} className="mt-5">
              <CategorySideMenu />
            </Col>
            <Col md={9}>
                <div><h2 style={{fontFamily:'cursive'}}>Post Count : {posts.length}</h2></div>
              {posts.length>0 ? posts.map((post) => (
                <Post key={post.postId} post={post} />
              )): <h1 style={{fontFamily:'cursive'}}>Oops ! No Posts for this Category </h1>
        }
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
}

export default Categories;
