import React from "react";

function EachComment({ comment, toggleIsReplying, handleAddReply }) {
  const isReplying = comment?.isReplying;
  const [reply, setReply] = React.useState("");
  const [username, setUsername] = React.useState("");

  function handleReplySubmit(e) {
    e.preventDefault();

    handleAddReply(comment.id, username, reply);

    setUsername("");
    setReply("");
  }

  return (
    <div className="comment">
      <div className="comment--main">
        <h3>{comment.username}</h3>
        <p>{comment.comment}</p>
      </div>
      {isReplying ? (
        <form onSubmit={(e) => handleReplySubmit(e)}>
          <textarea
            placeholder="Enter the reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button>Submit</button>
        </form>
      ) : (
        <button onClick={() => toggleIsReplying(comment.id)}>Reply</button>
      )}
      <div className="comment--replies">
        {comment.replies.map((eachReply) => (
          <div key={eachReply.id} className="comment--eachReply">
            <h3>{eachReply.username}</h3>
            <p>{eachReply.reply}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EachComment;
