import React, { useState } from "react";
import { addComments } from "../services/post-services";
import { toast } from "react-toastify";
import { getCurrentUserDetails, isLoggedIn } from "../authFunc";

const Comments = ({ post }) => {
  const [comments, setComments] = useState(post.comment);
  const [text, setText] = useState({ 
    content: "",
    addedDate: new Date()
});

  const date = (addedDate) => {
    return new Date(addedDate).toDateString();
  };

  const handleKeyPress = (event) => {

    if(text.content.length>250){
      toast.error('Comment should be less than 250 characters')
      return;
    }

    
    if (event.key === "Enter") {
      event.preventDefault();
      if(text.content===''){
        toast.info('Write Something bro.. !')
        return;
      }

      if(!isLoggedIn()){
        toast.error("You need to login first !")
        return;
    }
      const loggedInuser = getCurrentUserDetails();

      addComments(post.postId, loggedInuser.id, text)
        .then((data) => {
          console.log("data ", data);
          setComments((prevComments) => [data.data, ...prevComments]); // Prepend new comment to comments state
          toast.success("Comment added");
          setText({ content: " ",addedDate:'' }); // Clear the input field
        })
        .catch((error) => {
          toast.error("Log in to post comments");
        });
    }
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div
          className="card shadow-0 border"
          style={{ backgroundColor: "#f0f2f5" }}
        >
          <div className="card-body p-4">
            <div className="form-outline mb-4">
              <input
                type="text"
                id="add"
                className="form-control"
                placeholder="Type comment..."
                value={text.content}
                onChange={(event) => setText({ content: event.target.value })}
                onKeyDown={handleKeyPress}
              />
            </div>

            {comments && comments.length > 0 ? (
              comments.map((c, index) => (
                <div className="card mb-4" key={index}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                          alt="avatar"
                          width="25"
                          height="25"
                        />
                        <p className="small mb-0 ms-2" style={{fontFamily:'-moz-initial'}}>{c?.username}</p>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <p
                          className="small text-muted mb-0"
                          style={{ fontFamily: "cursive" }}
                        >
                          {date(c?.addedDate)}
                        </p>
                        
                      </div>
                    </div>
                    <div className="mt-2 ms-4 container " style={{fontFamily:'cursive'}}>
                      
                      <p>{c.content}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ font: "message-box", fontFamily: "cursive" }}>
                Be The First to Comment on this Post
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
