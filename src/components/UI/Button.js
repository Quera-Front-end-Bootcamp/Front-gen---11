const Button = ({ freeSize = false, color, children }) => {
  return (
    <button
      className={`btn ${freeSize && "btn__freesize"} btn__color__${color}`}
    >
      {children}
    </button>
  );
};
export default Button;
