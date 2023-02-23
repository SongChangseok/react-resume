import Article from "../article/Article";
import Container from "../container/Container";
import classes from "./Footer.module.css";

const DUMMY_CONTACT = [
  {
    id: 1,
    name: "이메일",
    url: "mailto:a1373052011@gmail.com",
    text: "a1373052011@gmail.com",
  },
  { id: 2, name: "연락처", url: "tel:010-6216-5075", text: "010-6216-5075" },
  {
    id: 3,
    name: "깃허브",
    url: "https://github.com/SongChangseok",
    text: "github.com/SongChangseok",
  },
  {
    id: 4,
    name: "노션",
    url: "https://cssong.notion.site/08b7a018aa2846febebe188c9eae1c92?v=a3230f6464f74a218adc906ed12b203a",
    text: "학습",
  },
  {
    id: 5,
    name: "인스타그램",
    url: "https://www.instagram.com/Changseok92",
    text: "@Changseok92",
  },
];

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <Article>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <span>
              <img
                style={{ borderRadius: "50%", display: "block" }}
                src="https://avatars.githubusercontent.com/u/31471148?v=4"
                width={140}
                height={140}
              />
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                paddingLeft: "1.4rem",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 600,
                  letterSpacing: 1.8,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    margin: "0 0.4rem 0 0.4rem",
                    fontWeight: "600",
                    color: "#605f5e",
                    fontSize: "1.2rem",
                  }}
                >
                  개발자
                </span>
                <span>송창석</span>
              </div>
              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  letterSpacing: 1.8,
                }}
              >
                <span>이메일 a1373052011@gmail.com</span>
              </div>
              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  letterSpacing: 1.8,
                }}
              >
                <span>연락처 010-6216-5075</span>
              </div>
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#605f5e",
                }}
              >
                <span>깃허브</span>
                <span
                  style={{
                    display: "inline-block",
                    margin: "0 0.4rem 0 0.4rem",
                    fontWeight: "400",
                    color: "#605f5e",
                    fontSize: "1rem",
                  }}
                >
                  /
                </span>
                <span>노션</span>
                <span
                  style={{
                    display: "inline-block",
                    margin: "0 0.4rem 0 0.4rem",
                    fontWeight: "400",
                    color: "#605f5e",
                    fontSize: "1rem",
                  }}
                >
                  /
                </span>
                <span>인스타그램</span>
              </div>
            </div>
          </div>
        </Article>
      </Container>
    </footer>
  );
};

export default Footer;
