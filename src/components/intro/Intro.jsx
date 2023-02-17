import Article from "../../layouts/article/Article";
import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <Article>
      <section className={classes.intro}>
        <h1>
          안녕하세요.
          <br />
          개발자 송창석입니다.
        </h1>
        <p>
          도시가스 업무 시스템을 구축하는 기업에서 4년 7개월 동안 일했습니다.
          프로젝트를 진행하면서 클라이언트와 서버 구분없이 다루었으며 React를
          학습하면서 프론트엔드에 대한 흥미가 생겨 관련하여 학습을 하고
          있습니다. 그리고 개발자가 보기 쉽고 깔끔한 코드를 선호하여 코드 구조를
          개선하고 리팩터링하려고 노력합니다.
        </p>
      </section>
    </Article>
  );
};

export default Intro;
