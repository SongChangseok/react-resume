import Period from "../period/Period";

const OtherTitle = ({ title, period }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Period from={period.from} to={period.to} />
    </div>
  );
};

export default OtherTitle;
