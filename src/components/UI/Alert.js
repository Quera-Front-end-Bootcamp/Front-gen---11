const Alert = ({ success = true, children }) => {
  return (
    <div className={`alert alert-${success ? "success" : "danger"}`}>
        {children}
    </div>
  );
};
export default Alert;
