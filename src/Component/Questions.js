import React from "react";
import "../Component/Styles.css";
import FaqSection from "./FaqSection";

function Questions() {
  const questions = [
    {
      id: 1,
      title: "Is this a good product?",
      info: "Yes, it is a very good product, you can use it easily",
    },
    {
      id: 2,
      title: "How much does it cost?",
      info: "Its very cheap, its about $5.",
    },
    {
      id: 3,
      title: "When can I get it?",
      info: "After one month",
    },
  ];
  return (
    <div className="container">
      <h1>FAQ Questions</h1>
      <div className="questionSection">
        {questions.map((item) => (
          <FaqSection key={item.id} questions={item} />
        ))}
      </div>
    </div>
  );
}

export default Questions;
