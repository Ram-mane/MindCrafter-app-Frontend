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
import InfiniteScroll from "react-infinite-scroll-component";
import { Navigate, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../authFunc";

const NewFeed = () => {
  const [posts, setPosts] = useState({
    content: [],
    pageSize: "",
    totalElements: "",
    lastPage: false,
    totalPages: "",
    pageNumber: "",
  });

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage]);

  const handlePageChange = (pageNumber = 0, pageSize = 4) => {
    if (pageNumber > posts.pageNumber && posts.lastPage) {
      return;
    }
    if (pageNumber < posts.pageNumber && posts.pageNumber == 0) {
      return;
    }

    loadAllPosts(pageNumber, pageSize)
      .then((data) => {
        setPosts({
          content: [...posts.content, ...data.content],
          pageSize: data.pageSize,
          totalElements: data.totalElements,
          lastPage: data.lastPage,
          totalPages: data.totalPages,
          pageNumber: data.pageNumber,
        });
        // setPosts(data);
        // window.scroll(0, 0);
      })
      .catch((error) => {
        toast.error("error loading posts !");
      });
  };

const navigate = useNavigate();

  const navigateDashboard = () => {
    if(isLoggedIn()) {
      return navigate("/user/dashbord");
    } else {
      toast.error("Please login to jazz it up with more !");

      setTimeout(() => {
        return navigate("/login");
      }
      , 2000);}
  }

  const handleInfiniteScroll = () => {
    console.log("page changed ");
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container-fluid">
      <Row>
        <Col
          md={{
            size: 12
          }}
        >
          <h1 style={{fontFamily:'cursive'}}>post count : {posts?.totalElements}</h1>

          {posts && (
            <InfiniteScroll
              dataLength={posts.content.length} //This is important field to render the next data
              next={handleInfiniteScroll}
              hasMore={!posts.lastPage}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center",fontFamily:'cursive', fontWeight:'-moz-initial' }}>
                  <b onClick={navigateDashboard} style={{cursor:'pointer'}}>Why not jazz it up with a few more ? </b>
                </p>
              }
            >
              {posts?.content.map((post) => (
                <Post post={post} key={post.postId} />
              ))}
            </InfiniteScroll>
          )}

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
