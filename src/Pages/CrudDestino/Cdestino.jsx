/* eslint-disable react/jsx-no-undef */
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { Table } from "react-bootstrap"
import './style.css'

/* eslint-disable import/no-anonymous-default-export */

export default () => {
  return (
    <div className="crud-destino">
      <Header />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Footer />
    </div>
  )
}
