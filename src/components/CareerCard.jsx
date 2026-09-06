import { Link } from "react-router-dom";

function CareerCard({ career, score }) {

  return (
    <div className="career-card">

      <span className="category">
        {career.category}
      </span>

      <h3>
        {career.name}
      </h3>

      <p>
        {career.description}
      </p>

      {score !== undefined && (
        <div className="match-box">

          <div className="match-header">
            <span>Career Match</span>

            <strong>
              {score}%
            </strong>
          </div>

          <div className="match-bar">

            <div
              style={{
                width: `${score}%`
              }}
            />

          </div>

        </div>
      )}

      <div className="skills">

        {career.skills.slice(0, 4).map(
          (skill) => (
            <span key={skill}>
              {skill}
            </span>
          )
        )}

      </div>

      <Link
        to={`/careers/${career.id}`}
        className="btn"
      >
        Explore Career →
      </Link>

    </div>
  );
}

export default CareerCard;