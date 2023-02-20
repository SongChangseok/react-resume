import Period from "../../period/Period";
import SkillTags from "../../skillTags/SkillTags";
import classes from "./Project.module.css";

const Project = ({ title, period, description, skills }) => {
  return (
    <div className={classes.project}>
      <h4>{title}</h4>
      <Period from={period.from} to={period.to} />
      <div>
        <h5>설명</h5>
        <ul>
          {description.map(({ id, value }) => (
            <li key={id}>{value}</li>
          ))}
        </ul>
        <h5>기술</h5>
        <SkillTags skills={skills} />
      </div>
    </div>
  );
};

export default Project;
