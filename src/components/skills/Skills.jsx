import Item from "../../layouts/item/Item";
import List from "../../layouts/list/List";

const DUMMY_SKILLS = [
  {
    id: 1,
    title: "제목",
    subject: "소제목",
    descriptions: [
      {
        id: 1,
        value: "하나",
      },
      {
        id: 2,
        value: "둘",
      },
    ],
  },
];

const Skills = () => {
  return (
    <>
      {DUMMY_SKILLS.map(({ id, title, subject, descriptions }) => (
        <Item key={id}>
          <h3>{title}</h3>
          <h5>{subject}</h5>
          <List list={descriptions} />
        </Item>
      ))}
    </>
  );
};

export default Skills;
