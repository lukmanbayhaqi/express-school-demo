const createTeacher = `
  CREATE TABLE IF NOT EXISTS "Teachers"(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    email VARCHAR(50) NOT NULL,
    gender VARCHAR(10)
  )
`;

pool
  .query(createTeacher)
  .then((data) => {
    console.log(data, "success create table teacher");
  })
  .catch((err) => {
    console.log(err, "error create table teacher");
  });
