import allColors from '../colors';
import '../stylesheets/style.css';
function App() {
    return (
        <div>
            {
                Object.keys(allColors).map((key) => (
                    <Color name={key} allColors={allColors[key]} />
                ))
            }
        </div>
    )
}

function Color(props) {
    return (
        <div className='container'>
            <p>{props.name}</p>
            <ul>
                {props.allColors.map((color, i) => {
                    <li>
                        <div className='color-box' style={{ backgroundColor: color }}>
                            <div className='info'>
                                <span>{i === 0 ? 50 : i * 100}</span>
                                <span className='colorName'>{color}</span>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default App;