import React from "react";
import "../css/Modal.css"; // Import your custom CSS for the modal

const Modal = ({ onClose, image, title, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content-wrapper">
          {/* Title and text content */}
          <div className="modal-text-content">
            <h2>{title}</h2>
            <div className="modal-body">{children}</div>
          </div>
          {/* Image on the right side */}
          {image && (
            <div className="modal-image-wrapper">
              <img src={image} alt={title} className="modal-image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
