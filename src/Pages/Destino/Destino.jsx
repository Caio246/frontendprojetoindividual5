/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import api from '../../api'
import './Destino.css'
import { useEffect, useState } from "react"

/* eslint-disable react/jsx-no-undef */
export default () => {

  /*  const [destino, setDestino] = useState([])
  
    useEffect(() => {
      api.get("/Destino").then((res) => { setDestino(res.data) }).catch((erro) => console.log(erro))
    }, []) */

  return (
    <>
      <Header></Header>
      <div className="row">

        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="nome_completo" type="text" className="validate" />
              <label for="nome_completo">Nome Completo: </label>
            </div>

            <div className="input-field col s6">
              <input id="telefone" type="text" className="validate" />
              <label for="telefone">Telefone: </label>
            </div>

            <div className="input-field col s6">
              <input id="CPF" type="text" className="validate" />
              <label for="CPF">CPF: </label>
            </div>

            <div className="input-field col s6">
              <input id="e_mail" type="text" className="validate" />
              <label for="e_mail">E-mail: </label>
            </div>

            <div className="input-field col s6">
              <input id="data_partida" type="text" className="validate" />
              <label for="data_partida">Destino de partida:</label>
            </div>

            <div className="input-field col s6">
              <input id="data_partida" type="text" className="validate" />
              <label for="data_partida">Data de partida:</label>
            </div>

            <div className="input-field col s6">
              <input id="destino_chegada" type="text" className="validate" />
              <label for="destino_chegada">Destino de chegada:</label>
            </div>

            <div className="input-field col s6">
              <input id="data_chegada" type="text" className="validate" />
              <label for="data_chegada">Data de chegada:</label>
            </div>
            <input type="submit" value="ENVIAR" /><form></form>
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