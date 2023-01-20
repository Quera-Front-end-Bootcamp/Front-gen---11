const Button = ({
  freeSize = false,
  color,
  type = undefined,
  children,
  textSize = "normal",
}) => {
  return (
    <button
      type={type}
      className={`btn ${
        freeSize && "btn__freesize"
      } btn__color__${color} btn__size__${textSize}`}
    >
      {children}
    </button>
  );
};
export default Button;
