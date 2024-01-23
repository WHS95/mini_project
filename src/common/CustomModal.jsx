import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Adjust according to your app's root element

const CustomModal = ({ isOpen, onRequestClose, errorMessage}) => {
  console.log('errorMessage: ', errorMessage);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 z-50 overflow-y-auto"
      overlayClassName="fixed inset-0 bg-gray-700 bg-opacity-75"
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-gray-800 text-white p-5 rounded-lg max-w-sm mx-auto my-10 flex flex-col justify-between">
          {/* <h2 className="text-xl text-center"></h2> */}
          <p className="text-center my-4">{errorMessage}</p>
          <button 
            onClick={onRequestClose} 
            className="py-2 px-4 bg-green-500 rounded hover:bg-gray-1000 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-30">
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;