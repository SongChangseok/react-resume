import Article from "../../layouts/article/Article";
import OtherExperience from "../otherExperience/OtherExperience";
import Skills from "../skills/Skills";
import WorkExperience from "../workExperience/WorkExperience";
import Content from "./Content";

const ContentList = () => (
  <Article>
    <Content>
      <h2>업무 경력</h2>
      <WorkExperience />
    </Content>
    <Content>
      <h2>기타 경력</h2>
      <OtherExperience />
    </Content>
    <Content>
      <h2>기술 스택</h2>
      <Skills />
    </Content>
  </Article>
);

export default ContentList;
