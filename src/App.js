import React from "react";
import "./App.css";
import AddComment from "./components/AddComment";
import AllComments from "./components/AllComments";

function App() {
  const [comment, setComment] = React.useState({
    id: 0,
    username: "",
    comment: "",
    isReplying: false,
    replies: [],
  });
  const [comments, setComments] = React.useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment((comment) => ({
      ...comment,
      [name]: value,
      id: comments.length + 1,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setComments((comments) => [...comments, comment]);
    setComment({
      id: 0,
      username: "",
      comment: "",
      isReplying: false,
      replies: [],
    });
  }

  function toggleIsReplying(id) {
    setComments((comments) =>
      comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              isReplying: !comment.isReplying,
            }
          : comment
      )
    );
  }

  function handleAddReply(id, username, reply) {
    setComments((comments) =>
      comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: comment.replies.length + 1,
                  username: username,
                  reply: reply,
                },
              ],
            }
          : comment
      )
    );

    toggleIsReplying(id);
  }

  return (
    <div className="app">
      <h1>Bosscoder App</h1>
      <AddComment
        comment={comment}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <AllComments
        comments={comments}
        toggleIsReplying={toggleIsReplying}
        handleAddReply={handleAddReply}
      />
    </div>
  );
}

export default App;
