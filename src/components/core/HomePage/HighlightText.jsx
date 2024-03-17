import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="text-yellow-25 text-transparent bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;
