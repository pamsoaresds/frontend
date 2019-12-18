import React, { useState } from 'react'

export default function RegisterDocument({ history }){

    const [name, setName] = useState('');
    const [matricula, setMatricula] = useState('');
    const [municipioNasc, setMunicipioNasc] = useState('');
    const [ufNasc, setUfNasc] = useState('');
    const [sexo, setSexo] = useState('');
    const [filiacao, setFiliacao] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        localStorage.setItem('name', name);
        localStorage.setItem('matricula', matricula);
        localStorage.setItem('municipioNasc', municipioNasc);
        localStorage.setItem('ufNasc', ufNasc);
        localStorage.setItem('sexo', sexo);
        localStorage.setItem('filiacao', filiacao);
        history.push('/pdfDocument');
    }

    return (
        <>
            <p>
                Registro de Nascimento
            </p>

            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Nome</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Digite o nome a ser registrado"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    >
                </input>

                <label htmlFor="matricula">Matrícula</label>
                <input
                    id="matricula"
                    type="text"
                    placeholder="Digite a matrícula"
                    value={matricula}
                    onChange={event => setMatricula(event.target.value)}
                    >
                </input>     

                <label htmlFor="municipioNasc">Município</label>
                <input
                    id="municipioNasc"
                    type="text"
                    placeholder="Digite o município"
                    value={municipioNasc}
                    onChange={event => setMunicipioNasc(event.target.value)}
                    >
                </input> 

                <label htmlFor="ufNasc">UF</label>
                <input
                    id="ufNasc"
                    type="text"
                    placeholder="Digite o UF"
                    value={ufNasc}
                    onChange={event => setUfNasc(event.target.value)}
                    >
                </input>    

                <label htmlFor="sexo">Sexo</label>
                <input
                    id="sexo"
                    type="text"
                    placeholder="Digite o sexo"
                    value={sexo}
                    onChange={event => setSexo(event.target.value)}
                    >
                </input>       

                <label htmlFor="filiacao">Filiação</label>
                <input
                    id="filiacao"
                    type="text"
                    placeholder="Digite o nome do pai e da mãe"
                    value={filiacao}
                    onChange={event => setFiliacao(event.target.value)}
                    >
                </input>  

                <div>
                    <button className="btn" type="submit">Assinar</button>
                </div>
            </form>
        </>
    );
}