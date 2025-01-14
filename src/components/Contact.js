import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contacto contenedor-custom">
      <h2 className="titulo-custom">Contacto</h2>
      <div className="contacto-container-custom">
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          className="contact-form-custom"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group-custom">
            <label htmlFor="name" className="label-custom">Nombre:</label>
            <input type="text" id="name" name="name" required className="input-custom"/>
          </div>
          <div className="form-group-custom">
            <label htmlFor="email" className="label-custom">Email:</label>
            <input type="email" id="email" name="email" required className="input-custom"/>
          </div>
          <div className="form-group-custom">
            <label htmlFor="message" className="label-custom">Mensaje:</label>
            <textarea id="message" name="message" required className="textarea-custom"></textarea>
          </div>
          <button type="submit" className="submit-button-custom">Enviar</button>
        </form>
        <div className="contacto-info-custom">
          <h4 className="info-title">Teléfono</h4>
          <p className="info-text">1123423423</p>
          <h4 className="info-title">Email</h4>
          <p className="info-text">dieteticasanrudecindo@gmail.com</p>
          <h4 className="info-title">Dirección</h4>
          <p className="info-text">Hernandarias 2885, Bosques, Florencio Varela</p>
          <div className="map-container-custom">
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095285!2d144.95373631531882!3d-37.81627997975199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f1b87%3A0x5045675218ceed25!2sHernandarias%202885%2C%20Florencio%20Varela%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1637161468915!5m2!1sen!2sus"
              width="500"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
