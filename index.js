const express = require("express");
const app = express();
const port = 3000;
const pool = require("./config");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function createTeacher(body) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO "Teachers" (first_name, last_name, email, gender) VALUES ($1, $2, $3, $4);`;

    pool
      .query(query, Object.values(body))
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

app.post("/", function (req, res) {
  createTeacher(req.body)
    .then((data) => {
      res.status(201).json({
        data,
        message: "success create teacher",
      });
    })
    .catch((err) => {
      res.status(500).json({
        err,
        message: "error create teacher",
      });
    });
});

function getAllTeachers() {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM "Teachers" ORDER BY id`;

    pool
      .query(query)
      .then((data) => {
        resolve(data.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

app.get("/", async function (req, res) {
  try {
    const allTeachers = await getAllTeachers();

    res.status(200).json({
      data: allTeachers,
      message: "suksesss get all teachers data",
    });
  } catch (err) {
    res.status(500).json({
      err,
      message: "failed to get all teachers data",
    });
  }

  // getAllTeachers()
  //   .then((data) => {
  //     res.status(200).json({
  //       data,
  //       message: "success get all teachers data",
  //     });
  //   })
  //   .catch((err) => {
  //     res.status(500).json({
  //       err,
  //       message: "failed to get all teachers data",
  //     });
  //   });
});

function updateTeacher(params, body) {
  return new Promise((resolve, reject) => {
    const { first_name, last_name, email, gender } = body;

    const query = `UPDATE "Teachers"
      SET    
          first_name = $2,
          last_name = $3,
          email = $4,
          gender = $5
      WHERE
          id = $1;`;

    const values = [+params, first_name, last_name, email, gender];

    pool
      .query(query, values)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

app.put("/:id", function (req, res) {
  const id = req.params.id;

  updateTeacher(id, req.body)
    .then((data) => {
      res.status(200).json({
        data,
        message: "success update teacher",
      });
    })
    .catch((err) => {
      res.status(err).json({
        err,
        message: "error update teacher",
      });
    });
});

function deleteTeacher(params) {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM "Teachers" WHERE id = $1`;

    pool
      .query(query, [params])
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

app.delete("/:id", function (req, res) {
  const id = req.params.id;

  deleteTeacher(id)
    .then((data) => {
      res.status(200).json({
        data,
        message: "Success delete teacher",
      });
    })
    .catch((err) => {
      res.status(500).json({
        err,
        message: "Failed to delete teacher",
      });
    });
});

app.listen(port, function () {
  console.log("Server running on port:", port);
});
