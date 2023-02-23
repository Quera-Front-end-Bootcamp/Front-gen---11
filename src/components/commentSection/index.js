import React, { useState, useEffect } from "react";
import Comment from "./comment";
import Button from "../UI/Button";
function CommentSection() {
  const [comments, setComments] = useState([]);
  const formData = [
    {
      id: 1,
      formID: "author",
      type: "text",
      value: null,
      name: "fullName",
      label: "نام :",
      placeHolder: "لطفا نام و نام خانوادگی خود را وارد کنید ...",
      className: null,
    },
    {
      id: 2,
      formID: "email",
      type: "email",
      value: null,
      name: "emailAddress",
      label: "ایمیل :",
      placeHolder: "لطفا ایمیل خود را وارد کنید ...",
      className: null,
    },
    {
      id: 3,
      formID: "text",
      type: "textarea",
      value: null,
      name: "comment",
      label: "نظر :",
      placeHolder: "لطفا نظر خود را وارد کنید ...",
      className: null,
    },
  ];
  useEffect(() => {
    fetch("http://localhost:5000/api/comments/")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      postId: "123fsfdfsafrt7",
      username: event.target[0].value,
      email: event.target[1].value,
      comment: event.target[2].value,
    };
    fetch("http://localhost:5000/api/comments/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "PostmanRuntime/7.31.0",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setComments((prevComments) => [...prevComments, res]);
      });
  }

  const commentElements = comments.map((comment, index) => {
    return (
      <Comment key={index} author={comment.username} text={comment.comment} />
    );
  });

  return (
    <div className="comment-section">
      <h2>نظرات</h2>
      <div className="comment-list">{commentElements}</div>
      <form onSubmit={handleSubmit} className="comment-form">
        <h3>لطفا یک نظر ایجاد کنید </h3>
        {formData.map((item) => {
          return (
            <div className="form-group">
              <label htmlFor={item.formID}>{item.label}</label>
              {item.type !== "textarea" ? (
                <input type={item.type} id={item.formID} name={item.formID} placeholder={item.placeHolder} />
              ) : (
                <textarea id={item.formID} name={item.formID}></textarea>
              )}
            </div>
          );
        })}
        <Button color="main" type="submit">
          ارسال
        </Button>
      </form>
    </div>
  );
}
export default CommentSection;
