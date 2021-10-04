import PreencheComodidades from "./modules/cardsComodidades.js";
import MenuMobile from "./modules/menuMobile.js";
import Galeria from "./modules/slideGaleria.js";

const preencheComodidades = new PreencheComodidades(
    ".container-comodidades",
    "#comodidades .comodidade__item"
)
preencheComodidades.init()

const galeria = new Galeria(
    ".slide-imgs",
    ".img-principal"
)
galeria.init();


const menuMobile = new MenuMobile(".hamburguer", ".header-mb nav") 
menuMobile.init()