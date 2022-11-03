import Modal from '@mui/material/Modal';
import './modal.scss';


const Modals = ({modalOpen,children}) => {
  return (
      <Modal
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
     {children}
      </Modal>
  );
}
export default Modals