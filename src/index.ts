import './style.css';
import getUnsplashLinkToImage from './components/start-page/wall';
import { categories, renderCart } from './components/start-page/categories';

categories.forEach((category) => renderCart(category));

document.body.addEventListener('click', getUnsplashLinkToImage);
