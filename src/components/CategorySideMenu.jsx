import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { loadAllCategories } from "../services/category-services";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function CategorySideMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        setCategories([...data]);
      })
      .catch((error) => {
        toast.error("error loading categories !");
      });
  }, []);

  return (
    <div>
      <ListGroup flush>
        <ListGroupItem action={true} tag={Link} to='/' style={{ fontFamily: "cursive" }}>
          All Posts
        </ListGroupItem>
        {categories &&
          categories.map((category, index) => (
            <ListGroupItem
              key={index}
              action={true}
              tag={Link} to={`/category/${category.categoryId}`}
              className="mt-1 shadow-0"
              style={{ fontFamily: "cursive" }}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}

export default CategorySideMenu;
