import { AiOutlineCloseCircle } from "react-icons/ai";
const Alert = ({ success = true, children }) => {
  return (
    <div className={`alert alert-${success ? "success" : "danger"}`}>
      {children}
      {/* <AiOutlineCloseCircle /> */}
    </div>
  );
};
export default Alert;
