import { useState } from "react";
import JobCard from "./JobCard";
import jobs from "../data/jobs";

const JobList = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  const handleSaveJob = (job) => {
    setSavedJobs((prev) => [...prev, job]);
  };

  const handleRemoveJob = (jobId) => {
    setSavedJobs((prev) => prev.filter(job => job.id !== jobId));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Saved Jobs: {savedJobs.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onSave={handleSaveJob}
            onRemove={handleRemoveJob}
            isSaved={savedJobs.some(savedJob => savedJob.id === job.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;