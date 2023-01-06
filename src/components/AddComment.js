import React from "react";

function AddComment({ comment, onChange, onSubmit }) {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <textarea
        placeholder="Enter the comment"
        value={comment.comment}
        onChange={(e) => onChange(e)}
        name="comment"
      />
      <input
        type="text"
        placeholder="Username"
        value={comment.username}
        onChange={(e) => onChange(e)}
        name="username"
      />
      <button>Submit</button>
    </form>
  );
}

export default AddComment;
