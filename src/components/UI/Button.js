const Button = ({ freeSize = false, color, opacity = false, children }) => {
  return (
    <button
      className={`btn ${freeSize && "btn__freesize"} btn__color__${color} ${
        opacity && "btn__opacity__" + color
      }`}
    >
      {children}
    </button>
  );
};
export default Button;
