import React from "react";

class Modal extends React.Component<{}, { isModalOpen: boolean }>{
    constructor(props: {}) {
        super(props);
        this.state = {
        isModalOpen: false
        };
    }

    handleOpenModal() {
        this.setState({ isModalOpen: true });
    }

    handleCloseModal(){
        this.setState({isModalOpen:false});
      }

    render() {
        let modal;
        if (this.state.isModalOpen) {
            modal = (
                <div className='modal'>
                    <button 
                      className='modal-close-btn'
                      onClick={() => { this.handleCloseModal() }}
                    >
                        とじる
                    </button>
                </div>
            );
        }
        return (
            <div className='modal'>
                <div
                    className='modal-open-btn'
                    onClick={() => { this.handleOpenModal() }}
                >
                    開く
                </div>
                {modal}
            </div>
        );
    }
}

export default Modal;
