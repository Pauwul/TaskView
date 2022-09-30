import PropTypes from "prop-types";
import { Button } from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header ">
      <h1>{title} 📆</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close Add Module" : "Add New Task"}
        onClick={onAdd}
      ></Button>
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
