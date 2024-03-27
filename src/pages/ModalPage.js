import {useState} from 'react';
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true)
    };

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (<div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>
    );

    const modal =(<Modal onClose={handleClose} actionBar={actionBar}>
        <p>Message message message</p>
        </Modal>
    );

    return(
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>texttextexttext texttext texttexttext texttextexttext texttext texttexttext texttextexttext texttext texttexttexttexttextexttext texttext texttexttexttexttextexttext texttext texttexttexttexttextexttext texttext texttexttexttexttextexttext texttext texttexttexttexttextexttext texttext texttexttext texttextexttext texttext texttexttexttexttextexttext texttext texttexttext</p>
            <p>texttextexttext texttext texttexttext texttextexttext texttext texttexttext texttextexttext texttext texttexttexttexttextexttext texttext texttexttexttexttextexttext texttext texttexttexttexttextexttext texttext texttexttexttexttextexttext texttext texttexttexttexttextexttext texttext texttexttext texttextexttext texttext texttexttexttexttextexttext texttext texttexttext</p>
        </div>

    )
}

export default ModalPage