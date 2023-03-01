import classes from "./ProfileInfoRow.module.css";

const ProfileInfoRow = ({ children, title }) => {
  return (
    <div className={classes.profileInfoRow}>
      <span className={classes.profileInfoLeft}>{title}</span>
      <span className={classes.profileInfoRight}>{children}</span>
    </div>
  );
};

export default ProfileInfoRow;
