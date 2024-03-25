import { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  Input,
  Label,
} from "reactstrap";
import { loadAllCategories } from "../services/category-services";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";
import { addPost, uploadImage } from "../services/post-services";
import { getCurrentUserDetails } from "../authFunc";
import { upload } from "@testing-library/user-event/dist/upload";

const AddPost = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState('');

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  const [file, setFile] = useState(null); // image file

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  }

  useEffect(() => {

    // get current user

    setUser(getCurrentUserDetails());
    // console.log("logged in user "+ user);

    // load all categories
    loadAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // field change function
  const fieldChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const contentFieldChange = (data) => {
    setPost({
      ...post,
      content: data,
    });
  };

  // create post
  const createPost = (event) => {
    event.preventDefault();
    console.log(post);

    if (post.title.trim() === "") {
      toast.error("Enter valid Title !!");
      return;
    }
    if (post.categoryId.trim() === "") {
      toast.error("Select the category !!");
      return;
    }
    if (post.content.trim() === "") {
      toast.error("Content can not be null !!");
      return;
    }

    // submit the form
    post['userId'] = user.id;
       addPost(post).then(response=>{
        console.log("response "+response["Your post"].postId);

          if(file){
            uploadImage(file,response["Your post"].postId).then((resp)=>{
              toast.success('Image Uploaded Successfully !' );

              setFile(null);

              console.log("response "+resp);
            }).catch((error)=>{
              toast.error('Failed to upload Image !' );
              console.log("error "+error);
            })
          }

        toast.success('🦄 Post Created Successfully !' );

        setPost({
          title: "",
          content: "",
          categoryId: "",
        });
        console.log(response);
       }).catch((error)=>{
        console.log("error "+error);
        toast.error('🦄 Failed to create Post !')
       })

      


  };

  return (
    <div className="wrapper">
      <Card className="my-3 shadow border-0">
        <CardBody>
          <h3>Whats going on your mind ?</h3>

          <Form onSubmit={createPost}>
            <div className="my-3">
              <Label for="title">Post Title</Label>
              <Input
                id="title"
                type="text"
                value={post.title}
                placeholder="Enter post title..."
                name="title"
                onChange={fieldChange}
              />

              <Label for="category">Post Catogory</Label>
              <Input
                id="category"
                type="select"
                placeholder="Enter post category..."
                name="categoryId"
                onChange={fieldChange}
                defaultValue={0}
              >
                <option disabled value={0}>
                  -- Select Category --
                </option>
                {categories.map((category) => (
                  <option value={category.categoryId} key={category.categoryId}>
                    {category.categoryName}
                  </option>
                ))}
              </Input>

              {/* image uploading */}

              <div className="mt-3">
                <Label for="image">Select Image Banner</Label>
                <Input
                  type="file"
                  id="image"
                  name="image"
                  
                  multiple
                  onChange={handleFileChange}
                />
              </div>

              <Label for="content">Post Content</Label>

              <JoditEditor
                ref={editor}
                value={content}
                onChange={contentFieldChange}
              />
            </div>
            <Container className="text-center">
              <Button type="submit" color="primary" className="rounded-0">
                Create Post
              </Button>
              <Button color="danger" className="ms-2 rounded-0">
                Reset Content
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};
export default AddPost;
