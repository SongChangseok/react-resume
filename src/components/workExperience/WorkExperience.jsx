import FlexItem from "../../layouts/flexItem/FlexItem";
import Company from "./company/Company";
import Projects from "./projects/Projects";

const DUMMY_WORK = [
  {
    id: 1,
    company: {
      name: "모바일엔트로피(주)",
      period: {
        from: "201802",
        to: "202209",
      },
      position: "개발팀/대리",
    },
    projects: [
      {
        id: 1,
        title: "React 기반 사내 관리시스템",
        period: { from: "202208", to: "202209" },
        descriptions: [
          {
            id: 1,
            value: "기존에 jquery로 만들어진 사내 관리시스템을 react로 변환",
          },
          {
            id: 2,
            value:
              "앞으로 jquery가 아닌 react로 프로젝트를 진행하기 위해 팀 내에서 주도하여 작업",
          },
        ],
        skills: ["javascript", "react", "mui"],
      },
      {
        id: 2,
        title: "도시가스 고객업무 시스템",
        period: { from: "202012", to: "202205" },
        descriptions: [
          { id: 1, value: "도시가스의 고객 민원을 처리하기 위한 웹 개발" },
          {
            id: 2,
            value:
              "각 업무 페이지부터 프로젝트 진행에 필요한 공통 함수, pg사 결제API 연동, 인증시스템 작업",
          },
          {
            id: 3,
            value: (
              <a href="https://dstalk.daesungenergy.com/" target="_blank">
                대성에너지 모바일 웹 (2022.01 - 2022.05)
              </a>
            ),
          },
          {
            id: 4,
            value: (
              <a href="https://www.lsyesco.com/" target="_blank">
                예스코 웹 (2021.09 - 2021.12)
              </a>
            ),
          },
          {
            id: 5,
            value: (
              <a href="https://ytalk.lsyesco.com/" target="_blank">
                예스코 모바일 웹(2020.12 - 2021.05)
              </a>
            ),
          },
        ],
        skills: ["javascript", "jquery", "springBoot"],
      },
      {
        id: 3,
        title: "도시가스 통합시설물 시스템",
        period: { from: "201907", to: "202201" },
        descriptions: [
          { id: 1, value: "도시가스의 시설물 관리를 위한 웹 개발" },
          {
            id: 2,
            value:
              "각 시설물들에 대한 CRUD 화면 작성 및 공통 UI 렌더링 함수 작업",
          },
          {
            id: 3,
            value: "시설물 조회 및 배관 등급 평가에 필요한 PL/SQL 작성",
          },
          { id: 4, value: "미래엔서해에너지 (2021.09 - 2022.01)" },
          { id: 5, value: "참빛도시가스 (2019.07 - 2020.06)" },
        ],
        skills: ["javascript", "jquery", "springBoot", "oracle"],
      },
      {
        id: 4,
        title: "도시가스 현장업무 시스템",
        period: { from: "201802", to: "202209" },
        descriptions: [
          { id: 1, value: "도시가스의 현장 업무를 위한 하이브리드 앱 개발" },
          { id: 2, value: "검침, 교체, 점검, 체납 등의 각 단위 페이지 작성" },
          { id: 3, value: "지도 API 연동, 바코드 스캐너 및 카메라 호출" },
          { id: 4, value: "산청LPGas 신규 개발 (2021.06 - 2021.08)" },
          {
            id: 5,
            value: "삼천리도시가스 안전점검 업무 개선 (2020.09 - 2020.12)",
          },
          { id: 6, value: "삼천리도시가스 유지보수 (2019.04 - 2019.06)" },
          { id: 7, value: "귀뚜라미에너지 개발 (2018.11 - 2019.03)" },
          { id: 8, value: "대성에너지 유지보수 (2019.02 - 2019.03)" },
          { id: 9, value: "참빛도시가스 개발 (2018.03 - 2018.09)" },
        ],
        skills: ["javascript", "jquery", "springBoot", "oracle"],
      },
    ],
  },
];

const WorkExperience = () => {
  return DUMMY_WORK.map(({ id, company, projects }) => (
    <FlexItem key={id}>
      <Company
        name={company.name}
        period={company.period}
        position={company.position}
      />
      <Projects projects={projects} />
    </FlexItem>
  ));
};

export default WorkExperience;
