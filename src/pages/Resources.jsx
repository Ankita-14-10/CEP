const resources = [
  {
    title: "HTML & CSS Fundamentals",
    category: "Technology",
    level: "Beginner",
    cost: "Free"
  },

  {
    title: "JavaScript Fundamentals",
    category: "Technology",
    level: "Beginner",
    cost: "Free"
  },

  {
    title: "Python Programming",
    category: "Technology",
    level: "Beginner",
    cost: "Free"
  },

  {
    title: "Excel Fundamentals",
    category: "Business",
    level: "Beginner",
    cost: "Free"
  },

  {
    title: "UI/UX Design",
    category: "Design",
    level: "Beginner",
    cost: "Free"
  },

  {
    title: "Communication Skills",
    category: "Education",
    level: "Beginner",
    cost: "Free"
  }
];

function Resources() {

  return (

    <section className="page">

      <h1>
        💻 Free Learning Hub
      </h1>

      <p className="page-description">

        Learn valuable skills without depending
        entirely on expensive coaching.

      </p>


      <div className="resource-grid">

        {resources.map(resource => (

          <div
            className="resource-card"
            key={resource.title}
          >

            <span className="free-badge">
              {resource.cost}
            </span>

            <h3>
              {resource.title}
            </h3>

            <p>
              Build practical skills through
              self-learning.
            </p>

            <div className="resource-meta">

              <span>
                {resource.category}
              </span>

              <span>
                {resource.level}
              </span>

            </div>

            <button
              className="btn"
              onClick={() =>
                alert(
                  "Learning resource will be connected to an official learning platform."
                )
              }
            >
              Start Learning
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Resources;