import Item from "../item/Item";
import Company from "./Company";
import Projects from "./Projects";

const DUMMY_COMPANY = {
  name: "모바일엔트로피(주)",
  period: {
    from: "201802",
    to: "202209",
  },
};

const WorkExperience = () => {
  return (
    <Item>
      <Company name={DUMMY_COMPANY.name} period={DUMMY_COMPANY.period} />
      <Projects />
    </Item>
  );
};

export default WorkExperience;
