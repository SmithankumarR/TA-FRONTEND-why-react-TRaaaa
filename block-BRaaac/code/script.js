let input = document.querySelector(`.addMovie`);
let rootElm = document.querySelector('.movieList');

let allMovies = [];

input.addEventListener('keyup', (event) => {
    if (event.keycode === 13) {
        allMovies.push({
            name: event.target.value,
            watched: false,
        });
        event.target.value = '';
        createUI();
    }
});

function handleChange(event) {
    let id = event.target.id;

    allMovies[id].watched = !allMovies[id].watched;
    createUI(allMovies, rootElm);
}

// dynamic ui with more readable formate
function createUI(data, root) {
    root.innerHTML = '';
    data.forEach((movie, i) => {
        // let btn = createElement('button',{id:i, onclick:handleChange()}, movie.watched ? 'Watched' : 'To Watch');
        // btn.addEventListener('click',handleChange);
        let li = createElement(
            'li',
            null,
            createElement('label', { for: i }, movie.name),
            createElement(
                'button',
                { id: i, onClick: handleChange },
                movie.watched ? 'Watched' : 'To Watch'
            )
        );

        rootElm.append(li);
    });
}
createUI(allMovies, rootElm);

function createElement(type, attr = {}, ...children) {
    var element = document.createElement(type);
    // go through each key and value
    for (let key in attr) {
        if (key.startsWith('data-')) {
            element.setAttribute(key, attr[key]);
        } else if (key.startsWith('on')) {
            let eventType = key.replace('on', '').toLowerCase();
            element.addEventListener(eventType, attr[key]);
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
    });
    return element;
}
