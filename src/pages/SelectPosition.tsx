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
        contents="店名を入力"
        index={2}
        works="ポジション"
        worksname={position}
      />
    </div>
  );
};

export default SelectPosition;