/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import api from '../../api'
import './Destino.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

/* eslint-disable react/jsx-no-undef */
export default () => {

  const [destino, setDestino] = useState({

    nome: "",
    telefone: "",
    cpf: "",
    email: "",
    localdepartida: "",
    datadepartida: "",
    localdedestino: "",
    datadechegada: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    api.post('/destino', destino)
  }

  useEffect(() => { console.log(destino) }, [destino])

  return (
    <container>
      <Navbar />
      <div className="Form">
        <form>

          <label for="nome_completo">Nome Completo: </label>
          <input id="nome_completo" type="text" className="validate" onChange={(event) => setDestino({ ...destino, nome: event.target.value })} />

          <label for="telefone">Telefone: </label>
          <input id="telefone" type="text" className="validate" onChange={(event) => setDestino({ ...destino, telefone: event.target.value })} />

          <label for="CPF">CPF: </label>
          <input id="CPF" type="text" className="validate" onChange={(event) => setDestino({ ...destino, cpf: event.target.value })} />

          <label for="e_mail">E-mail: </label>
          <input id="e_mail" type="text" className="validate" onChange={(event) => setDestino({ ...destino, email: event.target.value })} />

          <label for="destino_de_partida">Destino de partida:</label>
          <input id="destino_de_partida" type="text" className="validate" onChange={(event) => setDestino({ ...destino, localdepartida: event.target.value }
          )} />

          <label for="data_partida">Data de partida:</label>
          <input id="data_de_partida" type="text" className="validate" onChange={(event) => setDestino({ ...destino, datadepartida: event.target.value })} />

          <label for="destino_chegada">Destino de chegada:</label>
          <input id="destino_de_chegada" type="text" className="validate" onChange={(event) => setDestino({ ...destino, localdedestino: event.target.value })} />

          <label for="data_de_chegada">Data de chegada:</label>
          <input id="data_de_chegada" type="text" className="validate" onChange={(event) => setDestino({ ...destino, datadechegada: event.target.value })} />

          <input onClick={handleSubmit} type="submit" value="ENVIAR" />
          <button className="">
            <Link to="/Cdestino">Consultar</Link>
          </button>

        </form>
      </div>

      <Footer />
    </container>
  )
}