import express from "express";
import cors from "cors";

import careers from "./data/careers.js";
import scholarships from "./data/scholarships.js";
import resources from "./data/resources.js";

const app = express();

const PORT = 5000;

/*
|--------------------------------------------------------------------------
| Middleware
|--------------------------------------------------------------------------
*/

app.use(cors());

app.use(express.json());


/*
|--------------------------------------------------------------------------
| Home
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "MyCareer Guide API is running",
    version: "1.0.0"
  });
});


/*
|--------------------------------------------------------------------------
| Get all careers
|--------------------------------------------------------------------------
*/

app.get("/api/careers", (req, res) => {
  res.json({
    success: true,
    count: careers.length,
    data: careers
  });
});


/*
|--------------------------------------------------------------------------
| Get single career
|--------------------------------------------------------------------------
*/

app.get("/api/careers/:id", (req, res) => {

  const id = Number(req.params.id);

  const career = careers.find(
    (item) => item.id === id
  );

  if (!career) {
    return res.status(404).json({
      success: false,
      message: "Career not found"
    });
  }

  res.json({
    success: true,
    data: career
  });
});


/*
|--------------------------------------------------------------------------
| Career Recommendation
|--------------------------------------------------------------------------
*/

app.post("/api/careers/recommend", (req, res) => {

  const {
    education,
    interest,
    subject
  } = req.body;

  if (!education || !interest || !subject) {

    return res.status(400).json({
      success: false,
      message:
        "Education, interest and subject are required."
    });

  }

  const results = careers.map((career) => {

    let score = 0;

    /*
    Interest match
    */

    if (
      career.interests.includes(interest)
    ) {
      score += 50;
    }

    /*
    Subject match
    */

    if (
      career.subjects.includes(subject)
    ) {
      score += 30;
    }

    /*
    Education match
    */

    if (
      career.education.includes(education)
    ) {
      score += 20;
    }

    return {
      ...career,
      score
    };

  });

  const sortedResults = results
    .filter((career) => career.score > 0)
    .sort(
      (a, b) => b.score - a.score
    );

  res.json({
    success: true,
    count: sortedResults.length,
    data: sortedResults
  });

});


/*
|--------------------------------------------------------------------------
| Scholarships
|--------------------------------------------------------------------------
*/

app.get("/api/scholarships", (req, res) => {

  const {
    education,
    category
  } = req.query;

  let result = [...scholarships];


  /*
  Filter by education
  */

  if (education) {

    result = result.filter(
      (item) =>
        item.education === education
    );

  }


  /*
  Filter by category
  */

  if (category) {

    result = result.filter(
      (item) =>
        item.category === category
    );

  }


  res.json({
    success: true,
    count: result.length,
    data: result
  });

});


/*
|--------------------------------------------------------------------------
| Single Scholarship
|--------------------------------------------------------------------------
*/

app.get(
  "/api/scholarships/:id",
  (req, res) => {

    const id = Number(req.params.id);

    const scholarship =
      scholarships.find(
        (item) => item.id === id
      );

    if (!scholarship) {

      return res.status(404).json({
        success: false,
        message: "Scholarship not found"
      });

    }

    res.json({
      success: true,
      data: scholarship
    });

  }
);


/*
|--------------------------------------------------------------------------
| Learning Resources
|--------------------------------------------------------------------------
*/

app.get("/api/resources", (req, res) => {

  const {
    category,
    level,
    cost
  } = req.query;

  let result = [...resources];


  if (category) {

    result = result.filter(
      (item) =>
        item.category === category
    );

  }


  if (level) {

    result = result.filter(
      (item) =>
        item.level === level
    );

  }


  if (cost) {

    result = result.filter(
      (item) =>
        item.cost === cost
    );

  }


  res.json({
    success: true,
    count: result.length,
    data: result
  });

});


/*
|--------------------------------------------------------------------------
| Server
|--------------------------------------------------------------------------
*/

app.listen(PORT, () => {

  console.log("");
  console.log("======================================");
  console.log("      MyCareer Guide Backend");
  console.log("======================================");
  console.log("");
  console.log(
    `Server running on http://localhost:${PORT}`
  );
  console.log("");
  console.log("Available APIs:");
  console.log(
    "GET  /api/careers"
  );
  console.log(
    "GET  /api/careers/:id"
  );
  console.log(
    "POST /api/careers/recommend"
  );
  console.log(
    "GET  /api/scholarships"
  );
  console.log(
    "GET  /api/scholarships/:id"
  );
  console.log(
    "GET  /api/resources"
  );
  console.log("");

});