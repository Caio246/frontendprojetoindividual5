/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Contato.css";

/* eslint-disable react/jsx-no-undef */

export default () => {
  return (
    <container>
      <Navbar />
      <div className="Form">
        <form>
          <label>Nome Completo</label>
          <input type="text" className="validate" />

          <label >E-mail</label>
          <input type="text" class="validate" />

          <textarea id="story" name="story" rows="10" cols="66">
            {" "}
          </textarea>
          <input type="submit" value="ENVIAR" />
        </form>
      </div>
      <Footer />
    </container>
  );
};

