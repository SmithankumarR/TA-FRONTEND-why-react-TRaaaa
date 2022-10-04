var input = document.querySelector(`input[type='text']`);
var rootElm = document.querySelector('.movieList');

var allMovies = [];

input.addEventListener('click', (event) => {
    if (event.keycode === 13) {
        allMovies.push({
            name: event.target.value,
            watched: false,
        })
    }
    event.target.value = " ";
    createUI(allMovies, rootElm);
})

function handleChange(event) {
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
    createUI(allMovies, rootElm);
}

function elem(type, attr = {}, ...children) {
    var element = document.createElement(type);
    // go through each key and value
    for (let key in attr) {
        if (key.startsWith('data-')) {
            element.setAttribute(key, attr[key]);
        } else {
            element[key] = attr[key];
        }
    }

    children.forEach((child) => {
        if (typeof child === 'object') {
            element.append(child);
        }
        if (typeof child === 'string') {
            let node = document.createTextNode(child);
            element.append(node);
        }
    })

}
// dynamic ui with more readable formate
function createUI(data = allMovies) {
    rootElm.innerHTML = " ";
    data.forEach((movie, i) => {
        let li = elem(li, {},
            elem('button', { id: i }, movie.watched ? 'Watched' : 'To Watch', handleChange),
            elem('h3', { for: i }, movie.name),
        )
        rootElm.append(li);
    })

}
createUI(allMovies,rootElm);