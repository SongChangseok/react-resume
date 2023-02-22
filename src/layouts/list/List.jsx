import classes from "./List.module.css";

const List = ({ list }) => (
  <ul className={classes.list}>
    {list.map(({ id, value }) => (
      <li key={id}>{value}</li>
    ))}
  </ul>
);

export default List;
