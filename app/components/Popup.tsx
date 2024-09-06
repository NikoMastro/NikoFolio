import React, { useState } from 'react';
import Modal from 'react-modal';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true); // Set initial state to open

  const handleClose = () => setIsOpen(false);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Language and Website Preference"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Language Selection</h2>
      <ul>
        <li>English</li>
        <li>French</li>
        <li>Japanese</li>
      </ul>
      <h2>Website Preference</h2>
      <button>Animated Website</button>
      <button>Static Website</button>
    </Modal>
  );
};

export default Popup;
