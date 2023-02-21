import List from "../../../layouts/list/List";
import Period from "../../period/Period";
import SkillTags from "../../skillTags/SkillTags";
import classes from "./Project.module.css";

const Project = ({ title, period, descriptions, skills }) => {
  return (
    <div className={classes.project}>
      <h4>{title}</h4>
      <Period from={period.from} to={period.to} />
      <div>
        <h5>설명</h5>
        <List list={descriptions} />
        <h5>기술</h5>
        <SkillTags skills={skills} />
      </div>
    </div>
  );
};

export default Project;
