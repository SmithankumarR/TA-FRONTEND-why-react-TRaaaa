import Article from './article';
import allArticles from '../data/allArticles.js';

function Articles() {
    return <>
    <section className="wrapperCard" >
        <ul>
            {
                allArticles.map((article) => (
                    <Article key={article.publishedAt} {...article} />
                ))
            }

        </ul>
    </section>
    </>
}

export default Articles;