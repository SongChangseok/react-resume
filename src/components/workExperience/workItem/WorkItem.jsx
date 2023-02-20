import classes from "./WorkItem.module.css";

const WorkItem = ({ children }) => {
  return <div className={classes.work_item}>{children}</div>;
};

export default WorkItem;
