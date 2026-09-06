import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    education: "",
    interest: "",
    subject: ""
  });

  const handleChange = (e) => {

    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });

  };

  const submitProfile = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "student",
      JSON.stringify(student)
    );

    navigate("/careers");

  };

  return (

    <div>

      <section className="hero-section">

        <div className="hero-content">

          <span className="badge">
            🎓 Free Career Guidance
          </span>

          <h1>
            MyCareer Guide
          </h1>

          <p>
            Discover the right career, courses,
            scholarships and skills for your future.
          </p>

          <button
            className="hero-button"
            onClick={() => navigate("/assessment")}
          >
            Take Career Assessment 🚀
          </button>

        </div>

      </section>


      <section className="profile-section">

        <h2>
          Find Your Career
        </h2>

        <p>
          Tell us about yourself and we'll recommend
          suitable career options.
        </p>

        <form
          className="profile-form"
          onSubmit={submitProfile}
        >

          <input
            name="name"
            placeholder="Your Name"
            value={student.name}
            onChange={handleChange}
            required
          />

          <select
            name="education"
            value={student.education}
            onChange={handleChange}
            required
          >

            <option value="">
              Education Level
            </option>

            <option>
              10th Pass
            </option>

            <option>
              12th Pass
            </option>

            <option>
              Diploma
            </option>

            <option>
              Graduate
            </option>

          </select>


          <select
            name="interest"
            value={student.interest}
            onChange={handleChange}
            required
          >

            <option value="">
              Main Interest
            </option>

            <option>
              Technology
            </option>

            <option>
              Computers
            </option>

            <option>
              Healthcare
            </option>

            <option>
              Helping People
            </option>

            <option>
              Creativity
            </option>

            <option>
              Design
            </option>

            <option>
              Business
            </option>

            <option>
              Finance
            </option>

            <option>
              Teaching
            </option>

          </select>


          <select
            name="subject"
            value={student.subject}
            onChange={handleChange}
            required
          >

            <option value="">
              Favourite Subject
            </option>

            <option>
              Mathematics
            </option>

            <option>
              Computer
            </option>

            <option>
              Biology
            </option>

            <option>
              Arts
            </option>

            <option>
              Commerce
            </option>

            <option>
              English
            </option>

          </select>


          <button
            className="btn"
            type="submit"
          >
            Find My Career
          </button>

        </form>

      </section>


      <section className="features">

        <div>
          <span>🎯</span>
          <h3>Career Assessment</h3>
          <p>
            Find careers matching your interests.
          </p>
        </div>

        <div>
          <span>🎓</span>
          <h3>Scholarships</h3>
          <p>
            Discover financial support opportunities.
          </p>
        </div>

        <div>
          <span>💻</span>
          <h3>Free Learning</h3>
          <p>
            Build skills using affordable resources.
          </p>
        </div>

        <div>
          <span>🚀</span>
          <h3>Career Roadmap</h3>
          <p>
            Follow a step-by-step career path.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;