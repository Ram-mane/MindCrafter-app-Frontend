import React, { useEffect, useState } from "react";
import { loadAllPosts } from "../services/post-services";
import {
  Row,
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import Post from "./Post";
import { toast } from "react-toastify";

const NewFeed = () => {
  const [posts, setPosts] = useState({
    content: [],
    pageSize: "",
    totalElements: "",
    lastPage: false,
    totalPages: "",
    pageNumber: "",
  });

  useEffect(() => {
    handlePageChange(0);
  }, []);

  const handlePageChange = (pageNumber = 0, pageSize = 4) => {
    if (pageNumber > posts.pageNumber && posts.lastPage) {
      return;
    }
    if (pageNumber < posts.pageNumber && posts.pageNumber == 0) {
      return;
    }

    loadAllPosts(pageNumber, pageSize)
      .then((data) => {
        setPosts(data);
        window.scroll(0, 0);
      })
      .catch((error) => {
        toast.error("error loading posts !");
      });
  };

  return (
    <div className="container-fluid">
      <Row>
        <Col
          md={{
            size: 10,
            offset: 1,
          }}
        >
          <h1>post count {posts?.totalElements}</h1>

          {posts?.content.map((post) => (
            <Post post={post} key={post.postId} />
          ))}

          {/* <Container className="mt-3">
            <Pagination size="md">
              <PaginationItem
                disabled={posts.pageNumber == 0}
                onClick={() => handlePageChange(posts.pageNumber - 1)}
              >
                <PaginationLink previous>Prev</PaginationLink>
              </PaginationItem>

              {[...Array(posts.totalPages)].map((item, index) => (
                <PaginationItem
                  active={index == posts.pageNumber}
                  key={index}
                  onClick={() => handlePageChange(index)}
                >
                  <PaginationLink>{index + 1}</PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem
                disabled={posts.lastPage}
                onClick={() => handlePageChange(posts.pageNumber + 1)}
              >
                <PaginationLink next>Next</PaginationLink>
              </PaginationItem>
            </Pagination>
          </Container> */}
        </Col>
      </Row>
    </div>
  );
};

export default NewFeed;
