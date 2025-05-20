import React from "react";

const NewTag = ({ name, total, isSelected, onClick, rounded, fontSize}) => {
  if(fontSize == 'medium'){
    fontSize = ['xs', 'lg'];
  } else if (fontSize == 'small'){
    fontSize = ['xs', 'sm'];
  } else {
    fontSize = ['xs', 'xs']
  }
  rounded == 'full' ? (rounded = 'full'): (rounded = 'lg');
  const buttonStyles = isSelected
    ? `text-black border-gray-800 dark:text-white dark:border-white` 
    : `text-gray-500 border-gray-400 hover:border-gray-800 hover:text-gray-600 dark:hover:text-gray-300 dark:hover:border-white`;
  return (
    <button
      className={`${buttonStyles} rounded-${rounded} border-2 text-${fontSize[0]} sm:text-${fontSize[1]} px-2 py-1 sm:px-2 sm:py-1 cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name} { total ? `(${total})` : ''}
    </button>
  );
};

export default NewTag;