import React from "react";

interface ImageModalProps {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent click event from propagating to the background
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl"
        >
          &times;
        </button>
        <img src={imageUrl} alt="Full view" className="max-w-full max-h-screen image-modal-content" />
      </div>
    </div>
  );
};

export default ImageModal;
