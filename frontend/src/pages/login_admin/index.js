import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Illustration from "../../assets/tecnologia.png";
import Header from "../../components/Header";

import api from "../../services/api";

const LoginAdmin = () => {
  const [admin_id, setAdminId] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("administrador/login", {
        email,
        password,
        admin_id,
        token,
      });

      localStorage.setItem("email", email);
      localStorage.setItem("admin_id", response.data.admin_id);
      localStorage.setItem("token", response.data.token);

      history.push(`/dashboard/${response.data.admin_id}`);
    } catch (err) {
      alert("Falha no login, tente novamente!!");
    }
  }

  return (
    <div className="container-fluid bg-primary">
      <Header />

      <form className="form-login" onSubmit={handleLogin}>
        <div className="row my-auto div-login">
          <div className="col-6 text-right">
            <img src={Illustration} className="img-fluid illustration" />
          </div>
           <div className="text-center">
            <div className="box">
              <h2 className="text-center">Seu login de Administrador!</h2>
              <br />
              <input
                type="email"
                className="form-control form-control-lg mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="btn btn-lg btn-block btn-secondary botao-login"
                type="submit"
              >
                Fazer login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginAdmin;
