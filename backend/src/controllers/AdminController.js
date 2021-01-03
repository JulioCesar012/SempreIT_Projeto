const mysql = require("../database/connectionDBMysql").pool;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Método de adicionar admnistador com query builder
exports.addAdmin = (req, res, next) => {
  mysql.getConnection((err, conn) => {
    if (err) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "SELECT * FROM admins WHERE email = ?",
      [req.body.email],
      (error, results) => {
        if (error) {
          return res.status(500).send({ error: error });
        }
        if (results.length > 0) {
          res
            .status(401)
            .send({
              mensagem:
                "Administrador não pode ser adicionado, tente novamente",
            });
        } else {
          bcrypt.hash(req.body.password, 10, (errBcrypt, hash) => {
            if (errBcrypt) {
              return res.status(500).send({ error: errBcrypt });
            }
            conn.query(
              `INSERT INTO admins(
                  name, email, password)
                  VALUES (?,?,?)`,
              [req.body.name, req.body.email, hash],
              (error, results) => {
                conn.release();
                if (error) {
                  return res.status(500).send({ error: error });
                }
                response = {
                  mensagem: "Administrador cadastrado com sucesso",
                  usuarioCadastrado: {
                    nome: req.body.name,
                    email: req.body.email,
                  },
                };
                return res.status(201).send(response);
              }
            );
          });
        }
      }
    );
  });
};

//Método de login do admnistador com query builder
exports.loginAdmin = (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: conn });
    }
    const query = `SELECT * FROM admins WHERE email = ?`;
    conn.query(query, [req.body.email], (error, results, fields) => {
      conn.release();
      if (error) {
        return res.status(500).send({ error: error });
      }
      if (results.length < 1) {
        return res
          .status(401)
          .send({ message: "Não foi possível fazer login, tente novamente" });
      }
      bcrypt.compare(req.body.password, results[0].password, (err, result) => {
        if (err) {
          return res
            .status(401)
            .send({ message: "Não foi possível fazer login, tente novamente" });
        }
        if (result) {
          const token = jwt.sign(
            {
              admin_id: results[0].id,
              email_usuario: results[0].email,
            },
            process.env.TOKEN_ADMIN,
            {
              expiresIn: 3600,
            }
          );
          return res.status(200).send({
            message: "Logado com sucesso",
            token: token,
            admin_id: results[0].id,
          });
        }
        return res
          .status(401)
          .send({ message: "Não foi possível fazer login, tente novamente" });
      });
    });
  });
};
