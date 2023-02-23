import React, { useState, useEffect } from "react";
import Comment from "./comment";
import Button from "../UI/Button";
import { useForm } from "react-hook-form";
function CommentSection() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
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
      regexPatern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i,
      errorMessage: "لطفا ایمل خود را به درستی وارد کنید",
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

  function submitHandler(event) {
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
      <form onSubmit={submitHandler} className="comment-form">
        <h3>لطفا یک نظر ایجاد کنید </h3>
        {formData.map((item) => {
          return (
            <div key={item.id} className="form-group">
              <label htmlFor={item.formID}>{item.label}</label>
              {item.type !== "textarea" ? (
                <>
                  <input
                    type={item.type}
                    id={item.formID}
                    name={item.formID}
                    placeholder={item.placeHolder}
                    {...register(item.name, {
                      required: {
                        value: true,
                        message: "لطفا فیلد را وارد کنید !"
                      },
                      pattern: {
                        value: item.regexPatern,
                        message: item.errorMessage,
                      },
                    })}
                  />
                  <p className="errorP">{errors[item.name] && errors[item.name].message}</p>
                </>
              ) : (
                <>
                  <textarea
                    id={item.formID}
                    name={item.formID}
                    {...register(item.name, {
                      required: {
                        value: true,
                        message: "لطفا فیلد را وارد کنید !"
                      },
                      maxLength: {
                        value: 150,
                        message: "تعداد کاراکتر ها باید کمتر از 150 باشد !"
                      },
                      minLength: {
                        value: 10,
                        message: "تعداد کاراکتر ها باید بیشتر از 10 باشد !"
                      }
                    })}
                  ></textarea>
                  <p className="errorP">{errors[item.name] && errors[item.name].message}</p>
                </>
              )}
            </div>
          );
        })}
        <Button color="main" type="submit" disabled={!isValid}>
          ارسال
        </Button>
      </form>
    </div>
  );
}
export default CommentSection;