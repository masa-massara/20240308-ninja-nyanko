import { FC,useState } from "react"
type Props = {
    position: string
}
const CheckModal:FC<Props> = ({position}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    let modal;
    if (isModalOpen) {
        modal = (
            <div className='modal'>
                <p>{position}のマニュアルを作成しますか</p>
                <button 
                  className='modal-close-btn'
                  onClick={() => {handleCloseModal()}}
                >
                    いいえ
                </button>
                <button>
                    はい
                </button>
            </div>
        );
    }
    return (
        <div className='modal'>
            <div
                className='modal-open-btn'
                onClick={() => {handleOpenModal()}}
            >
                開く
            </div>
            {modal}
        </div>
    )
}

export default CheckModal
