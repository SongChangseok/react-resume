import classes from "./ProfileImage.module.css";

const ProfileImage = ({ src }) => {
  return (
    <div className={classes["profile-image"]}>
      <img src={src} />
    </div>
  );
};

export default ProfileImage;
