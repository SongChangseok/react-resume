import Period from "../../period/Period";
import Position from "./Position";

const Company = ({ name, period, position }) => {
  return (
    <div>
      <h3>{name}</h3>
      <Period from={period.from} to={period.to} />
      <Position>{position}</Position>
    </div>
  );
};

export default Company;
