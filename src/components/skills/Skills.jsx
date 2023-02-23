import Item from "../../layouts/item/Item";
import List from "../../layouts/list/List";

const DUMMY_SKILLS = [
  {
    id: 1,
    title: "스킬",
    descriptions: [
      {
        id: 1,
        value:
          "도시가스 프로젝트를 통한 웹에 필요한 JS 스킬 보유하고 있습니다.",
      },
      {
        id: 2,
        value: "원티드 코스 및 독학을 통한 React 스킬 보유하고 있습니다.",
      },
      {
        id: 3,
        value:
          "React 커스텀 hooks를 통해 공통 로직을 모듈화 하려고 노력합니다.",
      },
    ],
  },
  {
    id: 2,
    title: "커뮤니케이션",
    descriptions: [
      {
        id: 1,
        value:
          "도시가스 프로젝트를 진행하며 다양한 분야의 사람들과 소통한 경험 보유하고 있습니다.",
      },
      {
        id: 2,
        value:
          "모르는 것이나 궁금한 것이 있는 경우 나이, 직급 등 위치에 상관없이 배우려는 자세로 질문하려고 노력합니다.",
      },
      {
        id: 3,
        value:
          "프로젝트 진행 시 의견 충돌이 있으면 조율을 해보고 상대의 의견에 맞추는 편입니다.",
      },
      {
        id: 4,
        value:
          "개발을 하면서 조용한 것보다 작은 것들이라도 자주 소통하는 것이 더 좋은 결과를 만든다고 생각합니다.",
      },
    ],
  },
  {
    id: 3,
    title: "기타",
    descriptions: [
      {
        id: 1,
        value:
          "개발자에게 보기 편한 코드를 선호하고 그렇게 작성하도록 노력합니다.",
      },
      {
        id: 2,
        value:
          "잘 모르는 분야더라도 정보를 검색하고 공부해서 좋은 결과를 만드려고 노력합니다. ",
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
          <List list={descriptions} />
        </Item>
      ))}
    </>
  );
};

export default Skills;
