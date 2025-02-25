import { motion } from "framer-motion";
import { useState } from "react";

const ApplyButton = () => {
  const [applied, setApplied] = useState(false);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setApplied(true)}
      className={`mt-3 px-4 py-2 rounded transition-all ${
        applied ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
      } text-white`}
      disabled={applied}
    >
      {applied ? "Applied" : "Apply Now"}
    </motion.button>
  );
};

export default ApplyButton;