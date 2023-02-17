import Item from "../../layouts/item/Item";
import Company from "./company/Company";
import Projects from "./Projects";

const DUMMY_COMPANY = {
  name: "모바일엔트로피(주)",
  period: {
    from: "201802",
    to: "202209",
  },
  position: "개발팀/대리",
};

const WorkExperience = () => {
  return (
    <Item>
      <Company
        name={DUMMY_COMPANY.name}
        period={DUMMY_COMPANY.period}
        position={DUMMY_COMPANY.position}
      />
      <Projects />
    </Item>
  );
};

export default WorkExperience;
