import React, { Component } from "react";
import PubSub from "pubsub-js";

import { Button, Form } from "reactstrap";

import { Table, Input } from "antd";

import "./styles.css";

import TableProducts from "../TableProducts";

const { Column } = Table;

<TableProducts />;

export default class ProductContent extends Component {
  Url = "http://localhost:3333/products";

  state = {
    products: [],
  };

  componentDidMount() {
    fetch(this.Url)
      .then((response) => response.json())
      .then((products) => this.setState({ products }))
      .catch((e) => console.log(e));
  }

  save = (product) => {
    let data = {
      id: product.id,
      name: product.name,
      descricao: product.descricao,
      valor: product.valor,
    };

    console.log(data);
    const requestInfo = {
      method: data.id !== 0 ? "PUT" : "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json",
      }),
    };

    if (data.id === 0) {
      //Criar reserva
      fetch(this.Url, requestInfo)
        .then((response) => response.json())
        .then((newUsuario) => {
          let { products } = this.state;
          products.push(newUsuario);
          this.setState({ products });
        })
        .catch((e) => console.log(e));
    } else {
      //Editar reserva
      fetch(`${this.Url}/${data.id}`, requestInfo)
        .then((response) => response.json())
        .then((updatedUsuario) => {
          let { products } = this.state;
          let position = products.findIndex(
            (product) => product.id === data.id
          );
          products[position] = updatedUsuario;
          this.setState({ products });
        })
        .catch((e) => console.log(e));
    }
  };

  delete = (id) => {
    fetch(`${this.Url}/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((rows) => {
        const products = this.state.products.filter(
          (product) => product.id !== id
        );
        this.setState({ products });
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div className="">
        <TableProducts
          products={this.state.products}
          deleteReservation={this.delete}
        />
        <FormUsuario productCreate={this.save} />
      </div>
    );
  }
}

class FormUsuario extends Component {
  state = {
    model: {
      id: 0,
      name: "",
      descricao: "",
      valor: "",
    },
  };

  setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
  };

  create = () => {
    this.setState({ model: { id: 0, name: "", descricao: "", valor: "" } });
    this.props.productCreate(this.state.model);
  };

  componentWillMount() {
    PubSub.subscribe("edit-product", (topic, product) => {
      this.setState({ model: product });
    });
  }

  render() {
    return (
      <div className="">
        <h1 className="titleEditUser"> Editar/Cadastrar produtos </h1>

        <div className="inputsAddUsers">
          <div className="inputs">
            <textarea
              id="name"
              type="text"
              value={this.state.model.name}
              onChange={(e) => this.setValues(e, "name")}
              placeholder="Nome"
            />
          </div>

          <div className="inputs">
            <textarea
              id="descricao"
              type="text"
              value={this.state.model.descricao}
              onChange={(e) => this.setValues(e, "descricao")}
              placeholder="Descricao"
            />
          </div>

          <div className="inputs">
            <input
              id="valor"
              type="text"
              value={this.state.model.valor}
              onChange={(e) => this.setValues(e, "valor")}
              placeholder="Valor"
            />
          </div>
        </div>

        <div className="botaoSalvar">
          <Button id="botaoSalvar" color="dark" onClick={this.create}>
            {" "}
            Salvar produto
          </Button>
        </div>
      </div>
    );
  }
}
