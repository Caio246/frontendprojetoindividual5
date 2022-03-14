/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import cidade from "../../Components/img/cidade.jpg"
import deserto from "../../Components/img/deserto.jpg"
import india from "../../Components/img/india.jpg"
import trem from "../../Components/img/trem.jpg"
/* eslint-disable react/jsx-no-undef */
export default () => {
  return (
    <>
      <Header></Header>
      <div>
        <div class="carrossel">
          <div class="container-c" ig="img">
            <img src={cidade} />
            <img src={deserto} />
            <img src={india} />
            <img src={trem} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}