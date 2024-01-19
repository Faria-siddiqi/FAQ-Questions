import React, { useState } from "react";
import "../Component/Styles.css";

function FaqSection({ questions }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="question">
      <div>
        <h4>{questions.title}</h4>
        <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
      </div>
      <span>{isOpen && <p>{questions.info}</p>}</span>
    </section>
  );
}

export default FaqSection;
