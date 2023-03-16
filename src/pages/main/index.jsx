import ContentList from "../../components/contentList/ContentList";
import Intro from "../../components/intro/Intro";
import Container from "../../layouts/container/Container";
import classes from "./Main.module.css";

const DUMMY_INTRO =
  "도시가스 업무 시스템을 구축하는 기업에서 4년 7개월 동안 일했습니다. 프로젝트를 진행하면서 클라이언트와 서버 구분없이 다루었습니다. 평소에 개발자가 보기 편한 코드를 선호하여, 클린코드에 관심이 있습니다. 그리고 모르는 것이나 궁금한 것이 있으면 위치에 상관없이 배우려는 자세로 질문하고 공부하려고 합니다.";

const Main = () => {
  return (
    <main className={classes.main}>
      <Container>
        <Intro intro={DUMMY_INTRO} />
        <ContentList />
      </Container>
    </main>
  );
};

export default Main;
