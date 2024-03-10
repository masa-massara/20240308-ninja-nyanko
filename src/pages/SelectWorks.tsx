import CreateMenu from "../components/company/CreateMenu";

const SelectWorks = () => {
  const industry = ["飲食店", "サービス業", "小売業", "製造業", "IT業"];
  return (
    <div>
      <CreateMenu
        index={1}
        works="業種"
        worksname={industry}
        link="/works/position/"
      />
    </div>
  );
};

export default SelectWorks;
