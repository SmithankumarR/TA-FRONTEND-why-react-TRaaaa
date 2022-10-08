import img from '../images/hero.jpg';

function Hero() {
    return <>
        <h1 className="heading">Welcome to Gizmo-News </h1>
        <article>
            <img src={img} alt={img} width="100%" />
            <p className="Hero-subTitle"> These is an best application to discover whats happening around us go through the each articles you liked and explore yourself to it.</p>
        </article>
    </>
}

export default Hero;