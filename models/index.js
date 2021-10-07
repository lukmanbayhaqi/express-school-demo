const pool = require("../config/config");

module.exports = {
  createTeacher(body) {
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
  },
  getAllTeachers() {
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
  },
  updateTeacher(params, body) {
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
  },
  deleteTeacher(params) {
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
  },
};
