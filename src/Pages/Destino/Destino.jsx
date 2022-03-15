/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import api from '../../api'
import './Destino.css'
import axios from "axios"
import { useEffect, useState } from "react"

/* eslint-disable react/jsx-no-undef */
export default () => {

  const [destino, setDestino] = useState({

    nome: "",
    telefone: "",
    email: "",
    localdepartida: "",
    localdedestino: "",
    datadepartida: "",
    datadechegada: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    api.post('/destino', destino)
  }

  useEffect(() => { console.log(destino) }, [destino])

  return (
    <>
      <Header></Header>
      <div className="row">

        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="nome_completo" type="text" className="validate" onChange={(event) => setDestino({ ...destino, nome: event.target.value })} />
              <label for="nome_completo">Nome Completo: </label>
            </div>

            <div className="input-field col s6">
              <input id="telefone" type="text" className="validate" onChange={(event) => setDestino({ ...destino, telefone: event.target.value })} />
              <label for="telefone">Telefone: </label>
            </div>

            <div className="input-field col s6">
              <input id="CPF" type="text" className="validate" onChange={(event) => setDestino({ ...destino, cpf: event.target.value })} />
              <label for="CPF">CPF: </label>
            </div>

            <div className="input-field col s6">
              <input id="e_mail" type="text" className="validate" onChange={(event) => setDestino({ ...destino, email: event.target.value })} />
              <label for="e_mail">E-mail: </label>
            </div>

            <div className="input-field col s6">
              <input id="destino_de_partida" type="text" className="validate" onChange={(event) => setDestino({ ...destino, localdepartida: event.target.value })} />
              <label for="destino_de_partida">Destino de partida:</label>
            </div>

            <div className="input-field col s6">
              <input id="data_de_partida" type="text" className="validate" onChange={(event) => setDestino({ ...destino, datadepartida: event.target.value })} />
              <label for="data_partida">Data de partida:</label>
            </div>

            <div className="input-field col s6">
              <input id="destino_de_chegada" type="text" className="validate" onChange={(event) => setDestino({ ...destino, localdedestino: event.target.value })} />
              <label for="destino_chegada">Destino de chegada:</label>
            </div>

            <div className="input-field col s6">
              <input id="data_de_chegada" type="text" className="validate" onChange={(event) => setDestino({ ...destino, datadechegada: event.target.value })} />
              <label for="data_de_chegada">Data de chegada:</label>
            </div>
            <input onClick={handleSubmit} type="submit" value="ENVIAR" /><form></form>
          </div>
        </form >

      </div >
      <Footer></Footer>
    </>
  )
}
/*
{ destino.map((destino) => (   )) }



/*{ destino.map((destino) => ()) }*/

/*useEffect(() => {
  api.get('/produtos')

  .then((res) => {

    setProduto(res.data)

  })

  .catch((erro) => console.log(erro))

}, [])

export function validateEmail(email: any) {

  return String(email)

    .toLowerCase()

    .match(

      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    );

}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

  event.preventDefault();



  const email = (event.target as any).email.value;

  const score = (event.target as any).score.value;




  if(validateEmail(email)){

    return;

  }

 

  const config: AxiosRequestConfig = {

    baseURL: BASE_URL,

    method: 'PUT',

    url: '/scores',

    data: {

      email: email,

      movieId: movieId,

      score: score

    }

  }

  axios(config).then(response => {

    navigate("/");

  });
}
*/