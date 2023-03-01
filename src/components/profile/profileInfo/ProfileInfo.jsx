import classes from "./ProfileInfo.module.css";
import ProfileInfoRow from "./ProfileInfoRow";

const ProfileInfo = ({ name, contactList }) => {
  return (
    <div className={classes.profileInfo}>
      <ProfileInfoRow title="이름">{name}</ProfileInfoRow>
      {contactList.map(({ id, name, url, text }) => (
        <ProfileInfoRow key={id} title={name}>
          <a href={url} target="_blank" rel="noreferrer">
            {text}
          </a>
        </ProfileInfoRow>
      ))}
    </div>
  );
};

export default ProfileInfo;
