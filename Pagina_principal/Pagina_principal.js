import './Pagina_principal.css';

import './Navbar/navbar.css';
import { setupNavbar } from "./Navbar/navbar.js";
setupNavbar(document.getElementById('navbar'));

import './Categorias_menu/categorias_menu.css';
import { setupCategorias } from './Categorias_menu/categorias_menu.js';
setupCategorias(document.getElementById('btn-categorias'));

import './Precios-menu/precios-menu.css'
import { setupPrecios } from './Precios-menu/precios-menu.js';
setupPrecios(document.getElementById('btn-precios'))