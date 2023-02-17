const skillMap = {
  react: ["React", "61DAFB"],
  redux: ["Redux", "764ABC"],
  "react-router-dom": ["React Router", "CA4245"],
  javascript: ["JavaScript", "F7DF1E"],
  mui: ["MUI", "007FFF"],
  jquery: ["jQuery", "0769AD"],
  springBoot: ["Spring Boot", "6DB33F"],
  oracle: ["Oracle", "F80000"],
};

const SkillTag = ({ skill }) => {
  const [skillName, backgroundColor] = skillMap[skill];
  return (
    <img
      alt={skillName}
      src={`https://img.shields.io/badge/${skillName}-${backgroundColor}?style=platic&logo=${skillName}&logoColor=white`}
    />
  );
};

export default SkillTag;
