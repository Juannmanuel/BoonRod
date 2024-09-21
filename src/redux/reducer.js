
import { GET_PRODUCTS_BY_CATEGORY, SET_SCROLL_DIRECTION, SET_CURRENT_SECTION, GET_ALL_SECTIONS } from "./actions";

const initialState = {
  products: [],
  sections: [],
  isScrollingUp: true,
  currentSection: " ",
  backUpSections: [{
    id: "cac6edce-2032-4e56-b3ff-a7de965d45c9",
    sectionName: "Novedades",
    title: "Nuevas colecciones disponibles.",
    description: "Explora nuestras últimas colecciones y mantente al día con las tendencias urbanas más recientes.",
    buttonText: "Explorar",
    images: [
      "https://i.postimg.cc/zvkMzks2/1.jpg",
      "https://i.postimg.cc/8kdxm17d/2.jpg",
      "https://i.postimg.cc/Wb2C9QZB/3.jpg",
      "https://i.postimg.cc/gjpQb7T6/4.jpg"
    ]
  },
  {
    id: "442a5562-8a4e-4f45-bea9-a6cfad24ed39",
    sectionName: "Ofertas",
    title: "Descuentos exclusivos para ti.",
    description: "Aprovecha nuestras ofertas especiales y consigue lo mejor en moda urbana a precios irresistibles.",
    buttonText: "Explorar",
    images: [
      "https://i.postimg.cc/MKq7853J/1.jpg",
      "https://i.postimg.cc/CKBD4Q5k/3.jpg",
      "https://i.postimg.cc/NMRH3210/4.jpg",
      "https://i.postimg.cc/Hxwvz2kW/5.jpg"
    ]
  },
  {
    id: "cab29002-445a-47a1-be1d-5126a3b7e9e4",
    sectionName: "Lookbook",
    title: "Inspírate con nuestros looks.",
    description: "Encuentra inspiración para tu estilo urbano con nuestra galería de looks seleccionados.",
    buttonText: "Explorar",
    images: [
      "https://i.postimg.cc/X7zLwhkc/3.jpg",
      "https://i.postimg.cc/mrxSnHqP/2.jpg",
      "https://i.postimg.cc/Hxmx7Zyp/6.jpg",
      "https://i.postimg.cc/4xH5w58C/1.jpg"
    ]
  }
  ]

};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case SET_SCROLL_DIRECTION:
      return {
        ...state,
        isScrollingUp: action.payload,
      };
    case SET_CURRENT_SECTION:
      return {
        ...state,
        currentSection: action.payload,
      };
    case GET_ALL_SECTIONS:
      return {
        ...state,
        sections: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;