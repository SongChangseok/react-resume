import { Outlet } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>{/* <h1>header</h1> */}</header>
      <Outlet />
    </>
  );
};

export default Header;
