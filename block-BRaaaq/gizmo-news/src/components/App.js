import Header from './header';
import Hero from './hero';
import Articles from './articles';
import Footer from './footer';

function App(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <Hero />
                <Articles />
            </main>
            <Footer />
        </>
    );
}

export default App;
