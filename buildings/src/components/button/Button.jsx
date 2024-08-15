import { Link } from "react-router-dom";
import "./Button.scss";

function Button(props) {
  // eslint-disable-next-line react/prop-types
  const { text, link } = props;
  return link ? (
    <Link to={link}>
      <button className="button">{text}</button>
    </Link>
  ) : (
    <button className="button">{text}</button>
  );
}

export default Button;
