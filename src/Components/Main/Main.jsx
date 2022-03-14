/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <main>
      <section className="container">

        <div className="div-do-meio-direita">
          <section id="div-do-meio">
            <h1>Agência de Viajens - ETHERNUM</h1>

            <div className="box-right">
              <p>
                Com mais de 175 milhões de avaliações de hotéis agregadas e mais de 19 milhões de imagens, fica mais fácil encontrar informações sobre o local para onde você está viajando. Para ter uma visão geral de um hotel, a Ethernum exibe uma média das avaliações junto a diversas opiniões de outros sites de reservas, como Decorar, Hotel Mundano, Expedia, etc. A Ethernum ajuda você a encontrar informações sobre sua viagem para Paris, incluindo o hotel ideal para você!
              </p>
              <br />
              <Link to="#">
                <div className="button">Saiba Mais!</div>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>);
}