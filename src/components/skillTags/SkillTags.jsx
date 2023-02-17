import SkillTag from "./SkillTag";
import classes from "./SkillTags.module.css";

const SkillTags = ({ skills }) => (
  <p className={classes.skillTags}>
    {skills.map((skill) => (
      <SkillTag key={skill} skill={skill} />
    ))}
  </p>
);

export default SkillTags;
