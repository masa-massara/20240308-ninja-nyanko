import CreateMenu from "../components/company/CreateMenu";
const SelectPosition = () => {
  const position = [
    "店長",
    "ホールスタッフ",
    "キッチンスタッフ",
    "サービススタッフ",
    "その他",
  ];
  return (
    <div>
      <CreateMenu
        index={2}
        works="ポジション"
        worksname={position}
        link="/works/position/addposition"
      />
    </div>
  );
};

export default SelectPosition;
