const Button = ({ text, freeSize = false, color }) => {
  return (
    <button
      className={`btn ${freeSize && "btn__freesize"} btn__color__${color}`}
    >
      {text}
    </button>
  );
};
export default Button;
