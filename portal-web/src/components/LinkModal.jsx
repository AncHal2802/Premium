import React from 'react';
import Modal from 'react-modal';

const LinkModal = ({ isOpen, closeModal, linkContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Link Modal"
    >
      <div>{linkContent}</div>
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
  );
};

export default LinkModal;
