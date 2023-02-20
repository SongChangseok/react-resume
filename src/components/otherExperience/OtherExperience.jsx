import Period from "../period/Period";
import OtherItem from "./otheritem/OtherItem";

const OtherExperience = () => {
  return (
    <>
      <OtherItem>
        <div>
          <h3>프론트엔드 원티드 프리온보딩 코스</h3>
          <Period from="2022.09" to="2022.10" />
        </div>

        <div>
          <p>
            5주간 프론트엔드에게 필요한 기술 학습 및 팀 프로젝트를 통한 동료
            학습
          </p>
          <ul>
            <li>
              git 컨벤션, redux, redux-saga, 비동기, tdd 등의 프론트엔드에게
              필요한 React 기반의 기술 학습
            </li>
            <li>팀 프로젝트로 3일에 하나의 참가기업 과제를 진행</li>
            <li>프로젝트마다 동료 간 피드백</li>
          </ul>
        </div>
      </OtherItem>
      <OtherItem>
        <h3>호서대학교</h3>
        <Period from="2012.03" to="2018.02" />
        <p>컴퓨터공학과</p>
        <ul>
          <li>
            C, C++, Java, 데이터베이스, 알고리즘, 데이터 구조, 객체지향,
            임베디드 등 이수
          </li>
          <li>C언어 학습 동아리 활동</li>
        </ul>
      </OtherItem>
    </>
  );
};

export default OtherExperience;
