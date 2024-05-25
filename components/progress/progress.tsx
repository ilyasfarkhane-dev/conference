"use client";

import React, { useEffect, useState } from "react";

interface ProgressBarProps {
  targetProgress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ targetProgress }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < targetProgress) {
      const timer = setTimeout(() => setProgress(progress + 1), 20);
      return () => clearTimeout(timer);
    }
  }, [progress, targetProgress]);

  return (
    <div className="w-100 bg-light rounded overflow-hidden">
      <div
        className="bg-success h-100 text-center text-white transition-width duration-500 ease-in-out px-2"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
