import List from "../../../layouts/list/List";

const OtherDescription = ({ subject, descriptions }) => {
  return (
    <div>
      <h5>{subject}</h5>
      <List list={descriptions} />
    </div>
  );
};

export default OtherDescription;
