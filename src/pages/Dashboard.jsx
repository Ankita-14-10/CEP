import { Link } from "react-router-dom";
import { careers } from "../data/careers";

function Dashboard() {

  const student =
    JSON.parse(
      localStorage.getItem("student")
    ) || {};

  const assessment =
    JSON.parse(
      localStorage.getItem(
        "assessmentAnswers"
      )
    ) || [];

  const recommendedCareer =
    careers.find(
      career =>
        career.category ===
        assessment[0]
    );

  return (

    <section className="page">

      <h1>
        👋 Student Dashboard
      </h1>

      {student.name ? (

        <>

          <div className="dashboard-profile">

            <h2>
              Welcome, {student.name}
            </h2>

            <p>
              {student.education}
              {" • "}
              {student.interest}
            </p>

          </div>


          <div className="dashboard-grid">

            <div className="dashboard-card">

              <span>🎯</span>

              <h3>
                Career
              </h3>

              <p>
                {recommendedCareer
                  ? recommendedCareer.name
                  : "Take assessment"}
              </p>

            </div>


            <div className="dashboard-card">

              <span>📚</span>

              <h3>
                Education
              </h3>

              <p>
                {student.education}
              </p>

            </div>


            <div className="dashboard-card">

              <span>💡</span>

              <h3>
                Interest
              </h3>

              <p>
                {student.interest}
              </p>

            </div>


            <div className="dashboard-card">

              <span>🚀</span>

              <h3>
                Next Step
              </h3>

              <p>
                Explore your roadmap
              </p>

            </div>

          </div>


          <div className="dashboard-actions">

            <Link
              to="/assessment"
              className="btn"
            >
              Retake Assessment
            </Link>

            <Link
              to="/scholarships"
              className="btn"
            >
              Find Scholarships
            </Link>

          </div>

        </>

      ) : (

        <div className="empty">

          <h2>
            Complete your profile first.
          </h2>

          <Link
            to="/"
            className="btn"
          >
            Create Profile
          </Link>

        </div>

      )}

    </section>
  );
}

export default Dashboard;