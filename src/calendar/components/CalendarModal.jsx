
import { useState } from 'react';
import Modal from 'react-modal';




const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true)

    const onCloseModal = () => {
        console.log('onCloseModal')
    }
  
    return (
        <Modal
            isOpen={isOpen}
             
            onRequestClose={onCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
            className='modal'
            closeTimeoutMS={200}
        >
            <h1> Hello world</h1>
            <p>Anim dolor eu commodo excepteur ea ullamco.</p>
        </Modal>
    )
}
