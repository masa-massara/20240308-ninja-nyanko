import { FC,useState } from "react"

type Props = {
    title : string,
    description : string,
    //img : string         <img src={img} alt={title} />
}

const DetailManual:FC<Props> = ({title,description}) => {
const [isModalOpen, setIsModalOpen] = useState(false);

const handleCloseModal = () => {
    setIsModalOpen(false);
}

const handleOpenModal = () => {
    setIsModalOpen(true);
}

let modal;
if (isModalOpen) {
    modal = (
        <div className='modal'>
            <h1>{title}</h1>
        <p>{description}</p>

        <button 
          className='modal-close-btn'
          onClick={() => {handleCloseModal()}}
        >
            完了
        </button>
        </div>
    );
    }
  return (
    <div>
        <div
            className='modal-open-btn'
            onClick={() => {handleOpenModal()}}
        >
            マニュアルを開く
        </div>
        {modal}
    </div>
  )
}

export default DetailManual
