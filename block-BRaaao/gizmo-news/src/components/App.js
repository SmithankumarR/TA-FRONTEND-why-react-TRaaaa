import Header from "./header";
import Hero from "./hero";
import Articles, { Card } from "./article";
import Footer from "./footer";
import '../styles/index.css';

function App(props) {
    return <>
        <Header /> <Hero /> <Articles /> <Footer />
    </>
}

export default App;
