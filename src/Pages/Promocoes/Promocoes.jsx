/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import cidade from "../../Components/img/cidade.jpg"
import deserto from "../../Components/img/deserto.jpg"
import india from "../../Components/img/india.jpg"
import trem from "../../Components/img/trem.jpg"
import './Promocoes.css'
/* eslint-disable react/jsx-no-undef */
export default () => {
  return (
    <>
      <Navbar />
      <div class="carrossel">
        <div>
          <div class="container-c" ig="img">
            <img src={cidade} />
            <img src={deserto} />
            <img src={india} />
            <img src={trem} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}