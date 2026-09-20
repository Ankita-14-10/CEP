```jsx
import { useState } from "react";

function Resources() {

  const [message, setMessage] = useState("");

  return (
    <section className="page">

      <h1>💻 Free Learning Hub</h1>

      <p className="page-description">
        Learn valuable skills through free learning resources.
      </p>

      <div className="resource-card">

        <h2>📚 Learning Resources</h2>

        <p>
          HTML & CSS, JavaScript, Python, Excel,
          UI/UX Design and Communication Skills.
        </p>

        <button
          className="btn"
          onClick={() => setMessage("Learning resources are available!")}
        >
          Start Learning
        </button>

        {message && (
          <p>
            {message}
          </p>
        )}

      </div>

    </section>
  );
}

export default Resources;
```
