import Profile from "../../components/profile/Profile";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Profile />
    </header>
  );
};

export default Header;
