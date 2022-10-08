function Article(props) {
    return (
        <div className="article">
            <li>
                <figure>
                    <img src={props.urlToImage} alt={props.title} />
                    <figcaption>
                        <h3> {props.title} </h3>
                    </figcaption>
                </figure>
                <p  className="article-content">{props.description}
                <a href={props.url}> Read More... </a> </p>
            </li>
        </div>
    );
}

export default Article;
