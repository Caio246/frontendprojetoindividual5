/* eslint-disable react/jsx-no-undef */
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import { Table } from "react-bootstrap"
import "./Cdestino.css"


/* eslint-disable import/no-anonymous-default-export */

export default () => {
  return (
    <>
      <Navbar />
      <div className="crud-destino">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>telefone</th>
              <th>CPF</th>
              <th>E-mail</th>
              <th>Local de Partida</th>
              <th>Data de partida</th>
              <th>Local e chegada</th>
              <th>Data de chegada</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={1}>Larry the Bird</td>
              <td>@twitter</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  )
}

