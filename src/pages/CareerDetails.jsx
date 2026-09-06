import { useParams } from "react-router-dom";
import { careers } from "../data/careers";
import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";

function CareerDetails() {

  const { id } = useParams();

  const career =
    careers.find(
      c => c.id === Number(id)
    );

  const [completed, setCompleted] =
    useState([]);

  useEffect(() => {

    const saved =
      JSON.parse(
        localStorage.getItem(
          `progress_${id}`
        )
      ) || [];

    setCompleted(saved);

  }, [id]);

  const toggleStep = (index) => {

    const updated = [...completed];

    updated[index] =
      !updated[index];

    setCompleted(updated);

    localStorage.setItem(
      `progress_${id}`,
      JSON.stringify(updated)
    );

  };

  if (!career) {

    return (
      <div className="page">
        <h2>Career not found</h2>
      </div>
    );

  }

  const completedCount =
    completed.filter(Boolean).length;

  const progress =
    Math.round(
      (completedCount /
        career.roadmap.length) *
        100
    );

  return (

    <section className="page">

      <div className="career-detail">

        <span className="category">
          {career.category}
        </span>

        <h1>
          {career.name}
        </h1>

        <p>
          {career.description}
        </p>


        <div className="detail-grid">

          <div>

            <h3>🎓 Education</h3>

            <ul>
              {career.education.map(item =>
                <li key={item}>
                  {item}
                </li>
              )}
            </ul>

          </div>


          <div>

            <h3>📚 Courses</h3>

            <ul>
              {career.courses.map(item =>
                <li key={item}>
                  {item}
                </li>
              )}
            </ul>

          </div>


          <div>

            <h3>🛠 Skills</h3>

            <ul>
              {career.skills.map(item =>
                <li key={item}>
                  {item}
                </li>
              )}
            </ul>

          </div>


          <div>

            <h3>💰 Cost</h3>

            <strong>
              {career.cost}
            </strong>

            <p>
              Explore scholarships and
              low-cost learning options.
            </p>

          </div>

        </div>


        <div className="roadmap">

          <h2>
            🚀 Career Roadmap
          </h2>

          {career.roadmap.map(
            (step, index) => (

              <div
                key={step}
                className={
                  completed[index]
                    ? "roadmap-step completed"
                    : "roadmap-step"
                }
                onClick={() =>
                  toggleStep(index)
                }
              >

                <span className="step-number">

                  {completed[index]
                    ? "✓"
                    : index + 1}

                </span>

                <span>
                  {step}
                </span>

              </div>

            )
          )}


          <ProgressBar
            progress={progress}
          />

        </div>

      </div>

    </section>
  );
}

export default CareerDetails;