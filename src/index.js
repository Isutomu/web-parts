import './style/reset.css';
import './style/common.css';
import './style/sidebar.css';
import './style/carousel.css';

import { showSidebar, hideSidebar } from './modules/dropdown-menu.js';
import createImageCarousel from './modules/carousel-dom.js';
import { fillCircle, showNextImage } from './modules/carousel-functions.js';

const openSidebar = document.querySelector('#open-sidebar');
const closeSidebar = document.querySelector('#close-sidebar');
const sidebar = document.querySelector('#sidebar');

openSidebar.onclick = () => showSidebar(sidebar);
closeSidebar.onclick = () => hideSidebar(sidebar);

hideSidebar(sidebar);
const colors = ['blue', 'red', 'yellow'];
document.querySelector('main').appendChild(createImageCarousel(colors));

fillCircle();
setInterval(() => {
  showNextImage((colors.length - 1) * 600);
  fillCircle();
}, 5000);
