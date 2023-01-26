import hbs from 'handlebars'
import pageIndex from './pages/index.tmp'

const data = {name: 'World!'}

const template = hbs.compile(pageIndex);
const html = template(data);

const rootNode = document.getElementById('root');
rootNode.innerHTML = html;