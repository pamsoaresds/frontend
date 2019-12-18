import React, { useState } from 'react'
import ReactDOM from 'react-dom';

export default function RegisterDocument({ history }) {

    const [name, setName] = useState('');
    const [matricula, setMatricula] = useState('');
    const [municipioNasc, setMunicipioNasc] = useState('');
    const [ufNasc, setUfNasc] = useState('');
    const [sexo, setSexo] = useState('');
    const [filiacao, setFiliacao] = useState('');

    class App extends React.Component {
        state = { show: false }

        showModal = () => {
            this.setState({ show: true });
        }

        hideModal = () => {
            this.setState({ show: false });
        }

        render() {
            return (
                <main>
                    <Modal show={this.state.show} handleClose={this.hideModal} >
                        <div className="input-modal">
                            <h3>Assinatura Digital por meio da "Certisign"</h3>
                            <p style={{ padding: "15px 15px 15px 15px" }}>Introduzir PIN</p>
                            <input
                                id="pin"
                                type="text"
                                placeholder="PIN"
                            >
                            </input>
                        </div>
                    </Modal>
                    <div>
                        <button className="btn" onClick={this.showModal} type="button">Assinar</button>
                    </div>
                </main>
            )
        }
    }

    const Modal = ({ handleClose, show, children }) => {
        const showHideClassName = show ? 'modal display-block' : 'modal display-none';

        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    {children}
                    <div>
                        <button className="btn" type="submit">Confirmar</button>
                    </div>
                </section>
            </div>
        );
    };


    const container = document.createElement('div');
    //document.body.appendChild(container);
    ReactDOM.render(<App />, container);

    async function handleSubmit(e) {
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

                <App />
            </form>
        </>
    );
}