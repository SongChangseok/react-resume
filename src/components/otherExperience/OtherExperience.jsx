import Period from "../period/Period";
import OtherTitle from "./OtherTitle";
import OtherDescription from "./otherDescriptions/OtherDescriptions";
import Item from "../../layouts/item/Item";

const DUMMY_OTHER = [
  {
    id: 1,
    title: "프론트엔드 원티드 프리온보딩 코스",
    period: { from: "202209", to: "202210" },
    subject:
      "5주간 프론트엔드에게 필요한 기술 학습 및 팀 프로젝트를 통한 동료 학습",
    descriptions: [
      {
        id: 1,
        value:
          "git 컨벤션, redux, redux-saga, 비동기, tdd 등의 프론트엔드에게 필요한 React 기반의 기술 학습",
      },
      {
        id: 2,
        value: "팀 프로젝트로 3일에 하나의 참가기업 과제를 진행",
      },
      {
        id: 3,
        value: "프로젝트 진행하며 동료 간 피드백",
      },
    ],
  },
  {
    id: 2,
    title: "호서대학교",
    period: { from: "201203", to: "201802" },
    subject: "컴퓨터공학과",
    descriptions: [
      {
        id: 1,
        value:
          "C, C++, Java, 데이터베이스, 알고리즘, 데이터 구조, 객체지향, 임베디드 등 이수",
      },
      { id: 2, value: "C언어 학습 동아리 활동" },
    ],
  },
];

const OtherExperience = () => {
  return (
    <>
      {DUMMY_OTHER.map(({ id, title, period, subject, descriptions }) => (
        <Item key={id}>
          <OtherTitle title={title} period={period} />
          <OtherDescription subject={subject} descriptions={descriptions} />
        </Item>
      ))}
    </>
  );
};

export default OtherExperience;
