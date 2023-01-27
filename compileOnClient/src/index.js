import hbs from 'handlebars'
import pageIndex from './pages/index.tmp'
import './partials/news-card.tmp'

const data = {
    posts: [
        {
            cardtemplate: 'blue',
            title: 'news 1',
            tags: [
                'bmv',
                'mersedec'
            ]
        },
        {
            title: 'news 2',
            tags: [
                'people',
                'journey'
            ]
        },
        {
            title: 'news 3',
            tags: [
                'home',
                'domestic'
            ]
        }
    ]
}

const template = hbs.compile(pageIndex);
const html = template(data);

const rootNode = document.getElementById('root');
rootNode.innerHTML = html;