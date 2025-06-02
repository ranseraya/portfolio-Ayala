import React from "react";

const NewTag = ({ name, total, isSelected, onClick, rounded, fontSize }) => {
  if (fontSize == "medium") {
    fontSize = ["xs", "base"];
  } else if (fontSize == "small") {
    fontSize = ["xs", "sm"];
  } else {
    fontSize = ["xs", "xs"];
  }
  rounded = rounded == "full" ? "full" : "lg";
  const buttonStyles = isSelected
    ? `bg-primary text-primary-foreground border-primary`
    : `bg-card text-foreground border-border hover:bg-secondary hover:text-secondary-foreground hover:border-secondary`;

  return (
    <button
      className={`${buttonStyles} rounded-${rounded} border-2 text-${fontSize[0]} xl:text-${fontSize[1]} px-2 sm:px-4 py-1 sm:py-2 cursor-pointer transition-colors duration-200`}
      onClick={() => onClick(name)}
    >
      {name} <span className="hidden sm:inline">{total ? `(${total})` : ""}</span>
    </button>
  );
};

export default NewTag;
