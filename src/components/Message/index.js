import "./index.css";

const Message = (props) => {
  const { login } = props;
  const message = login ? "Welcome User" : "Please Login";
  return <h1 className="head">{message}</h1>;
};

export default Message;
