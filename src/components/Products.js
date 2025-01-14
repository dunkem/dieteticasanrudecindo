// Products.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Products.css';

const Products = () => {
  const rubros = [
    {
      img: "https://st3.depositphotos.com/1027198/13269/i/450/depositphotos_132694536-stock-photo-assorted-nuts-in-bowl.jpg",
      title: "Frutos Secos",
      description: "Ricas en omega-3 y antioxidantes, perfectas para snacks saludables.",
    },
    {
      img: "https://img-global.cpcdn.com/recipes/0ad1f8b8d56bcbe6/680x482cq70/granola-a-la-canela-sin-azucares-agregados-ni-edulcorantes-ni-miel-proteica-y-vegana-foto-principal.jpg",
      title: "Granola",
      description: "Una excelente fuente de vitamina E y magnesio.",
    },
    {
      img: "https://img.freepik.com/foto-gratis/fruta-infundida-agua-albaricoques-secos-hierbas-tallos-cereza-tetera-superficie-yeso-vista-superior_176474-6366.jpg",
      title: "Infusiones Dietéticas",
      description: "Ayuda a aumentar la masa muscular y acelerar la recuperación.",
    },
    {
      img: "https://img.freepik.com/foto-gratis/vista-superior-surtido-cereales-desayuno_23-2148697614.jpg",
      title: "Cereales",
      description: "Fuente completa de proteínas, ideal para ensaladas.",
    },
    {
      img: "https://img.freepik.com/fotos-premium/tienda-alimentos-granel-opciones-compra-granel-especias-otras-necesidades-aisladas-blanco_660230-54827.jpg",
      title: "Alimentos a Granel",
      description: "Alternativa vegetal baja en calorías, perfecta para batidos.",
    },
    {
      img: "https://img.freepik.com/foto-gratis/avena_1368-5511.jpg",
      title: "Avena",
      description: "Ideal para cocinar y añadir a batidos, rico en grasas saludables.",
    },
    {
      img: "https://img.freepik.com/foto-gratis/disposicion-plana-pretzels-garabatos_23-2148582652.jpg?semt=ais_hybrid",
      title: "Snacks Saludables",
      description: "Deliciosos y nutritivos, ideales para cualquier momento.",
    },
    {
      img: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Café",
      description: "Perfecto para comenzar el día con energía.",
    },
    {
      img: "https://media.istockphoto.com/id/1333852757/es/foto/temas-diet%C3%A9ticos-y-de-alimentos-saludables-alimentos-de-fibra.jpg?s=612x612&w=0&k=20&c=F4VPM3q2pniVN7H92GuT6r7xUUgD722Jc56mJ995O64=",
      title: "Pan y Pasta Integral o de Legumbres",
      description: "Opciones saludables y llenas de nutrientes.",
    },
    {
      img: "https://thumbs.dreamstime.com/b/hierbas-y-especias-para-cocinar-en-fondo-oscuro-113655482.jpg",
      title: "Especias y Condimentos",
      description: "Añade sabor y salud a tus comidas.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="products" className="productos">
      <h2 className="titulo-productos">RUBROS PRINCIPALES</h2>
      <Slider {...settings}>
        {rubros.map((rubro, index) => (
          <div className="producto-item" key={index}>
            <img className="producto-imagen" src={rubro.img} alt={rubro.title} />
            <h3 className="producto-titulo">{rubro.title}</h3>
            <p className="producto-descripcion">{rubro.description}</p>
          </div>
        ))}
      </Slider>

    </section>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      ➔
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      ➔
    </div>
  );
};

export default Products;
