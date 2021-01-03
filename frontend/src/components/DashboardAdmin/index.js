import React, { Component } from "react";
import PubSub from "pubsub-js";

import { Table } from "antd";

import DashboardUser from "../DashboardUser";

import "./styles.css";

const { Column } = Table;

<DashboardUser />;

export default class ReservationContent extends Component {
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
        <h1 className="titleUsers">Produtos cadastrados:</h1>

        <DashboardUser
          products={this.state.products}
          deleteReservation={this.delete}
        />
      </div>
    );
  }
}
