/*import React, { useEffect, useState } from 'react'
import api from '../../services/api';

export default function Start({ history }) {
    const [servicesType, setServicesTyTe] = useState([]);
    useEffect(() => {
        async function load() {
            const response = await api.post('/servicesTypeMock');
            console.log('asdasd', response.data);
            setServicesType(response.data.dados);
        }
        load();
    }, []);

    function abrirTelaRegistro() {
        history.push('/RegisterClient');
    }

    function abrirTelaDocument() {
        history.push('/RegisterDocument');
    }

    return (
        <>
            <ul >
                {servicesType.map(service => (
                    <li key={service._id}>
                        <strong>{service}</strong>
                    </li>
                ))}
            </ul>
            <div style={{ "float": "left" }} >
                <button className="btn" type="submit" onClick={abrirTelaRegistro}>Cadastrar Cliente</button>
            </div>
            <div style={{ "float": "right" }} >
                <button className="btn" type="submit" onClick={abrirTelaDocument}>Confirmar</button>
            </div>
        </>
    )
}*/


import React, { useEffect, useState } from 'react'
import api from '../../services/api';

export default function Start({ history }) {
  const [clientes, setClients] = useState([]);
  const [clientesId, setClientsId] = useState({});
  const [services, setServices] = useState([]);
  const [servicesId, setServicesId] = useState({});
  useEffect(() => {
    async function load() {
      const responseClients = await api.get('/clientes');
      setClients(responseClients.data.clientes);
      console.log('CLIENTES', responseClients.data.clientes);

      const responseServices = await api.get('/servicos');
      var convertString = responseServices.data.servicos.map(function (obj) {
        return obj.nome;
      });
      var convertStringId = responseServices.data.servicos.map(function (obj) {
        return obj._id;
      });

      setServices(convertString);
      setServicesId(convertStringId);
    }
    load();
  }, []);

  function abrirTelaRegistro() {
    history.push('/RegisterClient');
  }

  async function abrirTelaDocument() {
    const clientesId = localStorage.getItem('clienteId');
    console.log('clientesId', clientesId);
    const servicesId = localStorage.getItem('serviceId');
    console.log('serviceId', servicesId);
    const response = await api.post('/criarpedido', {
      clientesId: clientesId,
      servicesId: servicesId
    });

    console.log('asd', response);
    history.push('/RegisterDocument');
  }

  // Create a SearchApp Component
  class SearchApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: ''
      };
    }
    handleChange(event) {
      // Get event value
      let searchValue = event.target.value;

      // Set the state to trigger a re-rendering
      this.setState({ search: searchValue });
    }
    render() {
      // Filter the table data
      let clientes = this.props.data,
        searchString = this.state.search.trim().toLowerCase();

      if (searchString.length > 0) {
        // We are searching. Filter the results.
        clientes = clientes.filter((e) => e.cpf.toLowerCase().match(searchString));
      }
      // Set the `update` property of the `UserInput` element
      return (
        <div>
          <UserInput update={(e) => this.handleChange(e)} />
          <Table data={clientes} />
        </div>
      )
    }
  }

  // UserInput component
  class UserInput extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <div>
          <input placeholder="CPF do cliente" onChange={(e) => this.props.update(e)} />
        </div>
      )
    }
  }

  // Simple TableRow component for showing a <tr>
  class TableRow extends React.Component {
    theButtonWork(id) {
      localStorage.setItem('clienteId', id);
      const teste = localStorage.getItem('clienteId');
      localStorage.setItem('clienteNome', this.props.nome);
      console.log("ID cliente-LS: ", teste)
      //console.log("ID cliente-LS: ", nomeCliente)
    }

    render() {
      return (
        <tr>
          <td> 
            <button className="btn-teste" type="button" 
            onClick={() => this.theButtonWork(this.props.id)}> 
            </button>
          </td>
          <td>{this.props.nome}</td>
          <td>{this.props.cpf}</td>
          <td>{this.props.rg}</td>
        </tr>

      )
    }
  };


  class Table extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="form-start">
          <table className="table">
            <tbody>

              <tr>
                <th></th>
                <th>Nome</th>
                <th>CPF</th>
                <th>RG</th>
              </tr>

              {this.props.data.map(function (d, i) {
                return <TableRow key={'cliente-' + i}
                  id={d._id}
                  nome={d.nome}
                  rg={d.rg}
                  cpf={d.cpf}
                />
              })}
            </tbody>
          </table>
        </div>
      )
    }
  }

  class SelectBox extends React.Component {
    constructor(props) {
      super(props);

      this.state = { value: 'Select an Option' };
    }
    onChange(e) {
      this.setState({
        value: e.target.value
      })
    }

    salvarLocal(id) {
      localStorage.setItem('serviceId', id);
      const teste = localStorage.getItem('serviceId');
      console.log("ID serviço-LS: ", teste)
    }

    render() {
      return (
        <div className="form-group">
          <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
            {services.map(option => {
              return <option value={option} key={option} >{option}</option>
            })}
            {this.salvarLocal(servicesId[services.indexOf(this.state.value)])}
          </select>
        </div>

      )
    }
  }

  return (
    <>
      <div>
        <form >
          <label>
            Tipo de Serviço
        </label>

          <SelectBox />

          <label>
            Pesquisar por Cliente
        </label>


          <SearchApp data={clientes} />

        <label>Cliente: {localStorage.getItem('clienteNome')}</label>
        </form>
      </div>
      <div style={{ "float": "left" }} >
        <button className="btn" type="submit" onClick={abrirTelaRegistro}>Cadastrar Cliente</button>
      </div>
      <div style={{ "float": "right" }} >
        <button className="btn" type="submit" onClick={abrirTelaDocument}>Confirmar</button>
      </div>


    </>
  )
}