import { useState } from "react";
import ApplyButton from "./ApplyButton";
import MatchIndicator from "./MatchIndicator";
import { motion } from "framer-motion";

const JobCard = ({ job, onSave, onRemove, isSaved }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 shadow-lg p-5 rounded-lg transition-all"
    >
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h2>
      <p className="text-gray-500 dark:text-gray-400">{job.company} - {job.location}</p>
      <MatchIndicator percentage={job.matchPercentage} />
      <div className="flex justify-between items-center mt-3">
        <ApplyButton />
        {isSaved ? (
          <button
            onClick={() => onRemove(job.id)}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => onSave(job)}
            className="px-3 py-1 border border-yellow-500 text-yellow-500 rounded"
          >
            Save Job
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default JobCard;