import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="about-services">
      <div className="contenedor">
        <h2 className="titulo">Servicios Destacados</h2>
        <div className="servicio-cont">
          <div className="servicio-ind">
            <img src="https://img.freepik.com/vector-gratis/entrega-servicios-envio-linea-seguimiento-pedidos-linea-entrega-hogar-oficina-mensajeria-camion-scooter-bicicleta-envio-paquetes-pines-ubicacion-telefono-movil-repartidor_1150-58774.jpg?semt=ais_hybrid" alt="Envíos a Todo el País" className="servicio-img" />
            <h3>Envíos a Todo Buenos Aires</h3>
            <p>Contamos con opciones de envío rápido y seguro.</p>
          </div>
          <div className="servicio-ind">
            <img src="https://images.ecestaticos.com/2Muq7zYgT6E511uNKc0Q06WRmr4=/0x109:2119x1301/1338x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F083%2F9d3%2F9a2%2F0839d39a2751a3b36689e6fc6996ea62.jpg" alt="Productos de Calidad" className="servicio-img" />
            <h3>Productos de Calidad</h3>
            <p>Todos nuestros productos son seleccionados con los más altos estándares.</p>
          </div>
          <div className="servicio-ind">
            <img src="https://lasfor.com.ar/wp-content/uploads/2021/03/dietetica-chica.jpg" alt="Asesoría Nutricional" className="servicio-img" />
            <h3>Asesoría Nutricional</h3>
            <p>Ofrecemos asesoría personalizada para una dieta equilibrada.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
