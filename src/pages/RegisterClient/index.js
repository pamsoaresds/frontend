import React, { useState } from 'react'
import api from '../../services/api'

import './styles.css';

export default function RegisterClient({ history }){

    const [name, setName] = useState('');
    const [address, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [cep, setCep] = useState('');
    const [phone, setPhone ] = useState('');
    const [cpf, setCpf ] = useState('');
    const [rg, setRg ] = useState('');
    const[email, setEmail] = useState('');
    const[birthday, setBirthday] = useState('');
  
   async function handleSubmit(e){
      e.preventDefault();
      console.log('asdasd ', email);
  
      const response = await api.post('/clientes', {
        "nome": name,
        "endereco": address,
        "cidade": city,
        "estado": state,
        "cep": cep,
        "telefone": phone,
        "cpf": cpf,
        "rg" : rg,
        "email" : email,
        "data_nascimento" : birthday
      });
         
        console.log('asdasd', response);
        console.log(response.data.success);
        if(response.data.success == true){
            history.push('/Start');
        }
            
        

    }

    return (
        <>
            <p>
                Registro de Cliente
            </p>

            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Nome</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Digite o nome do cliente"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    >
                </input>
                <label htmlFor="address">Endereço</label>
                <input
                    id="address"
                    type="text"
                    placeholder="Digite o logradouro, o número e o bairro"
                    value={address}
                    onChange={event => setAdress(event.target.value)}
                    >
                </input>
                <label htmlFor="city">Cidade</label>
                <input
                    id="city"
                    type="text"
                    placeholder="Digite a cidade do cliente"
                    value={city}
                    onChange={event => setCity(event.target.value)}
                    >
                </input>
                <label htmlFor="state">Estado</label>
                <input
                    id="state"
                    type="text"
                    placeholder="Digite o estado do cliente"
                    value={state}
                    onChange={event => setState(event.target.value)}
                    >
                </input>
                <label htmlFor="cep">Cep</label>
                <input
                    id="cep"
                    type="text"
                    placeholder="3011122"
                    value={cep}
                    onChange={event => setCep(event.target.value)}
                    >
                </input>
                <label htmlFor="phone">Telefone</label>
                <input
                    id="phone"
                    type="tel"
                    placeholder="Digite o telefone do cliente"
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                    >
                </input>
                <label htmlFor="cpf">Cpf</label>
                <input
                    id="cpf"
                    type="text"
                    placeholder="Digite o cpf do cliente"
                    value={cpf}
                    onChange={event => setCpf(event.target.value)}
                    >
                </input>
                <label htmlFor="rg">RG</label>
                <input
                    id="rg"
                    type="text"
                    placeholder="Digite o RG do cliente"
                    value={rg}
                    onChange={event => setRg(event.target.value)}
                    >
                </input>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Digite o email do cliente"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    >
                </input>
                <label htmlFor="bithday">Data de nascimento</label>
                <input
                    id="birthday"
                    type="date"
                    placeholder="Digite a data de nascimento do cliente"
                    value={birthday}
                    onChange={event => setBirthday(event.target.value)}
                    >
                </input>
                <button className="btn" type="submit">Cadastrar</button>
            </form>
        </>
    );
}