import 'babel-polyfill';
import './styles.css';
import { detail } from './components/detail';
import { articles } from './components/articles';

const { pathname } = document.location;
const rootDiv = document.getElementById('content');

let item = '';

const parsedPathname = pathname.split('/')[1];

const renderContent = async () => {
  switch (parsedPathname) {
    case '':
      item = await articles();
      break;
    case 'tnc':
      item = '<h1>tnc page</h1>';
      break;
    case 'about':
      item = '<h1>about page</h1>';
      break;
    case 'writers':
      item = '<h1>writers page</h1>';
      break;
    case 'cat':
      item = '<h1>cat page</h1>';
      break;
    default:
      item = detail(pathname);
      break;
  }

  content.innerHTML = item;
};

const onNavigate = (pathname) => {
  alert('onNavigate', pathname);
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

function call286Dart123(a, b) {
  console.log(a + '\t' + b);
}

renderContent();
