import { motion } from "framer-motion";

const MatchIndicator = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
      <motion.div
        className="bg-green-500 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default MatchIndicator;
