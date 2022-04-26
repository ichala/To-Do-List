import './style.css';
import './reset.css';
import Control from './modules/control.js';
import Interactive from './modules/Interactive.js';

const Fn = new Control();
const InteractiveData = new Interactive();

Fn.InitData();
InteractiveData.GetDom();