const Button = ({
  freeSize = false,
  color,
  opacity = false,
  children,
  textSize = "normal",
  onClick,
  disabled 
}) => {
  return (
    <button
      className={`btn ${freeSize && "btn__freesize"} btn__color__${color} ${
        opacity && "btn__opacity__" + color
      } btn__size__${textSize}`}
      onClick={() => onClick && onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
