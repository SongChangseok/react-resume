import ContentList from "../../components/contentList/ContentList";
import Intro from "../../components/intro/Intro";
import Container from "../../layouts/container/Container";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <Container>
        <Intro />
        <ContentList />
      </Container>
    </main>
  );
};

export default Main;
