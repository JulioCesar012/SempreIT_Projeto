const bcrypt = require("bcrypt");
const connectionDB = require("../database/connectionDB");

module.exports = {
  //Listar todos usuários
  async index(req, res) {
    const listUsers = await connectionDB("users").select("*");

    return res.json(listUsers);
  },

  //Editar usuários
  async update(req, res) {
    const { id } = req.params;

    const users = await connectionDB("users").where("id", id).update(req.body);

    return res.status(201).send({ message: "Atualizado com sucesso" });
  },

  //Deletar usuários
  async delete(req, res) {
    const { id } = req.params;

    const users = await connectionDB("users").where("id", id).delete();

    return res.status(201).send({ message: "Deletado com sucesso" });
  },
};
