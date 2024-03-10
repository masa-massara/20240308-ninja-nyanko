import CreateMenu from "../components/company/CreateMenu";
const SelectPosition = () => {
  return (
    <div>
      <CreateMenu
        index={2}
        works="ポジション"
        link="/works/position/addposition"
      />
    </div>
  );
};

export default SelectPosition;
