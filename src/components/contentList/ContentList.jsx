import Article from "../../layouts/article/Article";
import OtherExperience from "../otherExperience/OtherExperience";
import WorkExperience from "../workExperience/WorkExperience";
import Content from "./Content";

const ContentList = () => {
  return (
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
      </Content>
    </Article>
  );
};

export default ContentList;
