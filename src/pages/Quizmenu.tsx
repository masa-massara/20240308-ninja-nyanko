import CreateQuiz from "../components/staff/CreateQuiz";
const Quizmenu = () => {
      const stage = [
        "店長",
        "ホールスタッフ",
        "キッチンスタッフ",
        "サービススタッフ",
        "その他",
      ];
      return(
      <div className='vertical-middle'>
        <div className='add_manual'>
          <CreateQuiz stage={stage} />
          
        </div>
      </div>
      );
      // aaaa
};

export default Quizmenu;
