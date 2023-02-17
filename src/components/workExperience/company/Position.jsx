import classes from "./Position.module.css";

const Position = ({ children }) => (
  <span className={classes.position}>{children}</span>
);

export default Position;
