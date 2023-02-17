import classes from "./Content.module.css";

const Content = ({ children }) => {
  return <section className={classes.content}>{children}</section>;
};

export default Content;
