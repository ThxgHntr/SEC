import React from "react";
import Modal from "react-modal";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfSrc: string;
}

const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose, pdfSrc }) => {
  const modalStyle = {
    content: {
      top: "15%",
      right: "10%",
      left: "10%",
      padding: "0",
      margin: "0",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyle}>
      <iframe
        title="PDF Viewer"
        src={pdfSrc}
        width="100%"
        height="100%"
      />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default PdfModal;
