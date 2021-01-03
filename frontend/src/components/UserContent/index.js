import React, { Component } from "react";
import PubSub from "pubsub-js";

import { Button, Form } from "reactstrap";

import { Table, Input } from "antd";

import "./styles.css";

import TableUsers from "../TableUsers";

<TableUsers />;

export default class UsersContentList extends Component {
  Url = "http://localhost:3333/users";

  state = {
    users: [],
  };

  componentDidMount() {
    fetch(this.Url)
      .then((response) => response.json())
      .then((users) => this.setState({ users }))
      .catch((e) => console.log(e));
  }

  save = (user) => {
    let data = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
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
          let { users } = this.state;
          users.push(newUsuario);
          this.setState({ users });
        })
        .catch((e) => console.log(e));
    } else {
      //Editar reserva
      fetch(`${this.Url}/${data.id}`, requestInfo)
        .then((response) => response.json())
        .then((updatedUsuario) => {
          let { users } = this.state;
          let position = users.findIndex((user) => user.id === data.id);
          users[position] = updatedUsuario;
          this.setState({ users });
        })
        .catch((e) => console.log(e));
    }
  };

  delete = (id) => {
    fetch(`${this.Url}/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((rows) => {
        const users = this.state.users.filter((user) => user.id !== id);
        this.setState({ users });
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div className="">
        <h1 className="titleUsers">Usuários cadastrados na plataforma:</h1>

        <TableUsers users={this.state.users} deleteReservation={this.delete} />
        <FormUsuario userCreate={this.save} />
      </div>
    );
  }
}

class FormUsuario extends Component {
  state = {
    model: {
      id: 0,
      name: "",
      email: "",
      password: "",
    },
  };

  setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
  };

  create = () => {
    this.setState({ model: { id: 0, name: "", email: "", password: "" } });
    this.props.userCreate(this.state.model);
  };

  componentWillMount() {
    PubSub.subscribe("edit-user", (topic, user) => {
      this.setState({ model: user });
    });
  }

  render() {
    return (
      <div className="">
        <h1 className="titleEditUser"> Editar/Cadastrar usuário </h1>

        <div className="inputsAddUsers">
          <div className="inputs">
            <input
              id="name"
              type="text"
              value={this.state.model.name}
              onChange={(e) => this.setValues(e, "name")}
              placeholder="Nome"
            />
          </div>

          <div className="inputs">
            <input
              id="email"
              type="text"
              value={this.state.model.email}
              onChange={(e) => this.setValues(e, "email")}
              placeholder="email"
            />
          </div>

          <div className="inputs">
            <input
              id="password"
              type="text"
              value={this.state.model.password}
              onChange={(e) => this.setValues(e, "password")}
              placeholder="senha"
            />
          </div>
        </div>

        <div className="botaoSalvar">
          <Button id="botaoSalvar" color="dark" onClick={this.create}>
            {" "}
            Salvar usuário
          </Button>
        </div>
      </div>
    );
  }
}
