import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para guardar el valor del input
  const [evento, setEvento] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (evento.trim() === '') {
      alert('Por favor, ingresa un tipo de evento (ej. Mis 15, Boda).');
      return;
    }
    console.log("Avanzando al siguiente módulo con el evento:", evento);
    // Aquí irá la lógica para avanzar al siguiente módulo
  };

  // Función para limpiar el input
  const handleReset = () => {
    setEvento('');
  };

  return (
    <div className="app-container">
      {/* Topbar */}
      <header className="site-header">
        <div className="container">
          <h3>Organizador de Eventos</h3>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="hero">
        <section className="container form-section">
          <h2>Bienvenido a Kittac</h2>
          <p>Su evento a solo unos clics</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <fieldset className="form-card">
              <legend>Tipo de evento</legend>

              <label htmlFor="eventoInput" className="sr-only">Tipo de evento</label>
              <input 
                id="eventoInput" 
                name="eventoInput" 
                type="text" 
                maxLength="20" 
                placeholder="Ej: Boda" 
                className="form-input" 
                value={evento}
                onChange={(e) => setEvento(e.target.value)}
              />

              <div className="form-actions">
                <button type="submit" className="btn-form btn-add">Siguiente</button>
                <button type="button" onClick={handleReset} className="btn-form btn-calc">Borrar</button>
              </div>

              <p className="register-note">
                Más información <a href="#registro" className="link-inline">aquí</a>
              </p>
            </fieldset>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p>Facundo Flores y Lara Caron. ©Kittac todos sus derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;