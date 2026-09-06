import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What activity do you enjoy most?",
    options: [
      ["Working with computers", "Technology"],
      ["Helping people", "Healthcare"],
      ["Creating designs", "Design"],
      ["Managing money", "Business"]
    ]
  },

  {
    question: "Which subject do you enjoy most?",
    options: [
      ["Mathematics", "Technology"],
      ["Biology", "Healthcare"],
      ["Arts", "Design"],
      ["Commerce", "Business"]
    ]
  },

  {
    question: "Which type of work sounds interesting?",
    options: [
      ["Building websites or apps", "Technology"],
      ["Working in hospitals", "Healthcare"],
      ["Creating visual content", "Design"],
      ["Running a business", "Business"]
    ]
  },

  {
    question: "Which skill would you like to develop?",
    options: [
      ["Programming", "Technology"],
      ["Patient care", "Healthcare"],
      ["Design", "Design"],
      ["Accounting", "Business"]
    ]
  },

  {
    question: "Which environment would you prefer?",
    options: [
      ["Technology company", "Technology"],
      ["Hospital", "Healthcare"],
      ["Design studio", "Design"],
      ["Office or business", "Business"]
    ]
  }
];

function Assessment() {

  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState([]);

  const answerQuestion = (category) => {

    const updated = [
      ...answers,
      category
    ];

    if (current < questions.length - 1) {

      setAnswers(updated);
      setCurrent(current + 1);

    } else {

      localStorage.setItem(
        "assessmentAnswers",
        JSON.stringify(updated)
      );

      navigate("/careers");

    }
  };

  const question = questions[current];

  return (

    <section className="assessment-page">

      <h1>
        🎯 Career Assessment
      </h1>

      <p>
        Question {current + 1} of {questions.length}
      </p>

      <div className="assessment-card">

        <h2>
          {question.question}
        </h2>

        {question.options.map(
          ([text, category]) => (

            <button
              key={text}
              className="answer-button"
              onClick={() =>
                answerQuestion(category)
              }
            >
              {text}
            </button>

          )
        )}

      </div>

    </section>
  );
}

export default Assessment;