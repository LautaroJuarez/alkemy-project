const express = require("express");
const routes = express.Router();

//request to the api of all the data
routes.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query('SELECT * FROM challenge.records', (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
    });
  });
});
routes.post("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query('INSERT INTO challenge.records set ?', [req.body], (err, rows) => {
      if (err) return res.send(err);
      res.send('Record inserted!');
    });
  });
});
routes.delete("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query('DELETE FROM library.books WHERE id = ?', [req.params.id], (err, rows) => {
      if (err) return res.send(err);
      res.send('Record deleted!');
    });
  });
});
routes.put("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query('UPDATE library.books set ? WHERE id = ?', [req.body,  req.params.id], (err, rows) => {
      if (err) return res.send(err);
      res.send('Record updated!');
    });
  });
});

module.exports = routes;