import { motion, AnimatePresence } from "framer-motion";

const AlertBox = ({
  message,
  isVisible,
  onClose,
}: {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-end fixed top-10 right-10 bg-teal-500 text-white p-6 rounded-lg shadow-lg"
        >
          <p>{message}</p>
          <button
            onClick={onClose}
            className="w-[50%] mt-4 bg-white text-black p-2 rounded-full"
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertBox;
