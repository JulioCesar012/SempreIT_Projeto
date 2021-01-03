const connectionDB = require("../database/connectionDB");

module.exports = {
  //Listagem dos produtos
  async index(req, res) {
    const listProducts = await connectionDB("products").select(
      "id",
      "name",
      "descricao",
      "valor"
    );

    return res.json(listProducts);
  },

  //Criar produtos
  async create(req, res) {
    const { name, descricao, valor } = req.body;

    const products = await connectionDB("products").insert({
      name,
      descricao,
      valor,
    });

    return res.status(201).json({ name, descricao, valor });
  },

  //Editar produto
  async update(req, res) {
    const { id } = req.params;

    const produtos = await connectionDB("products")
      .where("id", id)
      .update(req.body);

    return res.status(201).send({ message: "Atualizado com sucesso" });
  },

  //Deletar produto
  async delete(req, res) {
    const { id } = req.params;

    const produtos = await connectionDB("products").where("id", id).delete();

    return res.status(201).send({ message: "Deletado com sucesso" });
  },
};
