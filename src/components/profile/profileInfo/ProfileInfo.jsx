import classes from "./ProfileInfo.module.css";
import ProfileInfoRow from "./ProfileInfoRow";

const ProfileInfo = ({ name, email, tel, contactList }) => {
  return (
    <div className={classes.profileInfo}>
      <ProfileInfoRow title="이름">{name}</ProfileInfoRow>
      <ProfileInfoRow title="이메일">
        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
          {email}
        </a>
      </ProfileInfoRow>
      <ProfileInfoRow title="연락처">
        <a href={`tel:${tel}`} target="_blank" rel="noreferrer">
          {tel}
        </a>
      </ProfileInfoRow>
      <ProfileInfoRow>
        {contactList.map(({ id, name, url }) => (
          <span key={id}>
            <a href={url} target="_blank" rel="noreferrer">
              {name}
            </a>
          </span>
        ))}
      </ProfileInfoRow>
    </div>
  );
};

export default ProfileInfo;
