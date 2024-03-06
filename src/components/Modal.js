// Modal.js
import React from "react";
import FeedbackForm from "./FeedbackForm";
import { useDispatch, useSelector } from "react-redux";
import { submitFeedback } from "../redux/actions/actions";

const Modal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const handleFeedbackSubmit = (feedbackData) => {
    dispatch(submitFeedback(feedbackData));
  };
  return (
    <div className={`modal ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <FeedbackForm onSubmit={handleFeedbackSubmit} />
      </div>
    </div>
  );
};

export default Modal;
