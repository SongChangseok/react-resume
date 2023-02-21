import classes from "./FlexItem.module.css";

const FlexItem = ({ children }) => {
  return <div className={classes.flex_item}>{children}</div>;
};

export default FlexItem;
