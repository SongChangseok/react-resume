import classes from "./Period.module.css";

const hyphenFormmat = (yyyymm) =>
  yyyymm.substring(0, 4) + "-" + yyyymm.substring(4, 6);
const commaFormmat = (yyyymm) =>
  yyyymm.substring(0, 4) + "." + yyyymm.substring(4, 6);

const Period = ({ from, to }) => {
  const fromHyphen = hyphenFormmat(from);
  const toHyphen = hyphenFormmat(to);
  const fromComma = commaFormmat(from);
  const toComma = commaFormmat(to);

  return (
    <span className={classes.period}>
      <time dateTime={fromHyphen}>{fromComma}</time>
      {" - "}
      <time dateTime={toHyphen}>{toComma}</time>
    </span>
  );
};

export default Period;
