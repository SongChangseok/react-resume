const Company = ({ name, period }) => {
  return (
    <div>
      <h3>{name}</h3>
      <span>
        <time dateTime="2018-02">2018.02</time>
        {" - "}
        <time dateTime="2022-09">2022.09</time>
      </span>
    </div>
  );
};

export default Company;
