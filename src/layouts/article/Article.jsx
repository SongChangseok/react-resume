import classes from "./Article.module.css";

const Article = ({ children }) => (
  <article className={classes.article}>{children}</article>
);

export default Article;
