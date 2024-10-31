"use client";

const ThankYouModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p>Your order has been successfully placed. We will contact you shortly.</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;
