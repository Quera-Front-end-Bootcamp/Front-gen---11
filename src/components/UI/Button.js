const Button = ({ text, freeSize = false }) => {
  return (
    <button className={`btn ${freeSize && "btn__freesize"}`}>{text}</button>
  );
};
export default Button;
