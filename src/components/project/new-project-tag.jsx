import React from "react";

const ProjectTag = ({ name, total, isSelected, onClick}) => {
  const buttonStyles = isSelected
    ? `text-black border-gray-800 dark:text-white dark:border-white` 
    : `text-gray-500 border-gray-400 hover:border-gray-800 hover:text-gray-600 dark:hover:text-gray-300 dark:hover:border-white`;
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 text-xs sm:text-lg px-2 py-1 sm:px-2 sm:py-1 cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name} ({total})
    </button>
  );
};

export default ProjectTag;