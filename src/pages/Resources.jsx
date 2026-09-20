
import { useState } from "react";

const resources = [
  {
    title: "HTML & CSS Fundamentals",
    category: "Technology",
    level: "Beginner",
    cost: "Free",
    description:
      "Learn how websites are structured and styled using HTML and CSS.",
    notes: [
      "HTML stands for HyperText Markup Language. It is used to create the structure of a webpage.",
      "Common HTML elements include headings, paragraphs, links, images, lists, tables and forms.",
      "CSS stands for Cascading Style Sheets. It is used to design and style HTML elements.",
      "CSS can be used to change colors, fonts, spacing, borders, layouts and responsive designs.",
      "HTML provides the structure while CSS provides the appearance of a webpage.",
      "Responsive design helps websites work properly on mobiles, tablets and computers."
    ],
    points: [
      "HTML creates webpage structure.",
      "CSS is used for styling.",
      "Learn HTML tags and attributes.",
      "Learn CSS selectors and properties.",
      "Practice by creating a simple webpage."
    ],
    resourceLink:
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"
  },

  {
    title: "JavaScript Fundamentals",
    category: "Technology",
    level: "Beginner",
    cost: "Free",
    description:
      "Learn the basics of JavaScript and how to make webpages interactive.",
    notes: [
      "JavaScript is a programming language commonly used to add interactivity to websites.",
      "Variables are used to store data. JavaScript commonly uses let and const.",
      "JavaScript supports data types such as strings, numbers, booleans, arrays and objects.",
      "Conditional statements such as if, else and switch are used for decision making.",
      "Loops such as for and while are used to repeat instructions.",
      "Functions are reusable blocks of code that perform a particular task.",
      "JavaScript can interact with HTML using the Document Object Model (DOM)."
    ],
    points: [
      "Learn variables and data types.",
      "Practice if-else statements.",
      "Learn loops and functions.",
      "Understand arrays and objects.",
      "Practice DOM manipulation."
    ],
    resourceLink:
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting"
  },

  {
    title: "Python Programming",
    category: "Technology",
    level: "Beginner",
    cost: "Free",
    description:
      "Learn programming fundamentals using the Python programming language.",
    notes: [
      "Python is a high-level programming language known for its simple and readable syntax.",
      "Python can be used for web development, automation, data analysis, artificial intelligence and many other applications.",
      "Variables in Python are used to store values such as numbers and strings.",
      "Python supports conditional statements such as if, elif and else.",
      "Loops such as for and while are used to repeat a block of code.",
      "Functions help divide a program into smaller reusable parts.",
      "Python also supports important concepts such as lists, tuples, dictionaries and sets."
    ],
    points: [
      "Learn Python syntax.",
      "Practice variables and data types.",
      "Learn conditions and loops.",
      "Create functions.",
      "Practice lists and dictionaries."
    ],
    resourceLink:
      "https://docs.python.org/3/tutorial/"
  },

  {
    title: "Excel Fundamentals",
    category: "Business",
    level: "Beginner",
    cost: "Free",
    description:
      "Learn spreadsheets, formulas and basic data management using Excel.",
    notes: [
      "Microsoft Excel is a spreadsheet application used to store, organize and analyze data.",
      "A workbook contains worksheets, and worksheets contain rows and columns.",
      "Cells are used to enter values, text and formulas.",
      "Formulas can be used to perform calculations automatically.",
      "Common functions include SUM, AVERAGE, COUNT, MIN and MAX.",
      "Charts can be used to represent data visually.",
      "Excel is useful in business, accounting, education, administration and data analysis."
    ],
    points: [
      "Understand rows, columns and cells.",
      "Learn basic formulas.",
      "Practice SUM and AVERAGE.",
      "Create simple charts.",
      "Organize and filter data."
    ],
    resourceLink:
      "https://support.microsoft.com/en-us/excel"
  },

  {
    title: "UI/UX Design",
    category: "Design",
    level: "Beginner",
    cost: "Free",
    description:
      "Understand the basics of creating useful and user-friendly digital interfaces.",
    notes: [
      "UI stands for User Interface. It focuses on the visual appearance of a digital product.",
      "UX stands for User Experience. It focuses on how easily and effectively users can interact with a product.",
      "Good UI design uses suitable colors, typography, spacing, buttons and layouts.",
      "UX design involves understanding user needs and solving problems through design.",
      "Wireframes are simple representations of a webpage or application layout.",
      "User testing helps designers understand how real users interact with a product.",
      "A good design should be simple, consistent, accessible and easy to understand."
    ],
    points: [
      "Understand UI and UX.",
      "Learn basic design principles.",
      "Practice wireframing.",
      "Study user needs.",
      "Create simple webpage designs."
    ],
    resourceLink:
      "https://www.figma.com/resource-library/"
  },

  {
    title: "Communication Skills",
    category: "Education",
    level: "Beginner",
    cost: "Free",
    description:
      "Improve communication skills useful for education, interviews and professional life.",
    notes: [
      "Communication is the process of sharing information, ideas and feelings with other people.",
      "Good communication includes speaking clearly, listening carefully and responding appropriately.",
      "Verbal communication includes the words used while speaking.",
      "Non-verbal communication includes body language, facial expressions, eye contact and gestures.",
      "Active listening means paying attention to the speaker and understanding the message.",
      "Good communication is especially important during interviews, presentations and teamwork.",
      "Regular practice can improve confidence, vocabulary and speaking ability."
    ],
    points: [
      "Practice speaking clearly.",
      "Improve active listening.",
      "Maintain suitable eye contact.",
      "Practice interview questions.",
      "Improve confidence through regular practice."
    ],
    resourceLink:
      "https://www.youtube.com/results?search_query=communication+skills+for+students"
  }
];

function Resources() {
  const [selectedResource, setSelectedResource] = useState(null);

  if (selectedResource) {
    return (
      <section className="page">

        <button
          className="btn"
          onClick={() => setSelectedResource(null)}
        >
          ← Back to Learning
        </button>

        <h1 style={{ marginTop: "25px" }}>
          📚 {selectedResource.title}
        </h1>

        <p className="page-description">
          {selectedResource.description}
        </p>

        <div className="resource-card">

          <h2>📖 Learning Notes</h2>

          {selectedResource.notes.map((note, index) => (
            <p key={index}>
              <strong>{index + 1}.</strong> {note}
            </p>
          ))}

        </div>

        <div
          className="resource-card"
          style={{ marginTop: "20px" }}
        >

          <h2>⭐ Important Points</h2>

          {selectedResource.points.map((point, index) => (
            <p key={index}>
              ✅ {point}
            </p>
          ))}

        </div>

        <div
          className="resource-card"
          style={{ marginTop: "20px" }}
        >

          <h2>🎓 Continue Learning</h2>

          <p>
            Use the learning resource below to study this topic
            in more detail.
          </p>

          <a
            href={selectedResource.resourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Open Learning Resource ↗
          </a>

        </div>

      </section>
    );
  }

  return (
    <section className="page">

      <h1>💻 Free Learning Hub</h1>

      <p className="page-description">
        Learn valuable skills without depending entirely on
        expensive coaching.
      </p>

      <div className="resource-grid">

        {resources.map((resource) => (
          <div
            className="resource-card"
            key={resource.title}
          >

            <span className="free-badge">
              {resource.cost}
            </span>

            <h3>{resource.title}</h3>

            <p>{resource.description}</p>

            <div className="resource-meta">

              <span>{resource.category}</span>

              <span>{resource.level}</span>

            </div>

            <button
              className="btn"
              onClick={() => setSelectedResource(resource)}
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

