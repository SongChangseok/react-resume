import classes from "./OtherItem.module.css";

const OtherItem = ({ children }) => {
  return <div className={classes.other_item}>{children}</div>;
};

export default OtherItem;
