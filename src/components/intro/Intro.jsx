import Article from "../../layouts/article/Article";
import classes from "./Intro.module.css";

const Intro = ({ intro }) => {
  return (
    <Article>
      <section className={classes.intro}>
        <h1>
          안녕하세요.
          <br />
          개발자 송창석입니다.
        </h1>
        <p>{intro}</p>
      </section>
    </Article>
  );
};

export default Intro;
