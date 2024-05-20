import './style/reset.css';
import './style/common.css';
import './style/sidebar.css';

import { showSidebar, hideSidebar } from './modules/dropdown-menu.js';

const openSidebar = document.querySelector('#open-sidebar');
const closeSidebar = document.querySelector('#close-sidebar');
const sidebar = document.querySelector('#sidebar');

openSidebar.onclick = () => showSidebar(sidebar);
closeSidebar.onclick = () => hideSidebar(sidebar);

hideSidebar(sidebar);
