import React from "react";

type Props = {
  question: string;
  answer: string;
};
const FAQ: React.FC<Props> = ({ question, answer }) => {
  return (
    <span
      style={{
        borderRadius: "6px",
        backgroundColor: "lightgray",
        padding: "2px 5px",
        fontSize: "12px"
      }}
    >
      {children}
    </span>
  );
};

export default FAQ;
