import CreateQuiz from "../components/staff/CreateQuiz";

const SelectQuiz = () => {
  const position = [
    "店長",
    "ホールスタッフ",
    "キッチンスタッフ",
    "サービススタッフ",
    "その他",
  ];
  return (
    <div>
      <CreateQuiz stage={position} />
    </div>
  );
};

export default SelectQuiz;
