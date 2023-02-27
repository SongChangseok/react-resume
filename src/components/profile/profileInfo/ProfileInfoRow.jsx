import classes from "./ProfileInfoRow.module.css";

const ProfileInfoRow = ({ title, children }) => {
  return (
    <div className={classes.profileInfoRow}>
      {title && <span className={classes.profileInfoHead}>{title}</span>}
      <span>{children}</span>
    </div>
  );
};
export default ProfileInfoRow;
