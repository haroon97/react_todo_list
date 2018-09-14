import React from 'react';
import Modal from 'react-modal';

class CompletedModal extends React.Component {
  render() {
    return (
      <Modal
      isOpen={false}
      contentLabel='Completed Tasks'
      >
      <h3>The Tasks you have completed are:</h3>

      <button>Okay</button>
      </Modal>
    );
  }
}

export default CompletedModal;