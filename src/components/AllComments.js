import React from "react";
import EachComment from "./EachComment";

function AllComments({ comments, toggleIsReplying, handleAddReply }) {
  return (
    <div className="comments">
      {comments.map((comment) => {
        return (
          <EachComment
            key={comment.id}
            comment={comment}
            toggleIsReplying={toggleIsReplying}
            handleAddReply={handleAddReply}
          />
        );
      })}
    </div>
  );
}

export default AllComments;
