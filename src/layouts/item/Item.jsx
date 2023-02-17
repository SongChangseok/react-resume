import classes from "./Item.module.css";

const Item = ({ children }) => {
  return <div className={classes.item}>{children}</div>;
};

export default Item;
