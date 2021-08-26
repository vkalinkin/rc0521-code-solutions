const pg = require('pg');

const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  // validate the "inputs" FIRST
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    // there is no way that a matching grade could be found
    // so we immediately respond to the client and STOP the code
    // with a return statement
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  // Ok, the input is reasonable, time to query the database.
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  // 👆 We are NOT putting the user input directly into our query
  const params = [gradeId];
  // 👆 instead, we are sending the user input in a separate array
  /**
   * review the documentation on parameterized queries here:
   * https://node-postgres.com/features/queries#parameterized-query
   * you'll be using this information to prevent SQL injection attacks
   *
   * https://www.youtube.com/watch?v=_jKylhJtPmI
   */
  db.query(sql, params)
    .then(result => {
      // the query succeeded, even if nothing was found
      // the Result object will include an array of rows
      // see the docs on results
      // https://node-postgres.com/api/result
      const grade = result.rows[0];
      if (!grade) {
        // we could not have known ahead of time without actually querying the db
        // but the specific grade being requested was not found in the database
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        // the specific grade was found in the database, yay!
        res.json(grade);
      }
    })
    .catch(err => {
      // the query failed for some reason
      // possibly due to a syntax error in the SQL statement
      // print the error to STDERR (the terminal) for debugging purposes
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const input = req.body;

  const newName = input.name;
  const newCourse = input.course;
  const newScore = parseInt(input.score);

  if (!newScore) {
    res.status(400).json({
      error: '"score" is required'
    });

  } else if (!Number.isInteger(newScore) || newScore < 0 || newScore > 100) {
    res.status(400).json({
      error: '"score" must be an integer between 0 and 100'
    });

  } else if (!newName) {
    res.status(400).json({
      error: '"name" is required'
    });

  } else if (!newCourse) {
    res.status(400).json({
      error: '"course" is required'
    });

  } else {
    const sql = `insert into "grades"
    ("name", "course", "score")
    values ($1, $2, $3)
    returning *
    `;
    const params = [newName, newCourse, newScore];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        res.json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
     delete from "grades"
     where "gradeId" = $1
     returning *
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows;
      if (grade && grade.length > 0) {
        res.sendStatus(204);
      } else {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const newMessage = req.body;

  const newName = newMessage.name;
  const newCourse = newMessage.course;
  const newScore = parseInt(newMessage.score);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });

  } else if (!newScore) {
    res.status(400).json({
      error: '"score" is required'
    });

  } else if (!Number.isInteger(newScore) || newScore < 0 || newScore > 100) {
    res.status(400).json({
      error: '"score" must be an integer between 0 and 100'
    });

  } else if (!newName) {
    res.status(400).json({
      error: '"name" is required'
    });

  } else if (!newCourse) {
    res.status(400).json({
      error: '"course" is required'
    });

  } else {
    const sql = `
    update "grades"
    set "name" = $1,
    "course"= $2,
    "score" = $3
    where "gradeId" = $4
    returning *
    `;
    const params = [newName, newCourse, newScore, gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows;
        if (grade && grade.length > 0) {
          res.sendStatus(200);
        } else {
          res.status(404).json({
            error: `Cannot find grade with "gradeId" ${gradeId}`
          });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');

});
