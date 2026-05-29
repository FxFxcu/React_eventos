import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="header-izq">
          <span className="logo">
            <img className="logo" src="../public/c_1_-removebg-preview.png" alt="Logo Kittac" />
          </span>
          <span><h3>Kittac - Organizadora de eventos</h3></span>
        </div>
        <nav className="header-der">
          <a href="#">Nosotros</a>
          <a href="#">Eventos</a>
          <a href="#">Contactanos</a>
        </nav>
      </header>

      <main className="contenedor">
        <section className="seccion-dividida">
          <img className="imagen-fija" src="../public/home-carrousel1.webp" alt="Imagen de cabecera" />
          
          <div className="contenido-texto">
            <h1>KITTAC EVENTOS</h1>
            <h3>Hacemos que tu evento sea inolvidable</h3>
            <br />
            <p>En Kittac no organizamos eventos. Creamos momentos que se recuerdan toda la vida. Desde la primera idea hasta el último brindis, nos encargamos de cada detalle para que vos solo te ocupes de disfrutar. Bodas, 15 años, cumpleaños, egresados o cualquier celebración que tengas en mente: la hacemos realidad, a tu estilo y sin estrés.</p>
            <br />
            <p>Tu historia merece una celebración a la altura.</p>
          </div>
        </section>

        <section className="seccion-galeria">
          <div className="tarjeta-galeria">
            <img className="imagen-galeria" src="../public/photo-1606800052052-a08af7148866.avif" alt="Imagen de galería 1" />
            <div className="capa-oscura">
              <h2>Bodas</h2>
              <p>Civiles, religiosas o al aire libre. Te armamos todo el esquema para que solo disfrutes</p>
            </div>
          </div>

          <div className="tarjeta-galeria">
            <img className="imagen-galeria" src="../public/71Qk6Mh+c9L._AC_UF894,1000_QL80_.jpg" alt="Imagen de galería 2" />
            <div className="capa-oscura">
              <h2>15 años</h2>
              <p>Entrada soñada, pista de baile, shows y una noche única.</p>
            </div>
          </div>

          <div className="tarjeta-galeria">
            <img className="imagen-galeria" src="../public/organizar-eventos.webp" alt="Imagen de galería 3" />
            <div className="capa-oscura">
              <h2>Cumpleaños</h2>
              <p>Infantiles con animación y juegos, de adultos con barra y DJ.</p>
            </div>
          </div>
        </section>

        <section className="seccion-dividida">
          <div className="contenido-texto">
            <h1>Nuestros Servicios</h1>
            <p>Para que no tengas que coordinar con 10 proveedores distintos, en Kittac te lo ofrecemos. Contamos con catering que ofrece menús personalizados, equipo de DJ y animador, iluminación LED, cobertura fotográfica y audiovisual profesional, transporte para los novios, souvenirs personalizados, y mucho más.</p>
          </div>
          
          <img className="imagen-adicional" src="../public/1.jpg" alt="Imagen secundaria" />
        </section>

        <section className="seccion-formulario">
          <form className="formulario-contacto" action="#" method="POST">
            <h2>Formulario de Contacto</h2>
            
            <div className="grupo-input">
              <label htmlFor="nombre">Nombre y apellido</label>
              <input type="text" id="nombre" name="nombre" placeholder="Su nombre y apellido" required />
            </div>
            
            <div className="grupo-input">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" placeholder="Su correo" required />
            </div>

            <div className="grupo-input">
              <label htmlFor="tipoEvento">Tipo de evento</label>
              <input type="text" id="tipoEvento" name="tipoEvento" placeholder="El evento" required />
            </div>
            
            <div className="grupo-input">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." required></textarea>
            </div>
            
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>

      <footer>
        <p>Tu momento debe celebrarse, y tu celebración, es nuestra pasión.</p><br />
        <p>© 2026 Kittac. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;