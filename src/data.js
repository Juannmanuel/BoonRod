
import newCollection1 from "../src/assets/images/Categorias/newCollection/1.png"
import newCollection2 from "../src/assets/images/Categorias/newCollection/2.png"
import newCollection3 from "../src/assets/images/Categorias/newCollection/3.png"
import newCollection4 from "../src/assets/images/Categorias/newCollection/4.png"
import newCollection5 from "../src/assets/images/Categorias/newCollection/5.png"
import newCollection6 from "../src/assets/images/Categorias/newCollection/6.png"
import hotSale1 from "../src/assets/images/Categorias/hotSale/1.png"
import hotSale2 from "../src/assets/images/Categorias/hotSale/2.png"
import hotSale3 from "../src/assets/images/Categorias/hotSale/3.png"
import hotSale4 from "../src/assets/images/Categorias/hotSale/4.png"
import hotSale5 from "../src/assets/images/Categorias/hotSale/5.jpg"
import sobreNosotros1 from "../src/assets/images/Categorias/sobreNosotros/1.png"
import sobreNosotros2 from "../src/assets/images/Categorias/sobreNosotros/2.jpg"
import sobreNosotros3 from "../src/assets/images/Categorias/sobreNosotros/3.jpg"
import footer1 from "./assets/images/Categorias/footer/1.png"
import footer2 from "./assets/images/Categorias/footer/2.png"
import footer3 from "./assets/images/Categorias/footer/3.png"
import footer5 from "./assets/images/Categorias/footer/5.png"

export const sections = [
  {
      section: "¿Quiénes Somos?",
      buttonText: "Conócenos",
      images: [
        sobreNosotros1,
        sobreNosotros2,
        sobreNosotros3,
      ],
      title: "Nuestra historia, tu estilo.",
      description: "Desde nuestros comienzos hasta hoy, conoce cómo nuestra dedicación define cada prenda."
  },
  {
      section: "Novedades",
      buttonText: "Explorar",
      images: [
          newCollection1,
          newCollection2,
          newCollection3,
          newCollection4,
          newCollection5,
          newCollection6,
      ],
      title: "Nuevas colecciones disponibles.",
      description: "Explora nuestras últimas colecciones y mantente al día con las tendencias urbanas más recientes."
  },
  {
      section: "Hot Sale",
      buttonText: "Hasta 30% OFF",
      images: [
        hotSale1,
        hotSale2,
        hotSale3,
        hotSale4,
        hotSale5,
      ],
      title: "Aprovecha nuestras ofertas exclusivas.",
      description: "Aprovecha las mejores ofertas y actualiza tu guardarropa sin gastar de más."
  },
  {
      section: "Catálogo",
      buttonText: "Ver Catálogo",
      images: [
        hotSale5,
        hotSale1,
        footer3,
        footer2,
        footer5,
      ],
      title: "Nuestra colección en un solo lugar.",
      description: "Revisa todas nuestras prendas y encuentra exactamente lo que buscas."
  },
  {
    section: "Lookbook",
    buttonText: "Inspírate",
    images: [
      hotSale5,
      newCollection2,
      footer3,
      hotSale3,
      newCollection4,
    ],
    title: "Inspírate con nuestro Lookbook.",
    description: "Encuentra las mejores combinaciones y estilos para llevar la moda urbana a otro nivel."
},
{
  section: "Contacto",
  buttonText: "Contactanos",
  images: [
    newCollection5,
    footer2,
    footer1,
    newCollection3,
    footer5,
  ],
  title: "Conecta con nosotros.",
  description:  "Si necesitas ayuda o tienes alguna duda, estamos a tu disposición para ayudarte en lo que necesites."
}
];

// export const prenda = {
//   nombre: "",
//   precio: "",
//   description: "",
//   talles: "",
//   descuento: [true, "20%"],
//   imagenes: {
//     modelo: [imagesModelo1,imagesModelo2,imagesModelo3,imagesModelo4],
//     prendas: []
//   }
// }
