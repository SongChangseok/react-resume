const List = ({ list }) => (
  <ul>
    {list.map(({ id, value }) => (
      <li key={id}>{value}</li>
    ))}
  </ul>
);

export default List;
