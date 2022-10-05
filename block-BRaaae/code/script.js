let allMovies = [
    {movie:"ForestGump",  watched: true},
    {movie:"Inception", watched: false},
]

let input = document.querySelector("input");
let root = document.querySelector("ul")
var form = document.querySelector("form");

function handleForm(event) { event.preventDefault(); };
form.addEventListener('submit', handleForm);

// let allMovies = [];


input.addEventListener( 'keyup', (event)=>{
    if( event.keyCode === 13 ){
        allMovies.push({
            movie: event.target.value,
            watched: false
        });
        root.innerHTML = "";
        createUI();
        event.target.value = "";
    }
} );

function handelClick(event){
    console.log(event.target.checked)
    if ( event.target.checked === true ) {
        event.target.nextSibling.nextSibling.innerText = "Watched"
    }
    else  {
        event.target.nextSibling.nextSibling.innerText = "To Watch"
    }
};

function handelDelete(event){
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
        createUI();
}


// function elm( type, attr={}, ...children ){
//     let element = document.createElement(type);
//     for ( let key in attr ){
//         if ( key.startsWith("data-") ){
//             element.setAttribute( key, attr[key] );
//         } else if ( key.startsWith("on") ){
//             let eventType = key.replace( 'on', '' ).toLowerCase();
//             element.addEventListener( eventType, attr[key] );
//         } 
//         else {
//             element[ key ] = attr[ key ];
//         }
//     }

//     children.forEach( ( child ) =>{
//         if ( typeof child === "object" ){
//             element.append( child );
//         } 
//         if ( typeof child === "string" ) {
//             let node = document.createTextNode( child );
//             element.append( node );
//         }
//     } )
//     return element;
// }

// ! <<<<<< create UI >>>>>
function createUI( data = allMovies ){
    // root.innerHTML = "";
    let movieUI = data.map((ele,i)=>{
        let li = React.createElement( 
            "li",
            {key:i},
        React.createElement('input', {
        type:"checkbox",
        name:"checkbox",
        onClick: handelClick
        } ),
        React.createElement( 'span', {}, ele.movie ),
        React.createElement('div', {}, ele.watched ? "Watched" : "notWatched"),
        React.createElement( "button", { className: 'delete','data-id':i, onClick: handelDelete }, "x" )
        );
        console.log(li)
        return li; 
    });
    // ReactDOM.unmountComponentAtNode(movieUI,root)

        ReactDOM.render( movieUI, root );
};

// ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);

createUI(allMovies);
