import CardLanding from "../components/CardLanding";

export default function Home() {
  return (
    <main>
      <div className="main_container">
        <p>De ahora en adelante, hacés más con tu dinero</p>
        <div className="line_main"></div>
        <h2>
          Tu nueva <strong>billetera virtual</strong>
        </h2>
      </div>
      <div className="main_fixed"></div>
      <section className="card_landing_section">
        <div className="card_landing_container">
          <CardLanding
            title={"Transferí dinero"}
            body={
              "Desde Digital Money House vas a poder transferir dinero a otras cuentas,asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual"
            }
          />
          <CardLanding title={"Pago de servicios"} body={"Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel"} />
        </div>
      </section>
    </main>
  );
}
