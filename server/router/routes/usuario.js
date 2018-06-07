'use strict';

module.exports = (app, db) => {

  // POST crear usuario
  app.post('/user', (req, res) => {
    const user_name = req.body.user_name;
    const pass = req.body.pass;
    db.usuario.create({
      user_name: user_name,
      pass: pass
    })
    .then(newUser => {
      res.status(201).json({
        newUser
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    })
  });
};