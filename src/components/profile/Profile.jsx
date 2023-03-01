import classes from "./Profile.module.css";
import Article from "../../layouts/article/Article";
import Container from "../../layouts/container/Container";
import ProfileImage from "./profileImage/ProfileImage";
import ProfileInfo from "./profileInfo/ProfileInfo";

const DUMMY_CONTACT = {
  name: "송창석",
  image: "https://avatars.githubusercontent.com/u/31471148?v=4",
  contactList: [
    {
      id: 1,
      name: "이메일",
      url: "mailto:a1373052011@gmail.com",
      text: "a1373052011@gmail.com",
    },
    {
      id: 2,
      name: "연락처",
      url: "tel:010-6216-5075",
      text: "010-6216-5075",
    },
    {
      id: 3,
      name: "깃허브",
      url: "https://github.com/SongChangseok",
      text: "SongChangseok",
    },
    {
      id: 4,
      name: "노션",
      url: "https://cssong.notion.site/08b7a018aa2846febebe188c9eae1c92?v=a3230f6464f74a218adc906ed12b203a",
      text: "학습",
    },
    {
      id: 5,
      name: "인스타",
      url: "https://www.instagram.com/Changseok92",
      text: "@Changseok92",
    },
  ],
};

const Profile = () => {
  const { name, email, tel, image, contactList } = DUMMY_CONTACT;
  return (
    <Container>
      <Article>
        <div className={classes.profile}>
          <ProfileImage src={image} />
          <ProfileInfo
            name={name}
            email={email}
            tel={tel}
            contactList={contactList}
          />
        </div>
      </Article>
    </Container>
  );
};

export default Profile;
