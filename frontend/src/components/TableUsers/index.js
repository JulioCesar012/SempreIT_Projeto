import React, { Component } from "react";
import PubSub from "pubsub-js";
import Highlighter from "react-highlight-words";

import { Button } from "reactstrap";

import { Table, Input, Space } from "antd";

import { SearchOutlined } from "@ant-design/icons";

const { Column, ColumnGroup } = Table;

export default class UserContent extends Component {
  state = {
    searchText: "",
    searchedColumn: "",
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Procurar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
          className="inputProcurar"
        />
        <Space>
          <Button
            className="botaoProcurar"
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 100 }}
          >
            {" "}
            Procurar
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Limpar
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  //Funcao para busca filtrada através de data
  getColumnSearchDateProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          type="date"
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Procurar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
          className="inputProcurar"
        />
        <Space>
          <Button
            className="botaoProcurar"
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 100 }}
          >
            {" "}
            Procurar
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Limpar
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  delete = (id) => {
    this.props.deleteReservation(id);
  };

  onEdit = (user) => {
    PubSub.publish("edit-user", user);
  };

  render() {
    const { Column, ColumnGroup } = Table;

    const columns = [
      {
        title: "",
        dataIndex: "",
        width: 20,
      },
      {
        title: "Nome",
        dataIndex: "name",
        width: 180,
        ...this.getColumnSearchProps("name"),
      },
      {
        title: "Email",
        dataIndex: "email",
        width: 200,
        ...this.getColumnSearchProps("email"),
      },
      {
        title: "Editar / Excluir",
        key: "operation",
        fixed: "right",
        width: 140,
        render: (user, users, id) => [
          <Button
            className="botaoEditar"
            color="info"
            size="sm"
            onClick={(e) => this.onEdit(user)}
          >
            Editar
          </Button>,
          <Button
            className="botaoDeletar"
            color="danger"
            size="sm"
            onClick={(e) => this.delete(users.id)}
          >
            Delete
          </Button>,
        ],
      },
    ];

    const { users } = this.props;

    return (
      <div>
        <Table
          columns={columns}
          dataSource={users}
          key={users.id}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 240 }}
        />
      </div>
    );
  }
}
