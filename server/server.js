import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const scholarships = [
  {
    id: 1,
    name: "National Scholarship Support",
    education: "12th Pass",
    category: "Technology",
    amount: "Financial assistance based on eligibility",
    eligibility:
      "Students pursuing higher education who meet applicable criteria.",
  },

  {
    id: 2,
    name: "Higher Education Support",
    education: "Graduate",
    category: "Technology",
    amount: "Support based on programme rules",
    eligibility:
      "Eligible students pursuing higher education.",
  },

  {
    id: 3,
    name: "Healthcare Education Support",
    education: "12th Pass",
    category: "Healthcare",
    amount: "Financial support based on eligibility",
    eligibility:
      "Students pursuing healthcare education.",
  },

  {
    id: 4,
    name: "Creative Education Support",
    education: "12th Pass",
    category: "Design",
    amount: "Support based on eligibility",
    eligibility:
      "Students pursuing creative or design education.",
  },

  {
    id: 5,
    name: "Business Education Support",
    education: "Graduate",
    category: "Business",
    amount: "Financial assistance based on eligibility",
    eligibility:
      "Students interested in business education.",
  },
];

/* -------------------------------- */
/* HOME API */
/* -------------------------------- */

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to MyCareer Guide API",
    status: "running",
  });
});

/* -------------------------------- */
/* SCHOLARSHIP API */
/* -------------------------------- */

app.get("/api/scholarships", (req, res) => {
  const { education, category } = req.query;

  let result = scholarships;

  if (education) {
    result = result.filter(
      (item) => item.education === education
    );
  }

  if (category) {
    result = result.filter(
      (item) => item.category === category
    );
  }

  res.json(result);
});

/* -------------------------------- */
/* ALL SCHOLARSHIPS */
/* -------------------------------- */

app.get("/api/scholarships/all", (req, res) => {
  res.json(scholarships);
});

/* -------------------------------- */
/* SERVER */
/* -------------------------------- */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `MyCareer Guide backend running on http://localhost:${PORT}`
  );
});