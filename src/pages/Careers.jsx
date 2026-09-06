import { careers } from "../data/careers";
import CareerCard from "../components/CareerCard";

function Careers() {

  const student =
    JSON.parse(
      localStorage.getItem("student")
    ) || {};

  const assessmentAnswers =
    JSON.parse(
      localStorage.getItem(
        "assessmentAnswers"
      )
    ) || [];

  const calculateScore = (career) => {

    let score = 0;

    if (
      career.interests.includes(
        student.interest
      )
    ) {
      score += 40;
    }

    if (
      career.subjects.includes(
        student.subject
      )
    ) {
      score += 25;
    }

    if (
      career.education.includes(
        student.education
      )
    ) {
      score += 15;
    }

    const assessmentMatches =
      assessmentAnswers.filter(
        answer =>
          answer === career.category
      ).length;

    score += assessmentMatches * 4;

    return Math.min(score, 100);
  };

  const results = careers
    .map(career => ({
      career,
      score: calculateScore(career)
    }))
    .sort(
      (a, b) =>
        b.score - a.score
    );

  return (

    <section className="page">

      <h1>
        Recommended Careers
      </h1>

      <p className="page-description">

        {student.name
          ? `Hello ${student.name}! Here are careers that may suit you.`
          : "Explore careers based on your interests and skills."}

      </p>

      <div className="career-grid">

        {results.map(
          ({ career, score }) => (

            <CareerCard
              key={career.id}
              career={career}
              score={score}
            />

          )
        )}

      </div>

    </section>
  );
}

export default Careers;