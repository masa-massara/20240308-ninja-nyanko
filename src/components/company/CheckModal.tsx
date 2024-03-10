import { FC, useState } from "react";
// ]]import { useNavigate } from "react-router-dom";
type Props = {
  contents: string;
  handleCloseModal:() => void;
};
const CheckModal: FC<Props> = ({ contents,handleCloseModal }) => {

  // // const navigate = useNavigate();  const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };
  
  let modal;

    modal = (
      <div className="background_black">
        <div className="background_popup">
          <p>{contents}</p>
          <div className="display_yesno">
            <div className="div_yesno_button">
              <button
                className="button_no"
                onClick={handleCloseModal}
              >
                いいえ
              </button>
            </div>
            <div className="div_yesno_button">
              <button className="button_yes">はい</button>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div>
      {/* <div
        className="modal-open-btn"
        onClick={() => {
          handleOpenModal();
        }}
      >
        開く
      </div> */}
      {modal}
    </div>
  );
};

export default CheckModal;
