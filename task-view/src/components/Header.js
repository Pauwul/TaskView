import PropTypes from "prop-types";
import { Button } from "./Button";
const Header = (props) => {
  const onClick = () => {
    console.log("Click Click");
  };
  return (
    <header className="header">
      <h1>{props.title} 📆</h1>
      <Button color="green" text="hello" onClick={onClick}></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
