import { useState } from "react";

const scholarships = [
  {
    id: 1,
    name: "Higher Education Scholarship",
    category: "Technology",
    education: "12th Pass",
    description:
      "Financial support for eligible students pursuing higher education."
  },

  {
    id: 2,
    name: "Technical Education Support",
    category: "Technology",
    education: "Diploma",
    description:
      "Support for eligible students pursuing technical education."
  },

  {
    id: 3,
    name: "Healthcare Education Support",
    category: "Healthcare",
    education: "12th Pass",
    description:
      "Financial assistance for eligible healthcare students."
  },

  {
    id: 4,
    name: "Creative Education Support",
    category: "Design",
    education: "12th Pass",
    description:
      "Support for eligible students pursuing creative education."
  },

  {
    id: 5,
    name: "Commerce Education Support",
    category: "Business",
    education: "Graduate",
    description:
      "Financial support for eligible commerce students."
  }
];

function Scholarships() {

  const [category, setCategory] =
    useState("");

  const [education, setEducation] =
    useState("");

  const filtered =
    scholarships.filter(item => {

      const categoryMatch =
        !category ||
        item.category === category;

      const educationMatch =
        !education ||
        item.education === education;

      return (
        categoryMatch &&
        educationMatch
      );

    });

  return (

    <section className="page">

      <h1>
        🎓 Scholarship Finder
      </h1>

      <p className="page-description">
        Find financial-support opportunities
        relevant to your education and career area.
      </p>


      <div className="filters">

        <select
          value={category}
          onChange={e =>
            setCategory(e.target.value)
          }
        >

          <option value="">
            All Career Areas
          </option>

          <option>
            Technology
          </option>

          <option>
            Healthcare
          </option>

          <option>
            Design
          </option>

          <option>
            Business
          </option>

        </select>


        <select
          value={education}
          onChange={e =>
            setEducation(e.target.value)
          }
        >

          <option value="">
            All Education Levels
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

      </div>


      <div className="scholarship-grid">

        {filtered.map(item => (

          <div
            className="scholarship-card"
            key={item.id}
          >

            <span className="category">
              {item.category}
            </span>

            <h3>
              {item.name}
            </h3>

            <p>
              <strong>
                Education:
              </strong>{" "}
              {item.education}
            </p>

            <p>
              {item.description}
            </p>

            <button
              className="btn"
              onClick={() =>
                alert(
                  "Please verify eligibility on the official scholarship provider website before applying."
                )
              }
            >
              Check Eligibility
            </button>

          </div>

        ))}

      </div>


      <div className="notice">

        ⚠️ Always verify scholarship eligibility,
        deadlines and application details with the
        official provider before applying.

      </div>

    </section>
  );
}

export default Scholarships;